import React from 'react';
import InfoItems from './InfoItems';
import ComponentViewIntersection from 'components/providers/ComponentViewIntersection';
import Image from 'next/image'



const Info = () => {
  return (
    <div id='about' className='flex flex-col h-screen w-screen grid place-items-center'>
      <div className="flex flex-col gap-8 items-center justify-center w-full">
        <ComponentViewIntersection threshold={0.8} >
          {(intersection) =>
          (<div className={`rounded-full bg-amber-600/20 backdrop-blur-lg shadow-sm shadow-stone-900 aspect-square w-48 grid place-items-center overflow-hidden ${intersection.isVisible ? 'animate-fade-in' : 'opacity-0'}`} >
            <Image src="/rei-portrait-square.jpeg" alt="profile" width={1800} height={1800} className=" h-full w-full grayscale hover:grayscale-0 hover:scale-105 transition-all transition-700 ease-in-out" />
          </div>)
          }
        </ComponentViewIntersection>
        <InfoItems />
      </div>
    </div>
  );
};

export default Info;
