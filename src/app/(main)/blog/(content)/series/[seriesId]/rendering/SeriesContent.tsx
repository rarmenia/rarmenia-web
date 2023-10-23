import PostPreview from '@/app/(main)/blog/renderers/PostPreview';
import { SeriesResolverResponse, SeriesErrorResponse, SeriesSuccessResponse } from '@/types'
import { ArrowPathIcon } from '@heroicons/react/20/solid';
import React from 'react'

type SeriesContentProps = {
  response: SeriesResolverResponse;
}

const SHARED_STYLES = 'min-w-[22rem] w-10/12 border border-white/10 p-4';

const SeriesContentLoading = () => {
  return (
    <div className={`${SHARED_STYLES} animate-pulse bg-stone-900/80 min-h-[30ch] grid place-items-center rounded-b-lg`}>
      <ArrowPathIcon className="h-8 text-white animate-spin" />
    </div>
  );
}

const SeriesContentError = ({ response }: { response: SeriesErrorResponse }) => {
  return (
    <div className={`${SHARED_STYLES} bg-red-900/80 text-red-50 rounded-b-lg`}>
      {response.errorMessage}
    </div>
  )
}

const SeriesContentSuccess = ({ response }: { response: SeriesSuccessResponse }) => {
  return (
    <div className={`flex flex-col min-w-[22rem] w-10/12 gap-2`}>
      {response.data.posts.map((post, ind, arr) =>
        <PostPreview post={post} inSeries={{ isLast: ind === arr.length - 1 }} key={ind} />)
      }
    </div>
  );
}

const SeriesContent = (props: SeriesContentProps) => {
  switch (props.response.state) {
    case 'LOADING':
      return <SeriesContentLoading />;
    case 'ERROR':
      return <SeriesContentError response={props.response} />
    case 'SUCCESS':
      return <SeriesContentSuccess response={props.response} />
  }
}

export default SeriesContent
