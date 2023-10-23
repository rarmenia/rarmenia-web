import { Post, allPosts } from ".contentlayer/generated"
import { PostData, SeriesNavigation } from "@/types";
import { SeriesSuccessData } from "@/types/series-resolver";

export const getPost = async (id: string): Promise<Post | undefined> => allPosts.find(post => post.id === id);

export const getPostData = async (id: string): Promise<PostData | null | undefined> => {
  const post = await getPost(id);
  if (!post) return null;
  if (post.series) {
    const seriesData = await getSeries(post.series.id);
    const seriesPosts = seriesData?.posts;
    if (seriesPosts && seriesPosts.length > 0) {
      const complete = seriesPosts.at(-1)?.series?.ends ?? false;
      const count = seriesPosts.length;
      const navigation = getNavigation(post, seriesPosts);
      const series = { ...navigation, complete, count };
      return { series, post }
    }
  }
  return { post }

}

export const getSeries = async (seriesId: string): Promise<SeriesSuccessData | null | undefined> => {
  const posts = allPosts
    .filter(post => post.series?.id === seriesId)
    .sort((a, b) => (a.series?.part ?? 0) - (b.series?.part ?? 0))

  return posts && posts.length > 1 ? {
    posts,
    series: {
      title: posts[0]?.series?.title ?? '',
      parts: posts.length,
      complete: posts.at(-1)?.series?.ends ?? false,
    }
  } : null;
}


export const getNavigation = (post: Post, series: Post[]): SeriesNavigation => ({
  first: series[0].id,
  last: series[series.length - 1].id,
  next: series.at(post.series?.part ?? 1)?.id,
  prev: series.at((post.series?.part ?? 1) - 2)?.id,
})
