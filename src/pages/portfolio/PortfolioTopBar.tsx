import {
  BookOpenIcon,
  BoltIcon,
  BuildingOfficeIcon,
  ServerIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import MappedProperty from 'components/processors/MappedProperty';
import ScreenSize from 'components/providers/ScreenSize';
import ScrollPosition from 'components/providers/ScrollPosition';
import Link from 'next/link';
import React, { } from 'react';

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
      <BuildingOfficeIcon className="h-4 mb-1" /> Work
    </span>
  </Link>,
  <Link key="menu-projects" href="#projects" className="cursor-pointer">
    <span className="flex flex-row items-center gap-2 cursor-pointer">
      <BookOpenIcon className="h-4 mb-1" /> Projects
    </span>
  </Link>,
  <Link key="menu-interactive" href="/interactive" className="cursor-pointer">
    <span className="flex flex-row items-center gap-2 cursor-pointer">
      <BoltIcon className="h-4 mb-1" /> Interactive
    </span>
  </Link>,
];

const PortfolioTopBar = () => {
  return <ScrollPosition children={(position) =>
    <ScreenSize children={(size) => (
      <MappedProperty active={[0 + (size.height / 4), size.height - (size.height / 2)]} target={[0, 100]} current={position} children={(opacity) => (
        <div
          style={{ opacity: `${opacity}%` }}
          className="z-[3000] fixed bg-black/10 backdrop-blur-md w-screen flex flex-col px-8 py-6 text-white">
          <div className="font-mono"> Rei Armenia </div>
        </div>
      )} />
    )} />
  } />
}

export default PortfolioTopBar;
