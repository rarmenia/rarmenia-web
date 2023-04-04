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

const Portfolio: NextPageWithLayout = () => {
  const steps = [
    {
      id: 'hero',
      icon: <HomeIcon className="h-6" />,
      content: <Hero />,
    },
    {
      id: 'about',
      icon: <UserIcon className="h-6" />,
      content: <About />,
    },
    {
      id: 'technologies',
      icon: <ServerIcon className="h-6" />,
      content: <Technologies />,
    },
    {
      id: 'work-experience',
      icon: <BuildingOfficeIcon className="h-6" />,
      content: <WorkExperience />,
    },
    {
      id: 'projects',
      icon: <BoltIcon className="h-6" />,
      content: <Projects />,
    },
  ];

  return (
    <>
      <div className="w-full h-full overflow-x-hidden bg-stone-800 scroll-smooth">
        <main className="w-full">
          {steps.map((step) => (
            <React.Fragment key={step.id}>{step.content}</React.Fragment>
          ))}
        </main>
      </div>
    </>
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
