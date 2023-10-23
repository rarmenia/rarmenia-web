import { SeriesResolverResponse, SeriesSuccessResponse } from '@/types'
import { CheckCircleIcon, EyeIcon, InformationCircleIcon } from '@heroicons/react/20/solid';
import React from 'react'

type SeriesHeaderProps = {
  response: SeriesResolverResponse;
}

const SHARED_STYLES = 'min-w-[22rem] w-10/12 border border-white/10 p-4 rounded-t-lg';

const SeriesHeaderLoading = () => {
  return (
    <div className={`${SHARED_STYLES} bg-stone-900 animate-pulse flex items-center justify-center gap-4`}>
      {
        [0, 1, 2].map((ind) => <div key={ind} className="text-4xl animate-bounce" style={{ animationDelay: `${ind * 100}ms` }}>.</div>)
      }
    </div>
  )

}

const SeriesHeaderError = () => {
  return (
    <div className={`${SHARED_STYLES} bg-red-900/80`}>
      <div className="text-red-50 text-center text-xl">
        Something went wrong!
      </div>
    </div>
  )
}

const SeriesHeaderSuccess = ({ response }: { response: SeriesSuccessResponse }) => {
  return (
    <div className={`${SHARED_STYLES} bg-stone-900/80 font-mono flex flex-col gap-2`}>
      <div className="w-full flex flex-row justify-between">
        <div className="font-semibold text-lg">{response.data.series.title}</div>
        <div className="flex flex-row gap-0.5 items-center">
          {
            response.data.series.complete ?
              (<>
                <CheckCircleIcon className='h-4 fill-green-600' />
                <span className='text-green-600 text-xs font-mono'>Complete</span>
              </>) :
              (<>
                <InformationCircleIcon className='h-4 fill-yellow-600' />
                <span className='text-yellow-600 text-xs font-mono'>In Progress</span>
              </>)
          }
        </div>
      </div>
      <div className='flex flex-row justify-end w-full'>
        <div className='text-sm italic text-white/80'>{response.data.series.parts} Parts</div>
      </div>
    </div>
  );
}

const SeriesHeader = (props: SeriesHeaderProps) => {
  switch (props.response.state) {
    case 'LOADING':
      return <SeriesHeaderLoading />
    case 'ERROR':
      return <SeriesHeaderError />
    case 'SUCCESS':
      return <SeriesHeaderSuccess response={props.response} />
  }
}

export default SeriesHeader;
