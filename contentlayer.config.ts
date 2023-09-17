import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files';

const Series = defineNestedType(() => ({
  name: 'Series',
  fields: {
    title: { type: 'string', required: true },
    part: { type: 'number', required: true },
    id: { type: 'string', required: true },
  }
}));

const PostMeta = defineNestedType(() => ({
  name: 'PostMeta',
  fields: {
    seo: { type: 'string', required: true },
    created: { type: 'string', required: true },
    updated: { type: 'string', required: false },
    tags: { type: 'list', of: { type: 'string' }, required: false },
  }
}))

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: 'string', required: true },
    id: { type: 'string', required: true },
    series: { type: 'nested', of: Series, required: false },
    meta: { type: 'nested', of: PostMeta, required: true },
  }
}));

export default makeSource({ contentDirPath: 'posts', documentTypes: [Post] })
