'use client';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { MainNav } from './mainNav';
import { MobileNav } from './mobileNav';
import { ModeToggle } from './modeToggle';
import { buttonVariants } from './ui/button';

export function SiteHeader() {
  return (
    <header className='z-10 sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 max-w-screen-2xl items-center'>
        <MainNav />
        <div className='flex flex-1 items-center justify-end space-x-2'>
          <nav className='flex items-center'>
            <Link
              href={siteConfig.links.linkedin}
              target='_blank'
              rel='noreferrer'
            >
              <div
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'w-10 px-0 hidden sm:inline-flex'
                )}
              >
                <FaLinkedinIn size={20} />
                <span className='sr-only'>LinkedIn</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.github}
              target='_blank'
              rel='noreferrer'
            >
              <div
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'w-10 px-0 hidden sm:inline-flex'
                )}
              >
                <FaGithub size={20} />
                <span className='sr-only'>Github</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target='_blank'
              rel='noreferrer'
            >
              <div
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'w-10 px-0 hidden sm:inline-flex'
                )}
              >
                <FaXTwitter size={20} />
                <span className='sr-only'>Twitter</span>
              </div>
            </Link>
            <ModeToggle />
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  );
}
