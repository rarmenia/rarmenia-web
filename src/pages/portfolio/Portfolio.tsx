import React from 'react';
import Hero from './sections/Hero/Hero';
import { vimeo_link } from 'utils/vimeo';
import PortfolioBackground from './PortfolioBackground';
import HeroContent from './sections/Hero/HeroContent';
import Info from './sections/Info/Info';
import Blurb from './sections/Blurb';

const Portfolio = () => {

  return (
    <div className="relative">
      <PortfolioBackground
        video={vimeo_link(
          '697318636',
          { autoplay: 1, autopause: 0, muted: true, loop: 1, controls: 0, title: 0, byline: 0, portrait: 0, quality: '720p' }
        )}
        aspect={1.9 / 1}
        multiplyContent={<Hero />}
      />
      <div className="bg-transparent w-screen z-10 isolate py-2">
        <main className="w-full">

          {/* Ensure that HeroContent will appear in Screen Readers */}
          <div className="sr-only"><HeroContent opacity={0} translateY={0} /> </div> ?

          {/* Offset one Full Screen -> function as  HERO */}
          <div className="bg-transparent h-screen w-screen" />

          <Info />

          <Blurb />

        </main>
      </div>
    </div>
  );
};


export default Portfolio;
