'use client';

import { siteConfig } from '@/config/site';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Icons } from './icons';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant='outline' className='w-10 px-0 sm:hidden'>
          <FiMenu size={20} />
          <span className='sr-only'>Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='right'>
        <MobileLink
          onOpenChange={setOpen}
          href='/'
          className='flex items-center'
        >
          <Icons.logo className='mr-2 h-4 w-4' />
          <span className='font-bold'>{siteConfig.name}</span>
        </MobileLink>
        <Separator className='mt-4' />
        <div className='flex flex-col gap-3 mt-3'>
          <MobileLink onOpenChange={setOpen} href='/'>
            Home
          </MobileLink>
          <MobileLink onOpenChange={setOpen} href='/blog'>
            Blog
          </MobileLink>
          <MobileLink onOpenChange={setOpen} href='/notes'>
            Notes
          </MobileLink>
          <MobileLink onOpenChange={setOpen} href='/about'>
            About
          </MobileLink>
          <Separator />
          <Link
            target='_blank'
            rel='noreferrer'
            href={siteConfig.links.linkedin}
          >
            LinkedIn
          </Link>
          <Link target='_blank' rel='noreferrer' href={siteConfig.links.github}>
            Github
          </Link>
          <Link
            target='_blank'
            rel='noreferrer'
            href={siteConfig.links.twitter}
          >
            Twitter
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function MobileLink({
  href,
  onOpenChange,
  children,
  className,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
