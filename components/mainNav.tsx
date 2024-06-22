'use-client';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function MainNav() {
  const pathname = usePathname();
  return (
    <nav className='flex items-center space-x-4 lg:space-x-6'>
      <Link href='/' className='mr-6 flex items-center space-x-2'>
        <span className='font-bold px-2 py-1 bg-black dark:bg-white text-white dark:text-black tracking-wide'>
          AG
        </span>
        <span className='font-bold'>{siteConfig.name}</span>
      </Link>
      <Link
        href='/'
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block',
          pathname === '/' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        Home
      </Link>
      <Link
        href='/blog'
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block',
          pathname === '/blog' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        Blog
      </Link>
      <Link
        href='/notes'
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block',
          pathname === '/notes' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        Notes
      </Link>
      <Link
        href='/about'
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block',
          pathname === '/about' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        About
      </Link>
    </nav>
  );
}
