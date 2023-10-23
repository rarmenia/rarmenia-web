import { Post } from ".contentlayer/generated";

export type SeriesLoadingResoponse = { state: 'LOADING' };
export type SeriesErrorResponse = { state: 'ERROR'; errorMessage: string };

export type SeriesSuccessData = {
  posts: Post[],
  series: {
    title: string;
    parts: number;
    complete: boolean;
  }
}
export type SeriesSuccessResponse = { state: 'SUCCESS'; data: SeriesSuccessData };


export type SeriesResolverResponse =
  | SeriesLoadingResoponse
  | SeriesErrorResponse
  | SeriesSuccessResponse;
export type SeriesStates = SeriesResolverResponse['state'];

const constructResponse = (data?: SeriesSuccessData | null): SeriesResolverResponse => {
  if (data && data.posts && data.posts.length > 0) return { state: 'SUCCESS', data: data as SeriesSuccessData };
  if (!data || data.posts.length === 0) return {
    state: 'ERROR',
    errorMessage: 'Sorry, We can\'t find the series you are looking for. Please double check the url.'
  };
  return { state: 'LOADING' };
}
