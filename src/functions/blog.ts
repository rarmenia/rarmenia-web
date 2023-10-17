import { Post, allPosts } from ".contentlayer/generated"
import { PostData, SeriesNavigation } from "@/types";

export const getPost = async (id: string): Promise<Post | undefined> => allPosts.find(post => post.id === id);

export const getPostData = async (id: string): Promise<PostData | null | undefined> => {
  const post = await getPost(id);
  if (!post) return null;
  if (post.series) {
    const seriesPosts = await getSeries(post.series.id);
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

/**
 * @returns Sorted Post[] by series part asc
  * 
*/
export const getSeries = async (seriesId: string): Promise<Post[] | null | undefined> => allPosts.filter(post => post.series?.id === seriesId)


export const getNavigation = (post: Post, series: Post[]): SeriesNavigation => ({
  first: series[0].id,
  last: series[series.length - 1].id,
  next: series.at(post.series?.part ?? 1)?.id,
  prev: series.at((post.series?.part ?? 1) - 2)?.id,
})
