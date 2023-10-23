'use client'
import BlogSeriesResolver from "../../../resolvers/BlogSeriesResolver";
import SeriesContent from "./rendering/SeriesContent";
import SeriesHeader from "./rendering/SeriesHeader";

type BlogSeriesProps = {

  params: { seriesId: string }

}
const BlogSeries = (props: BlogSeriesProps) => {


  return (
    <BlogSeriesResolver seriesId={props.params.seriesId}>
      {
        (response) => (
          <div className="flex flex-col items-center gap-4">
            <SeriesHeader response={response} />
            <SeriesContent response={response} />
          </div>
        )
      }
    </BlogSeriesResolver>
  )

}

export default BlogSeries;
