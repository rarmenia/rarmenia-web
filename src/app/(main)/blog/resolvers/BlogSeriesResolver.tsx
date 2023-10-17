'use client';

import { Post } from '.contentlayer/generated';
import { useEffect, useState } from 'react';


export type SeriesLoadingResoponse = { state: 'LOADING' };
export type SeriesErrorResponse = { state: 'ERROR'; errorMessage: string };

export type SeriesSuccessData = Post[]
export type SeriesSuccessResponse = { state: 'SUCCESS'; data: SeriesSuccessData };


export type SeriesResolverResponse =
  | SeriesLoadingResoponse
  | SeriesErrorResponse
  | SeriesSuccessResponse;
export type SeriesStates = SeriesResolverResponse['state'];

const constructResponse = (data?: SeriesSuccessData | null): SeriesResolverResponse => {
  if (data && data.length > 0) return { state: 'SUCCESS', data: data as SeriesSuccessData };
  if (!data || data.length === 0) return {
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

  }, []);

  return <>{props.children(constructResponse(successData))}</>;
};


export default BlogSeriesResolver;