import { Post } from '.contentlayer/generated';
import { SeriesNavigation } from '@/types/series-navigation';

export type PostLoadingResponse = { state: 'LOADING' };
export type PostErrorResponse = { state: 'ERROR'; errorMessage: string };

export type SeriesInfo = SeriesNavigation & { count: number };
export type PostData = { post: Post, series?: SeriesInfo };

export type PostSuccessResponse = { state: 'SUCCESS'; data: PostData };



export type PostResolverResponse =
  | PostLoadingResponse
  | PostErrorResponse
  | PostSuccessResponse;
export type PostStates = PostResolverResponse['state'];

export function constructPostResponse(state: PostStates, data?: PostData, errorMessage?: string): PostResolverResponse {
  switch (state) {
    case 'LOADING':
      return { state: 'LOADING' };
    case 'ERROR':
      if (errorMessage) {
        return { state: 'ERROR', errorMessage };
      } else {
        throw new Error("Error state requires an error message.");
      }
    case 'SUCCESS':
      if (data) {
        return { state: 'SUCCESS', data };
      } else {
        throw new Error("Success state requires post.");
      }
    default:
      throw new Error("Invalid state provided.");
  }
}
