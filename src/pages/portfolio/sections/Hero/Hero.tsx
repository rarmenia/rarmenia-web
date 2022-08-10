import React from 'react';
import TagWrapper from '../../../../components/TagWrapper';
import Headline from './Headline';

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-stone-800 flex flex-col border-b-2 border-stone-900"
    >
      <TagWrapper tag="Hero" className="p-2">
        <div className="flex-grow"></div>
        <Headline />
        <div className="flex-grow"></div>
        <div
          className="animate-bounce text-xs text-white  self-end"
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll For More &rarr;
        </div>
      </TagWrapper>
    </div>
  );
};

export default Hero;
