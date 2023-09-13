import { BlogData } from "./BlogData";

export type PostLoadingResponse = { state: 'LOADING' }
export type PostErrorResponse = { state: 'ERROR', errorMessage: string };
export type PostSuccessResponse = { state: 'SUCCESS', data: BlogData }

export type PostResolverResponse = PostLoadingResponse | PostErrorResponse | PostSuccessResponse; 
