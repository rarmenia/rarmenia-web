import { PostResolverResponse, PostSuccessResponse } from "@/components/resolvers/blog/types/PostResolverResponse";

type PostHeaderProps = {
  response: PostResolverResponse;
}

const SHARED_STYLES = 'min-w-[22rem] w-10/12 border border-white/10 p-4 rounded-t-lg';

const PostHeaderLoading = () => {
  return (
    <div className={`${SHARED_STYLES} bg-stone-900 animate-pulse flex items-center justify-center gap-4`}>
      {
        [0, 1, 2].map((ind) => <div key={ind} className="text-4xl animate-bounce" style={{ animationDelay: `${ind * 100}ms` }}>.</div>)
      }
    </div>
  );
}

const PostHeaderContent = ({ data }: PostSuccessResponse) => {
  return (
    <div className={`${SHARED_STYLES} bg-stone-900/80`}>
      content here
    </div>
  );
}

const PostHeaderError = () => {
  return (
    <div className={`${SHARED_STYLES} bg-red-900/80`}>
      <div className="text-red-50 text-center text-xl">
        Something went wrong!
      </div>
    </div>
  )
}

const PostHeader = (props: PostHeaderProps) => {
  switch (props.response.state) {
    case 'LOADING':
      return <PostHeaderLoading />
    case 'ERROR':
      return <PostHeaderError />
    case 'SUCCESS':
      return <PostHeaderContent {...props.response} />
  }
}

export default PostHeader;
