import React from 'react';
import InfoItems from './InfoItems';
import ComponentViewIntersection from 'components/processors/ComponentViewIntersection';



const Info = () => {
  return (
    <div id='about' className='flex flex-col h-screen w-screen grid place-items-center'>
      <div className="flex flex-col gap-8 items-center justify-center w-full">
        <ComponentViewIntersection threshold={0.8} >
          {(intersection) =>
          (<div className={`rounded-full bg-amber-600 aspect-square w-48 grid place-items-center ${intersection.isVisible ? 'animate-fade-in' : 'opacity-0'}`} >
            image placeholder
          </div>)
          }
        </ComponentViewIntersection>
        <InfoItems />
      </div>
    </div>
  );
};

export default Info;
