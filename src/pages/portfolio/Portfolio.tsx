import React from 'react';
import Hero from './sections/Hero/Hero';
import { vimeo_link } from '@utils/vimeo';
import PortfolioBackground from './PortfolioBackground';
import HeroContent from './sections/Hero/HeroContent';
import Info from './sections/Info/Info';
import PortfolioTopBar from './PortfolioTopBar';
import Work from './sections/Work/Work';
import { Me } from '@data/me';

const Portfolio = () => {

  return (
    <>
      <PortfolioTopBar />
      <div className='relative'>
        <PortfolioBackground
          video={vimeo_link(
            '385101859',
            { autoplay: 1, autopause: 0, muted: true, loop: 1, controls: 0, title: 0, byline: 0, portrait: 0, quality: '720p' }
          )}
          aspect={1.9 / 1}
          multiplyContent={<Hero />}
          img='/img/background-still.png'
        />
        <div className='bg-transparent w-screen z-10 isolate py-2'>
          <main>

            {/* Ensure that HeroContent will appear in Screen Readers */}
            <div className='sr-only'><HeroContent /></div>
            {/* Offset one Full Screen -> function as  HERO */}
            <div className='bg-transparent h-screen' />


            <div className='flex flex-col gap-60 mb-20'>

              <Info />
              <Work workplaces={Me.professional.work} />

            </div>



          </main>
        </div>
      </div>
    </>
  );
};


export default Portfolio;
