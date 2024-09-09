import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import ScrollComponent from './scrollComponent';
import { buttonVariants } from './ui/button';

export function Hero() {
  return (
    <section className='space-y-6 h-screen flex'>
      <div className='container flex flex-col gap-4 text-center self-center'>
        <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance'>
          Hello, I&apos;m Antonijo
        </h1>
        <p className='max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance'>
          I&apos;m creating fullstack web applications
        </p>
        <div className='flex flex-col gap-4 justify-center sm:flex-row'>
          <Link
            href='/blog'
            className={cn(buttonVariants({ size: 'lg' }), 'w-full sm:w-fit')}
          >
            View blog
          </Link>
          <Link
            href={`mailto:${siteConfig.email}`}
            target='_blank'
            rel='noreferrer'
            className={cn(
              buttonVariants({ variant: 'outline', size: 'lg' }),
              'w-full sm:w-fit'
            )}
          >
            Get in touch
          </Link>
        </div>
      </div>
      <ScrollComponent />
    </section>
  );
}
