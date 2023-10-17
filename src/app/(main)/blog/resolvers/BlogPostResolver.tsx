'use client';

import { Post } from '.contentlayer/generated';
import { getNavigation, getPost, getSeries } from '@/functions/blog';

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

interface BlogPostResolverProps {
  postId: string;
  children: (response: PostResolverResponse) => JSX.Element;
}

const BlogPostResolver = (props: BlogPostResolverProps) => {
  let state: PostStates = 'LOADING';
  let data: PostData | undefined = undefined;
  let series: SeriesInfo | undefined = undefined;
  let message: string | undefined = undefined;
  const post: Post | undefined = getPost(props.postId);

  if (!post) {
    message = `Could not locate post '${props.postId}', please double check you have the right link, if issue persists contact Rei.`;
    state = 'ERROR';
  } else {
    state = 'SUCCESS';

    if (post.series) {
      const seriesPosts = getSeries(post);
      const count = seriesPosts.at(-1)?.series?.ends ? seriesPosts.length : -1;
      const navigation = getNavigation(post, seriesPosts);

      series = { count, ...navigation };
    }

    data = {
      post,
      series,
    };

    return <>{props.children(constructPostResponse(state, data, message))}</>;
  }
};

export default BlogPostResolver;
