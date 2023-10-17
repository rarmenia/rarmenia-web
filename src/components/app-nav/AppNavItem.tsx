import React from 'react'
import Link from 'next/link';

export type AppNavItemConfig = {

  icon: React.ReactNode;
  destination: string | string[];
  label: string;

}


export function getDestination(itemConfig: AppNavItemConfig): string {

  if (!Array.isArray(itemConfig.destination)) return itemConfig.destination;

  return itemConfig.destination.join('/');

}

interface AppNavItemProps {
  config: AppNavItemConfig;
  isActive?: boolean;
}

const AppNavItem = (props: AppNavItemProps) => {

  const sharedStyles = 'rounded-full p-4 text-base transition-all';
  const inactiveStyles = 'text-white bg-stone-900 hover:bg-stone-800 hover:-translate-y-0.5';
  const activeStyles = 'text-sky-400 bg-sky-500/20 hover:bg-sky-500/40 hover:translate-y-0.5';

  return (
    <Link
      className={[sharedStyles, props.isActive ? activeStyles : inactiveStyles].join(' ')}
      title={props.config.label}
      href={getDestination(props.config)}
      aria-current={props.isActive ?? false}
      aria-label={`${props.config.label} Link`}
    >
      {props.config.icon}
    </Link>
  )
}

export default AppNavItem;