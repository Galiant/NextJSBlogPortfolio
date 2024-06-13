import { notes } from '#site/content';
import { MDXContent } from '@/components/mdxComponents';
import { Tag } from '@/components/tag';
import { siteConfig } from '@/config/site';
import '@/styles/mdx.css';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface NotePageProps {
  params: {
    slug: string[];
  };
}

async function getNoteFromParams(params: NotePageProps['params']) {
  const slug = params?.slug?.join('/');
  const note = notes.find(note => note.slugAsParams === slug);

  return note;
}

export async function generateMetadata({
  params,
}: NotePageProps): Promise<Metadata> {
  const note = await getNoteFromParams(params);

  if (!note) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set('title', note.title);

  return {
    title: `${note.title} | Antonijo Galic`,
    description: note.description,
    authors: { name: siteConfig.author },
    openGraph: {
      title: note.title,
      description: note.description,
      type: 'article',
      url: note.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 600,
          alt: note.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: note.title,
      description: note.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

export async function generateStaticParams(): Promise<
  NotePageProps['params'][]
> {
  return notes.map(note => ({ slug: note.slugAsParams.split('/') }));
}

export default async function NotePage({ params }: NotePageProps) {
  const note = await getNoteFromParams(params);

  if (!note || !note.published) {
    notFound();
  }
  return (
    <article className='container py-6 prose dark:prose-invert max-w-3xl mx-auto'>
      <h1 className='mb-2'>{note.title}</h1>
      {note.description ? (
        <p className='text-xl mt-0 text-muted-foreground'>{note.description}</p>
      ) : null}
      <div className='flex gap-2 mb-2'>
        {note.tags?.map(tag => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
      <hr className='my-4' />
      <MDXContent code={note.body} />
    </article>
  );
}
