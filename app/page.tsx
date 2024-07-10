import { posts } from '#site/content';
import { Hero } from '@/components/hero';
import { PostItem } from '@/components/postItem';
import { sortPosts } from '@/lib/utils';

export default function Home() {
  const publishedPosts = posts.filter(post => post.published);
  const latestPosts = sortPosts(publishedPosts).slice(0, 5);

  return (
    <>
      <Hero />
      <section className='container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-60'>
        <h2 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center'>
          Latest Posts
        </h2>
        <ul className='flex flex-col'>
          {latestPosts.map(post => (
            <li key={post.slug} className='first:border-t first:border-border'>
              <PostItem
                slug={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
