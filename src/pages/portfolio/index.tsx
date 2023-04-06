import {
  HomeIcon,
  BoltIcon,
  BuildingOfficeIcon,
  ServerIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import React from 'react';
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';
import PortfolioTopBar from './PortfolioTopBar';
import About from './sections/About/About';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Technologies from './sections/Technologies/Technologies';
import WorkExperience from './sections/WorkExperience/WorkExperience';
import ScreenBackground from 'components/visuals/ScreenBackground';
import { vimeo_link } from 'utils/vimeo';
import PortfolioBackground from './PortfolioBackground';
import HeroContent from './sections/Hero/HeroContent';

const Portfolio: NextPageWithLayout = () => {
  const steps = [
    {
      id: 'about',
      icon: <UserIcon className="h-6" />,
      content: <About />,
    },
    // {
    //   id: 'technologies',
    //   icon: <ServerIcon className="h-6" />,
    //   content: <Technologies />,
    // },
    // {
    //   id: 'work-experience',
    //   icon: <BuildingOfficeIcon className="h-6" />,
    //   content: <WorkExperience />,
    // },
    // {
    //   id: 'projects',
    //   icon: <BoltIcon className="h-6" />,
    //   content: <Projects />,
    // },
  ];

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
      <div className="bg-transparent w-screen z-10 isolate">
        <main className="w-full">
          <div className="sr-only"><HeroContent opacity={0} translateY={0} /> </div>
          <div className="bg-transparent h-screen w-screen" />
          {steps.map((step) => (
            <React.Fragment key={step.id}>{step.content}</React.Fragment>
          ))}
        </main>
      </div>
    </div>
  );
};

Portfolio.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <PortfolioTopBar />
      {page}
    </>
  );
};

export default Portfolio;
