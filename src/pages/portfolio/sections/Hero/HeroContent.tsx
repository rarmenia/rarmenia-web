import React from 'react';
import HeroName from './HeroName';
import HeroDescribers from './HeroDescribers';

interface Props {
}


const HeroContent = (props: Props) => {
  return <div className='absolute inset-0 grid place-items-center text-white font-mono'>
    <div
      className='animate-fade-in flex flex-col items-center justify-center gap-4 md:gap-0.5  border-[2px] border-blue-300/70 rounded-md select-none p-8 min-w-[60%]'>

      <HeroName />

      <div className='w-1/2 border-b-2 border-white md:mb-4' />

      <HeroDescribers />

    </div>
  </div>
}

export default HeroContent;
