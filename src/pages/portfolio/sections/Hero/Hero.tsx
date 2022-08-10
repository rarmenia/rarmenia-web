import { ChevronDoubleDownIcon } from '@heroicons/react/outline';
import React from 'react';
import TagWrapper from '../../../../components/TagWrapper';
import Headline from './Headline';

const Hero = () => {
  return (
    <div id="hero" className="min-h-screen bg-stone-800 flex flex-col">
      <TagWrapper tag="Hero" className="p-2">
        <div className="flex-grow"></div>
        <Headline />
        <div className="flex-grow"></div>
        <div className="place-self-center mb-2">
          <div className="text-xs text-center text-white flex flex-row align-items-center justify-content-center animate-bounce">
            <ChevronDoubleDownIcon className="h-3 mr-2 mt-[.175em]" />
            <div>Scroll Down For More</div>
            <ChevronDoubleDownIcon className="h-3 ml-2 mt-[.175em]" />
          </div>
        </div>
      </TagWrapper>
    </div>
  );
};

export default Hero;
