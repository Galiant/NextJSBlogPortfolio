import { notes, posts } from '#site/content';
import { PostItem } from '@/components/postItem';
import { QueryPagination } from '@/components/queryPagination';
import { Tag } from '@/components/tag';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getAllTags, sortPosts, sortTagsByCount } from '@/lib/utils';
import { Metadata } from 'next';

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

const POSTS_PER_PAGE = 5;

export const metadata: Metadata = {
  title: 'Blog | Antonijo Galic',
  description: 'This is my digital corner for all things dev',
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const publishedPosts = posts.filter(post => post.published);
  const sortedPosts = sortPosts(publishedPosts);

  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  const allContent = [...posts, ...notes];
  const tags = getAllTags(allContent);

  const sortedTags = sortTagsByCount(tags);

  return (
    <div className='container max-w-4xl py-6 lg:py-10'>
      <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
        <div className='flex-1 space-y-4'>
          <h1 className='inline-block font-black text-4xl lg:text-5xl'>Blog</h1>
          <p className='text-xl text-muted-foreground'>
            My digital corner for all things dev
          </p>
        </div>
      </div>
      <div className='grid grid-cols-12 gap-3 mt-8'>
        <div className='col-span-12 col-start-1'>
          <hr />
          {displayPosts?.length > 0 ? (
            <ul className='flex flex-col'>
              {displayPosts.map(post => {
                const { slug, title, description, date, tags } = post;
                return (
                  <li key={slug}>
                    <PostItem
                      slug={slug}
                      title={title}
                      description={description}
                      date={date}
                      tags={tags}
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>Nothing to see here yet</p>
          )}
          <QueryPagination
            totalPages={totalPages}
            className='justify-end mt-4'
          />
        </div>
        <Card className='col-span-12 row-start-3 h-fit'>
          <CardHeader>
            <CardTitle>Tags</CardTitle>
          </CardHeader>
          <CardContent className='flex flex-wrap gap-2'>
            {sortedTags?.map(tag => (
              <Tag tag={tag} key={tag} count={tags[tag]} />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
