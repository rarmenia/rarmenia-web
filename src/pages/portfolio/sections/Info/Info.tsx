import React from 'react';
import InfoItems from './InfoItems';



const Info = () => {
  return (
    <div id='about' className='flex flex-col h-screen w-screen grid place-items-center'>
      <div className="flex flex-col gap-8 items-center justify-center w-full">
        <div className="rounded-full bg-amber-600 aspect-square w-8/12 max-w-[12rem] md:max-w-[12rem]" />
        <InfoItems />
      </div>
    </div>
  );
};

export default Info;
