'use client';

import { getPostData } from '@/functions/blog';
import { PostData, PostResolverResponse } from '@/types';

import { useEffect, useState } from 'react';

const constructPostResponse = (data?: PostData | null): PostResolverResponse => {
  if (data) return { state: 'SUCCESS', data };
  if (data === null) return { state: 'ERROR', errorMessage: 'Sorry, We can\'t find the post you are looking for. Please double check the url.' };
  return { state: 'LOADING' };
}

interface BlogPostResolverProps {
  postId: string;
  children: (response: PostResolverResponse) => JSX.Element;
}

const BlogPostResolver = (props: BlogPostResolverProps) => {
  const [postData, setPostData] = useState<PostData | null | undefined>()

  useEffect(() => {
    getPostData(props.postId).then(response => setPostData(response))
  }, [])

  return <>{props.children(constructPostResponse(postData))}</>;
};

export default BlogPostResolver;
