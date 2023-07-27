'use client'

import { ArrowRightIcon, ArrowPathIcon, CheckIcon, XMarkIcon, MinusIcon } from "@heroicons/react/20/solid";

export type ActionButtonState = 'DEFAULT' | 'LOADING' | 'SUCCESS' | 'ERROR' | 'DISABLED';
export type ActionButtonClickFilter = 'force-all' | 'all' | 'not-loading' | 'default-only' | 'none';

type ActionButtonProps = {
  state: ActionButtonState;
  children?: React.ReactNode;
  clickFilter?: ActionButtonClickFilter;
  onClick?: (context?: { currentState: ActionButtonState }) => void;
}

type ButtonStyling = {
  buttonClasses: string;
  icon?: React.ReactNode;
  iconClasses?: string;
}

const click_map: { [key in ActionButtonClickFilter]: ActionButtonState[] } = {
  "force-all": [],
  all: ['DEFAULT', 'LOADING', 'SUCCESS', 'ERROR'],
  "not-loading": ['DEFAULT', 'SUCCESS', 'ERROR'],
  "default-only": ['DEFAULT'],
  none: [],
}

const style_profiles: { [key in ActionButtonState]: ButtonStyling } = {
  'DEFAULT': {
    buttonClasses: 'bg-sky-600 hover:bg-sky-400',
    icon: <ArrowRightIcon className="h-5" />,
    iconClasses: 'group-hover:ml-4'
  },
  'LOADING': {
    buttonClasses: 'bg-yellow-600 animate-pulse',
    icon: <ArrowPathIcon className="h-5" />,
    iconClasses: 'animate-spin',
  },
  'SUCCESS': {
    buttonClasses: 'bg-green-600',
    icon: <CheckIcon className="h-5" />,
    iconClasses: '',
  },
  'ERROR': {
    buttonClasses: 'bg-red-600',
    icon: <XMarkIcon className="h-5" />,
    iconClasses: '',
  },
  'DISABLED': {
    buttonClasses: 'bg-white/5 text-opacity-20 ',
    icon: <MinusIcon className="h-5" />,
    iconClasses: '',
  },
};

const ActionButton = (props: ActionButtonProps) => {

  const stateProfile = style_profiles[props.state] ?? style_profiles.DEFAULT;
  const handleClick = () => {
    const clickFilter: ActionButtonClickFilter = props.clickFilter ?? 'default-only';
    if (!props.onClick) return;
    if (clickFilter === 'force-all') {
      props.onClick({ currentState: props.state });
    }
    if (props.state === 'DISABLED') return;
    if (clickFilter === 'none') return;
    if (!click_map[clickFilter].includes(props.state)) return;
    props.onClick({ currentState: props.state });
  }

  return (
    <button
      className={`flex flex-row gap-2 py-3 px-4 items-center border border-white/5 rounded-xl group ${stateProfile.buttonClasses ?? ''} transition-all`}
      onClick={handleClick}
    >
      <>{props.children}</>
      <div className={`${stateProfile.iconClasses} transition-all`}>{stateProfile.icon}</div>
    </button>
  );

}

export default ActionButton;
