import { PostResolverResponse } from "../types/PostResolverResponse";

interface BlogPostResolverProps {
  postId: string;
  children: (response: PostResolverResponse) => JSX.Element;
}

const BlogPostResolver = (props: BlogPostResolverProps) => {


  return (
    <>
      {props.children({ state: 'LOADING' })}
    </>
  );

}

export default BlogPostResolver;
