'use client';

import { useEffect } from 'react';

const ScrollComponent = () => {
  useEffect(() => {
    const element = document.querySelector('.mouse-element');

    const handleScroll = () => {
      if (window.scrollY > 0) {
        element.style.display = 'none';
      } else {
        element.style.display = 'block';
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='mouse-element'>
      <div className='h-[54px] w-[33px] bg-transparent border-2 border-primary rounded-[25px] fixed bottom-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center animate-bounce mouse-element'>
        <div className='w-[5px] h-[5px] bg-primary rounded-full mt-[4px] animate-bounce'></div>
        <div className='w-[5px] h-[5px] bg-primary rounded-full mt-[4px] animate-bounce'></div>
      </div>
    </div>
  );
};

export default ScrollComponent;
