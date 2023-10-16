import { Post, allPosts } from ".contentlayer/generated"
import { SeriesNavigation } from "@/types/series-navigation";

export const getPost = (id: string): Post | undefined => allPosts.find(post => post.id === id);


/**
 * @returns Sorted Post[] by series part asc
  * 
*/
export const getSeries = (post: Post): Post[] => allPosts
  .filter(item => item.series?.id === post.series?.id)
  .sort((a, b) => (a.series?.part ?? 0) - (b.series?.part ?? 0));

export const getNavigation = (post: Post, series: Post[]): SeriesNavigation => ({
  first: series[0].id,
  last: series[series.length - 1].id,
  next: series.at(post.series?.part ?? 1)?.id,
  prev: series.at((post.series?.part ?? 1) - 1)?.id,
})
