import { Post } from ".contentlayer/generated";
import { SeriesNavigation } from ".";

export type PostLoadingResponse = { state: 'LOADING' };
export type PostErrorResponse = { state: 'ERROR'; errorMessage: string };

export type SeriesInfo = SeriesNavigation & { count: number, complete: boolean };
export type PostData = { post: Post, series?: SeriesInfo };

export type PostSuccessResponse = { state: 'SUCCESS'; data: PostData };

export type PostResolverResponse =
  | PostLoadingResponse
  | PostErrorResponse
  | PostSuccessResponse;
export type PostStates = PostResolverResponse['state'];

