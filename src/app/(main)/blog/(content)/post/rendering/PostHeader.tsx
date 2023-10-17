import { CalendarIcon, EyeIcon } from "@heroicons/react/20/solid";
import { PostResolverResponse, PostSuccessResponse } from "../../../resolvers/BlogPostResolver";

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
    <div className={`${SHARED_STYLES} bg-stone-900/80 font-mono`}>
      <div className='flex flex-col w-full'>
        <div className='text-xl font-semibold'>{data.post.title}</div>
        {data.post.series && data.series && (
          <div className='flex flex-row text-xs justify-between italic font-light text-white/70'>
            <div>Series:{data.post.series.title}</div>
            <div>{data.post.series.part}/{data.series.count === -1 ? '??' : data.series.count}</div>
          </div>
        )}
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row items-center gap-2'>
            <div><CalendarIcon className='h-4' /></div>
            <div className='text-xs'>{data.post.meta.updated ? data.post.meta.updated : data.post.meta.created}</div>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <div><EyeIcon className='h-4' /></div>
            <div className='text-xs'>{data.post.readTime}</div>
          </div>
        </div>
      </div>
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
