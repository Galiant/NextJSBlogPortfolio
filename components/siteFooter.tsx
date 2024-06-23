import { siteConfig } from '@/config/site';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';

export function SiteFooter() {
  return (
    <footer>
      <div className='mb-6 mt-6 flex flex-col items-center'>
        <div className='mb-6 flex space-x-4'>
          <a
            target='_blank'
            rel='noreferrer'
            href={`mailto:${siteConfig.email}`}
          >
            <span className='sr-only'>Mail</span>
            <IoIosMail size={24} />
          </a>
          <a target='_blank' rel='noreferrer' href={siteConfig.links.linkedin}>
            <span className='sr-only'>LinkedIn</span>
            <FaLinkedinIn size={24} />
          </a>
          <a target='_blank' rel='noreferrer' href={siteConfig.links.github}>
            <span className='sr-only'>GitHub</span>
            <FaGithub size={24} />
          </a>
          <a target='_blank' rel='noreferrer' href={siteConfig.links.twitter}>
            <span className='sr-only'>Twitter</span>
            <FaXTwitter size={24} />
          </a>
        </div>
        <div className='mb-6 flex space-x-2 text-sm text-muted-foreground'>
          &copy; 2024 {siteConfig.author}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
