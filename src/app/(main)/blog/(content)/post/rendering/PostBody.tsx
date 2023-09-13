
import { PostErrorResponse, PostResolverResponse, PostSuccessResponse } from "@/components/resolvers/blog/types/PostResolverResponse";
import { AsyncDataStatus } from "@/types/async-data-status"
import { ArrowPathIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

type PostBodyProps = {
  response: PostResolverResponse
}

const SHARED_STYLES = 'min-w-[22rem] w-10/12 border border-white/10 p-4 rounded-b-lg';

const PostBodyLoading = () => {
  return (
    <div className={`${SHARED_STYLES} animate-pulse bg-stone-900/80 min-h-[30ch] grid place-items-center`}>
      <ArrowPathIcon className="h-8 text-white animate-spin" />
    </div>
  );
}

const PostBodyContent = ({ data }: PostSuccessResponse) => {
  return (
    <div className={`${SHARED_STYLES}`}></div>
  );
}

const PostBodyError = ({ errorMessage }: PostErrorResponse) => {
  return (
    <div className={`${SHARED_STYLES} bg-red-900/80 text-red-50`}></div>
  )
}

const PostBody = ({ response }: PostBodyProps) => {
  switch (response.state) {
    case 'LOADING':
      return <PostBodyLoading />;
    case 'ERROR':
      return <PostBodyError {...response} />
    case 'SUCCESS':
      return <PostBodyContent {...response} />
  }
}

export default PostBody;
