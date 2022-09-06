import {
  BookOpenIcon,
  LightningBoltIcon,
  OfficeBuildingIcon,
  ServerIcon,
  UserIcon,
} from '@heroicons/react/outline';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const MenuOptions = [
  <Link key="menu-about" href="#about" className="cursor-pointer">
    <span className="flex flex-row items-center gap-2 cursor-pointer">
      <UserIcon className="h-4 mb-1" /> About
    </span>
  </Link>,
  <Link key="menu-tech" href="#technologies" className="cursor-pointer">
    <span className="flex flex-row items-center gap-2 cursor-pointer">
      <ServerIcon className="h-4 mb-1" /> Technologies
    </span>
  </Link>,
  <Link key="menu-work" href="#work-experience" className="cursor-pointer">
    <span className="flex flex-row items-center gap-2 cursor-pointer">
      <OfficeBuildingIcon className="h-4 mb-1" /> Work
    </span>
  </Link>,
  <Link key="menu-projects" href="#projects" className="cursor-pointer">
    <span className="flex flex-row items-center gap-2 cursor-pointer">
      <BookOpenIcon className="h-4 mb-1" /> Projects
    </span>
  </Link>,
  <Link key="menu-interactive" href="/interactive" className="cursor-pointer">
    <span className="flex flex-row items-center gap-2 cursor-pointer">
      <LightningBoltIcon className="h-4 mb-1" /> Interactive
    </span>
  </Link>,
];

const PortfolioTopBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  const handleResize = () => {
    setWindowHeight(window.innerHeight);
  };

  const calculateBackgroundOpacity = (
    scrollPosition: number,
    pageHeight: number,
    offset: number = 0.4
  ) => {
    return Math.min(1, scrollPosition / (pageHeight * offset));
  };

  useEffect(() => {
    setScrollPosition(window.scrollY);
    setWindowHeight(window.innerHeight);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const render = () => (
    <div
      className="z-[3000] fixed h-14 text-white w-full flex flex-row items-center px-4 rounded-b-xl justify-around"
      style={{
        backgroundColor: `rgba(180, 83, 9, ${calculateBackgroundOpacity(
          scrollPosition,
          windowHeight
        )})`,
      }}
    >
      <div>
        <Link href={'#hero'}># Rei Armenia</Link>
      </div>
      <div className="flex-grow"></div>
      <div className="hidden md:flex flex-row mr-4 gap-8">
        {MenuOptions.map((option) => option)}
      </div>
    </div>
  );

  return render();
};

export default PortfolioTopBar;
