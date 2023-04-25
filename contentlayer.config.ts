import {
  FieldDefs,
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer/source-files';
import readingTime from 'reading-time';

const Image = defineNestedType(() => ({
  name: 'Image',
  fields: {
    src: {
      type: 'string',
      description: 'the source string of the image',
      required: true,
    },
    width: {
      type: 'number',
      description: 'the image width',
      required: true,
    },
    height: {
      type: 'number',
      description: 'the image height',
      required: true,
    },
    alt: {
      type: 'string',
      description: 'alt text for the image (accessibility requirement)',
      required: true,
    },
  },
}));

const TimeFields: FieldDefs = {
  creation: {
    type: 'date',
    description: 'The Date the Content was Created',
    required: true,
  },
  updated: {
    type: 'date',
    description: 'The latest date the content was updated',
  },
  updateHistory: {
    type: 'list',
    description: 'A list of past update dates.',
    of: { type: 'date' },
  },
};

const Meta: FieldDefs = {
  contentRef: {
    type: 'string',
    description:
      'A unique but human reference name (used to reference specific content)',
    required: true,
  },
  description: {
    type: 'string',
    description: 'A short description of the content',
  },
  tags: {
    description: 'A list of tags (strings), used for searching content',
    required: true,
    type: 'list',
    of: { type: 'string' },
  },
};

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The Title of the Post',
      required: true,
    },
    cover: {
      type: 'nested',
      of: Image,
      description: 'A cover image (used as a thumbnail)',
    },
    ...TimeFields,
    ...Meta,
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => post._raw.sourceFileName.replace('.mdx', ''),
    },
    readTime: {
      type: 'string',
      resolve: (post) => readingTime(post['body'].raw).text,
    },
  },
}));

export const Copy = defineDocumentType(() => ({
  name: 'Copy',
  filePathPattern: `copy/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    ...TimeFields,
    ...Meta,
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => post._raw.sourceFileName.replace('.mdx', ''),
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Copy],
});
