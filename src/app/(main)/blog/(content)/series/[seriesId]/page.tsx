type BlogSeriesProps = {

  params: { seriesId: string }

}
const BlogSeries = (props: BlogSeriesProps) => {


  return (
    <div>
      Blog Series Page {props.params.seriesId}
    </div>
  )

}

export default BlogSeries;
