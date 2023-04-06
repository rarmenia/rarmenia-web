import React from 'react';
import InfoItems from './InfoItems';



const About = () => {
  return (
    <div id='about' className='flex flex-col  py-[10vh] flex flex-col gap-8 items-center justify-center'>
      <div className="rounded-full bg-amber-600 aspect-square w-8/12 max-w-[12rem] md:max-w-[12rem]" />
      <InfoItems />
    </div>
  );
};

export default About;
