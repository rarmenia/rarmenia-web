
import { ArrowPathIcon } from "@heroicons/react/20/solid";
import SeriesNavigator from "./SeriesNavigator";
import { PostErrorResponse, PostResolverResponse, PostSuccessResponse } from "../../../resolvers/BlogPostResolver";

type PostBodyProps = {
  response: PostResolverResponse
}

const SHARED_STYLES = 'min-w-[22rem] w-10/12 border border-white/10 p-4';

const PostBodyLoading = () => {
  return (
    <div className={`${SHARED_STYLES} animate-pulse bg-stone-900/80 min-h-[30ch] grid place-items-center rounded-b-lg`}>
      <ArrowPathIcon className="h-8 text-white animate-spin" />
    </div>
  );
}

const PostBodyContent = ({ data }: PostSuccessResponse) => {

  const navTargets = [data.series?.first, data.series?.last, data.series?.next, data.series?.prev];
  const showNav = navTargets.some(navId => navId ? navId !== data.post.id : false);
  return (
    <>
      <div className={`${SHARED_STYLES} bg-stone-900/80 ${showNav ? 'rounded-b-none' : 'rounded-b-lg'}`}>
        <div className="[&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: data.post.body.html }} />
      </div>
      {data.series && showNav && (<SeriesNavigator navigation={data.series} />)}
    </>
  );
}

const PostBodyError = ({ errorMessage }: PostErrorResponse) => {
  return (
    <div className={`${SHARED_STYLES} bg-red-900/80 text-red-50 rounded-b-lg`}>
      {errorMessage}
    </div>
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
