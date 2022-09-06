import { ChevronDoubleDownIcon } from '@heroicons/react/outline';
import React from 'react';
import ParticleEngineWrapper from '../../../../components/ParticleEngineWrapper';
import TagWrapper from '../../../../components/TagWrapper';
import { Links } from '../../../../configs/particles';
import Headline from './Headline';

const Hero = () => {
  return (
    <>
      <ParticleEngineWrapper
        id="heroParticles"
        options={Links}
        className="bg-amber-700 h-[80vh] w-full absolute top-0 left-0"
      />
      <div
        id="hero"
        className="h-[80vh] bg-transparent flex flex-col items-center justify-center border-b-2 border-stone-900 z-30"
      >
        <TagWrapper
          tag="Hero"
          className={{ open: 'self-start', close: 'self-end' }}
        >
          <div className="flex-grow"></div>
          <div className="z-50 w-auto">
            <Headline />
          </div>
          <div className="flex-grow"></div>
        </TagWrapper>
      </div>
      <div className="h-[10vh] mb-[3vh] bg-amber-700 rounded-b-[80rem] flex flex-col items-center justify-end">
        <div className="text-white flex flex-row mb-4 items-center justify-center animate-bounce">
          <ChevronDoubleDownIcon className="h-4" />
          <div>Scroll For More</div>
          <ChevronDoubleDownIcon className="h-4" />
        </div>
      </div>
    </>
  );
};

export default Hero;
