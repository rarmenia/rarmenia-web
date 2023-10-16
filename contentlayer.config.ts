import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files';

function calculateReadTime(raw: string): string {
  const AVERAGE_WORDS_PER_MIN = 250;
  const words = raw.split(/\s/g).length;
  const totalMins = words / AVERAGE_WORDS_PER_MIN;
  const hours = Math.floor(totalMins / 60);
  const minutes = Math.floor(totalMins % 60);
  const hoursStr = hours ? `${hours}h` : '';
  const minutesStr = minutes ? `${minutes}m` : '';
  return [hoursStr, minutesStr].join('');
}

const Series = defineNestedType(() => ({
  name: 'Series',
  fields: {
    title: { type: 'string', required: true },
    part: { type: 'number', required: true },
    id: { type: 'string', required: true },
    ends: { type: 'boolean', required: false }
  }
}));

const PostMeta = defineNestedType(() => ({
  name: 'PostMeta',
  fields: {
    seo: { type: 'string', required: true },
    created: { type: 'string', required: true },
    updated: { type: 'string', required: false },
    tags: { type: 'list', of: { type: 'string' }, required: false },
  },
}))

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: 'string', required: true },
    id: { type: 'string', required: true },
    series: { type: 'nested', of: Series, required: false },
    meta: { type: 'nested', of: PostMeta, required: true },
  },
  computedFields: {
    readTime: {
      type: 'string',
      resolve: (doc: any) => calculateReadTime(doc.body.raw),
    }
  }
}));

export default makeSource({ contentDirPath: 'posts', documentTypes: [Post] })
