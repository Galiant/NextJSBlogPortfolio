import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className='bg-white dark:bg-gray-900 '>
      <div className='container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12'>
        <div className='wf-ull lg:w-1/2'>
          <p className='text-md font-medium text-black-500 dark:text-white-400'>
            404 error
          </p>
          <h1 className='mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl'>
            Page not found
          </h1>
          <p className='mt-4 text-gray-500 dark:text-gray-400'>
            Sorry, the page you are looking for doesn't exist. Here are some
            helpful links:
          </p>

          <div className='flex items-center mt-6 gap-x-3'>
            <Link
              href='/'
              className={cn(buttonVariants({ size: 'lg' }), 'w-full sm:w-fit')}
            >
              Home
            </Link>
            <Link
              href='/blog'
              className={cn(buttonVariants({ size: 'lg' }), 'w-full sm:w-fit')}
            >
              Blog
            </Link>
          </div>
        </div>

        <div className='relative w-full mt-8 lg:w-1/2 lg:mt-0'>
          <Image
            className='w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover '
            src='https://images.unsplash.com/photo-1613310023042-ad79320c00ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
            alt=''
            width={800}
            height={800}
          />
        </div>
      </div>
    </section>
  );
}
