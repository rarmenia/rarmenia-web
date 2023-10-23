'use client';

import { Post } from '.contentlayer/generated';
import { getSeries } from '@/functions/blog';
import { SeriesResolverResponse, SeriesSuccessData } from '@/types/series-resolver';
import { useEffect, useState } from 'react';

const constructResponse = (data?: SeriesSuccessData | null): SeriesResolverResponse => {
  if (data === undefined) return { state: 'LOADING' }
  if (data && data.posts && data.posts.length > 0) return { state: 'SUCCESS', data: data as SeriesSuccessData };
  if (!data || data.posts.length === 0) return {
    state: 'ERROR',
    errorMessage: 'Sorry, We can\'t find the series you are looking for. Please double check the url.'
  };
  return { state: 'LOADING' };
}

interface BlogSeriesResolverProps {
  seriesId: string;
  children: (response: SeriesResolverResponse) => JSX.Element;
}

const BlogSeriesResolver = (props: BlogSeriesResolverProps) => {

  const [successData, setSuccessData] = useState<SeriesSuccessData | null | undefined>(undefined)

  useEffect(() => {
    getSeries(props.seriesId).then((data) => setSuccessData(data)).catch(() => undefined)
  }, [])

  return <>{props.children(constructResponse(successData))}</>;
};


export default BlogSeriesResolver;
