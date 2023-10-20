import React from 'react'
import Link from 'next/link';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { SeriesInfo } from '@/types';

type SeriesNavigatorProps = {
  navigation: SeriesInfo,
  currentPart: number,
  currentId: string
}

const SeriesNavigator = ({ navigation, currentPart, currentId }: SeriesNavigatorProps) => {

  const showFirst = ![navigation.prev, currentId].includes(navigation.first);
  const showLast = ![navigation.next, currentId].includes(navigation.last);
  const showPrev = navigation.prev && ![navigation.last, currentId].includes(navigation.prev);
  const showNext = navigation.next && ![navigation.first, currentId].includes(navigation.next);

  return (
    <div className='min-w-[22rem] w-10/12 border border-white/10 p-4 bg-stone-900/80 rounded-b-lg grid place-items-center'>
      <div className='flex flex-row items-center text-white'>
        <div className="w-5 opacity-70 hover:opacity-100 grid place-items-center">
          {showFirst && <Link title="Jump to First" href={`/blog/post/${navigation.first}`}><ChevronDoubleLeftIcon className='h-5' /></ Link>}
        </div>
        <div className="w-5 opacity-70 hover:opacity-100 grid place-items-center">
          {showPrev && <Link title="Previous" href={`/blog/post/${navigation.prev}`}><ChevronLeftIcon className='h-5' /></Link>}
        </div>
        <div className="w-5 opacity-70 select-none grid place-items-center">
          {currentPart}
        </div>
        <div className="w-6 opacity-70 hover:opacity-100 grid place-items-center">
          {showNext && <Link title="Next" href={`/blog/post/${navigation.next}`}><ChevronRightIcon className='h-5' /></Link>}
        </div>
        <div className="w-6 opacity-70 hover:opacity-100 grid place-items-center">
          {showLast && <Link title="Jump to Last" href={`/blog/post/${navigation.last}`}><ChevronDoubleRightIcon className='h-5' /></Link>}
        </div>
      </div>
    </div>
  );
}

export default SeriesNavigator;
