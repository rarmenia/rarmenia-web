'use client'

import { PostData, PostResolverResponse, PostStates, SeriesInfo, constructPostResponse } from "../types/PostResolverResponse";
import { Post } from ".contentlayer/generated";
import { getNavigation, getPost, getSeries } from "@/functions/blog";

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

      series = { count, ...navigation }
    }

    data = {
      post,
      series
    }

    return (
      <>
        {props.children(constructPostResponse(state, data, message))}
      </>
    );

  }
}

export default BlogPostResolver;
