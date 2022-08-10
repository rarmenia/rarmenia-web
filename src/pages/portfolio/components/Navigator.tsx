import { HomeIcon, MinusIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React, { Dispatch, SetStateAction } from 'react';

type Props = {
  steps: {
    id: string;
    isVisible: boolean;
    setIsVisible: Dispatch<SetStateAction<boolean>>;
    icon: JSX.Element;
    content: React.ReactNode;
  }[];
};

const Navigator = (props: Props) => {
  return (
    <div
      id="portfolio-nav"
      className="h-screen w-full fixed z-50 left-0 top-0 flex flex-col items-end justify-center"
    >
      <div className="flex-grow"></div>
      <div className="flex flex-col items-center justify-center mr-2 mb-20">
        {props.steps.map((step, ind, arr) => (
          <>
            <div
              key={step.id}
              className={`p-1.5 border-white border rounded-full cursor-pointer ${
                step.isVisible
                  ? 'text-stone-900 bg-white'
                  : 'text-white bg-none'
              }`}
            >
              <Link href={`#${step.id}`} className="cursor-pointer">
                {step.icon}
              </Link>
            </div>
            {ind + 1 < arr.length && (
              <div className="text-center">
                <MinusIcon className="h-4 m-0 rotate-90 text-white" />
              </div>
            )}
          </>
        ))}
      </div>
      <div className="flex-grow"></div>
    </div>
  );
};

export default Navigator;
