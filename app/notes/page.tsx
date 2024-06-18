import { notes, posts } from '#site/content';
import { PostItem } from '@/components/postItem';
import { QueryPagination } from '@/components/queryPagination';
import { TagsCard } from '@/components/tagsCard';
import { getAllTags, sortPosts } from '@/lib/utils';
import { Metadata } from 'next';

interface NotesPageProps {
  searchParams: {
    page?: string;
  };
}

const NOTES_PER_PAGE = 5;

export const metadata: Metadata = {
  title: 'Notes | Antonijo Galic',
  description: 'My notes for all things dev',
};

export default async function NotesPage({ searchParams }: NotesPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const publishedNotes = notes.filter(note => note.published);
  const sortedNotes = sortPosts(publishedNotes);

  const totalPages = Math.ceil(sortedNotes.length / NOTES_PER_PAGE);

  const displayNotes = sortedNotes.slice(
    NOTES_PER_PAGE * (currentPage - 1),
    NOTES_PER_PAGE * currentPage
  );

  const allContent = [...posts, ...notes];
  const tags = getAllTags(allContent);

  return (
    <div className='container max-w-4xl py-6 lg:py-10'>
      <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
        <div className='flex-1 space-y-4'>
          <h1 className='inline-block font-black text-4xl lg:text-5xl'>
            Notes
          </h1>
          <p className='text-xl text-muted-foreground'>
            My notes for all things dev
          </p>
        </div>
      </div>
      <div className='grid grid-cols-12 gap-3 mt-8'>
        <div className='col-span-12 col-start-1'>
          <hr />
          {displayNotes?.length > 0 ? (
            <ul className='flex flex-col'>
              {displayNotes.map(note => {
                const { slug, title, description, date, tags } = note;
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
        <TagsCard tags={tags} />
      </div>
    </div>
  );
}
