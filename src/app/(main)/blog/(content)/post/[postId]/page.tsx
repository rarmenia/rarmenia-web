'use client'
import BlogPostResolver from "@/components/resolvers/blog/post/BlogPostResolver"
import PostHeader from "../rendering/PostHeader"
import PostBody from "../rendering/PostBody"

type BlogPostProps = {

  params: { postId: string }

}


const BlogPost = ({ params }: BlogPostProps) => {

  return (
    <BlogPostResolver postId={params.postId}>
      {
        (response) => (
          <div className="flex flex-col items-center gap-0.5">
            <PostHeader response={response} />
            <PostBody response={response} />
          </div>

        )
      }
    </BlogPostResolver>
  )
}

export default BlogPost;
