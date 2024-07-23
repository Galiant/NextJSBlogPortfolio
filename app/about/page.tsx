import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { WorkExperience } from '@/components/workExperience';
import { siteConfig } from '@/config/site';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me | Antonijo Galic',
  description: 'Information about me',
};

export default async function AboutPage() {
  return (
    <div className='container max-w-4xl py-6 lg:py-10'>
      <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
        <div className='flex-1 space-y-4'>
          <h1 className='inline-block font-black text-4xl lg:text-5xl'>
            About me
          </h1>
          <p className='text-xl text-muted-foreground'>Find more about me</p>
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
            {siteConfig.jobTitle}
          </p>
        </div>
        <p className='text-lg pb-4 leading-8'>
          <span className='font-bold'>Hello there!</span> {siteConfig.aboutMe}
        </p>
      </div>
      <div>
        <div className='flex-1'>
          <h2 className='inline-block font-black text-3xl lg:text-4xl mt-12'>
            Recent experience
          </h2>
          {siteConfig.workExperience.map(workExperience => (
            <WorkExperience
              timeInterval={workExperience.timeInterval}
              position={workExperience.position}
              company={workExperience.company}
              description={workExperience.description}
              key={workExperience.timeInterval}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
