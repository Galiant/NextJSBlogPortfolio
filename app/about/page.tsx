import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { siteConfig } from '@/config/site';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me | Antonijo Galic',
  description: 'Information about me',
};

export default async function AboutPage() {
  return (
    <div className='container max-w-6xl py-6 lg:py-10'>
      <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
        <div className='flex-1 space-x-4'>
          <h1 className='inline-block font-black text-4xl lg:text-5xl'>
            About me
          </h1>
        </div>
      </div>
      <hr className='my-8' />
      <div className='flex flex-col md:flex-row gap-8 items-center md:items-start'>
        <div className='min-w-48 max-w-48 flex flex-col gap-2'>
          <Avatar className='h-48 w-48'>
            <AvatarImage src='/profile.jpg' alt={siteConfig.author} />
            <AvatarFallback>AG</AvatarFallback>
          </Avatar>
          <h2 className='text-2xl font-bold text-center break-words'>
            {siteConfig.author}
          </h2>
          <p className='text-muted-foreground text-center break-words'>
            Software Developer
          </p>
        </div>
        <p className='text-muted-foreground text-lg py-4'>
          <span className='font-bold'>Hello there!</span> My name is Antonijo,
          and I’m thrilled to welcome you to my corner of the digital world. As
          a devoted husband and father, family is at the heart of everything I
          do. By day, I don the hat of a fullstack developer, navigating the
          intricate landscapes of code to craft innovative solutions. Beyond the
          lines of code, I’m a passionate advocate for continuous learning and
          exploration, always seeking new avenues to expand my knowledge and
          skills. Join me on this journey as we unravel the mysteries of
          technology and delve into the endless possibilities it offers.
        </p>
      </div>
    </div>
  );
}
