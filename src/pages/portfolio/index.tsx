import {
  HomeIcon,
  LightningBoltIcon,
  OfficeBuildingIcon,
  ServerIcon,
  UserIcon,
} from '@heroicons/react/outline';
import { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import Navigator from './components/Navigator';
import About from './sections/About';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Technologies from './sections/Technologies';
import WorkExperience from './sections/WorkExperience';

const Portfolio: NextPage = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [technologiesVisible, setTechnologiesVisible] = useState(false);
  const [workExperienceVisible, setWorkExperienceVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);

  const steps = [
    {
      id: 'hero',
      icon: <HomeIcon className="h-6" />,
      isVisible: heroVisible,
      setIsVisible: setHeroVisible,
      content: <Hero />,
    },
    {
      id: 'about',
      icon: <UserIcon className="h-6" />,
      isVisible: aboutVisible,
      setIsVisible: setAboutVisible,
      content: <About />,
    },
    {
      id: 'technologies',
      icon: <ServerIcon className="h-6" />,
      isVisible: technologiesVisible,
      setIsVisible: setTechnologiesVisible,
      content: <Technologies />,
    },
    {
      id: 'work-experience',
      icon: <OfficeBuildingIcon className="h-6" />,
      isVisible: workExperienceVisible,
      setIsVisible: setWorkExperienceVisible,
      content: <WorkExperience />,
    },
    {
      id: 'projects',
      icon: <LightningBoltIcon className="h-6" />,
      isVisible: projectsVisible,
      setIsVisible: setProjectsVisible,
      content: <Projects />,
    },
  ];

  return (
    <>
      <div className="w-full h-full overflow-x-hidden">
        <main className="w-full">{steps.map((step) => step.content)}</main>
      </div>
      <Navigator steps={steps} />
    </>
  );
};

export default Portfolio;
