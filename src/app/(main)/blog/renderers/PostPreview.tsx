import { Post } from '.contentlayer/generated'
import HorizontalArea from '@/components/containers/HorizontalArea';
import SepartatorLine from '@/components/decorations/SeparatorLine';
import { CalendarIcon, EyeIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import React from 'react'

type PostPreviewProps = {
  post: Post;
  inSeries?: {
    isLast: boolean;
  }
}

const PostPreview = (props: PostPreviewProps) => {

  const borders = !props.inSeries ? 'rounded-lg' : props.inSeries.isLast ? 'rounded-b-lg' : '';

  return (
    <Link href={`/blog/post/${props.post.id}`}>
      <div className={`w-full border border-white/10 p-4 bg-stone-900/80 ${borders} font-mono flex flex-col gap-4 min-w-full`}>
        <div className='flex flex-col w-full min-w-full'>
          <div className='text-xl font-semibold'>{props.post.title}</div>
          {props.post?.series && (
            <div className='flex flex-row text-xs justify-between italic font-light text-white/70'>
              <span title="Go to Series" className="text-yellow-400/80">Series:{props.post.series.title}</span>
            </div>
          )}
          <div className='flex flex-row justify-between w-full'>
            <div className='flex flex-row items-center gap-2'>
              <div><CalendarIcon className='h-4' /></div>
              <div className='text-xs'>{props.post.meta.updated ? props.post.meta.updated : props.post.meta.created}</div>
            </div>
            <div className='flex flex-row items-center gap-2'>
              <div><EyeIcon className='h-4' /></div>
              <div className='text-xs'>{props.post.readTime}</div>
            </div>
          </div>
          <HorizontalArea>
            <div className='flex flex-row items-center gap-2 mr-4 w-auto'>tags</div>
          </HorizontalArea>
        </div>

        <SepartatorLine />
        <div className='font-mono italic text-white/90 text-sm'>
          {props.post.meta.seo}
        </div>
      </div>
    </Link>
  )
}

export default PostPreview
