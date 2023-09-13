'use client'
import React, { useEffect, useState } from 'react'
import { AppNavItemConfig, getDestination } from './AppNavItemConfig'
import AppNavItem from './AppNavItem';
import { usePathname } from 'next/navigation';

interface AppNavProps {
  items: AppNavItemConfig[];
}

const AppNav = (props: AppNavProps) => {

  const currentPath = usePathname();

  return (
    <>
      <nav className="flex flex-row gap-4 px-8 py-4 bg-stone-950 rounded-t-md items-center relative shadow-md" aria-label='primary application menu'>
        <span className="sr-only">Current Page: {props.items.find(item => currentPath.startsWith(getDestination(item)))?.label ?? 'Unknown'}</span>
        <div className="font-mono leading-none text-2xl px-2" title="Rei Armenia" aria-hidden>RA</div>
        {props.items.map((item, index) => <AppNavItem key={index} config={item} isActive={currentPath.startsWith(getDestination(item)) ? true : false} />)}
      </nav>
    </>
  );
}

export default AppNav;
