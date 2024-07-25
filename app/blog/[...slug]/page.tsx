import { posts } from '#site/content';
import { CustomBreadcrumb } from '@/components/breadcrumb';
import { MDXContent } from '@/components/mdxComponents';
import { PostItem } from '@/components/postItem';
import { Tag } from '@/components/tag';
import { siteConfig } from '@/config/site';
import { sortPosts } from '@/lib/utils';
import '@/styles/mdx.css';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps['params']) {
  const slug = params?.slug?.join('/');
  const post = posts.find(post => post.slugAsParams === slug);

  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set('title', post.title);

  return {
    title: `${post.title} | Antonijo Galic`,
    description: post.description,
    authors: { name: siteConfig.author },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: post.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 600,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps['params'][]
> {
  return posts.map(post => ({ slug: post.slugAsParams.split('/') }));
}

export default async function PostPage({ params }: PostPageProps) {
  const publishedPosts = posts.filter(post => post.published);
  const latestPosts = sortPosts(publishedPosts).slice(0, 5);

  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }
  return (
    <>
      <article className='container py-6 prose prose-lg dark:prose-invert max-w-4xl mx-auto'>
        <CustomBreadcrumb postTitle={post.title} parent='Blog' />
        <h1 className='mb-2'>{post.title}</h1>
        {post.description ? (
          <p className='text-xl mt-0 text-muted-foreground'>
            {post.description}
          </p>
        ) : null}
        <div className='flex gap-2 mb-2'>
          {post.tags?.map(tag => (
            <Tag tag={tag} key={tag} />
          ))}
        </div>
        <hr className='my-4' />
        <MDXContent code={post.body} />
      </article>
      <section className='container max-w-4xl py-10 lg:py-16 flex flex-col space-y-6'>
        <h2 className='text-3xl font-black'>Latest Posts</h2>
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
