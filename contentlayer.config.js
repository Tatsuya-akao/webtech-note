// contentlayer.config.js

import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import GithubSlugger from "github-slugger";

const rehypePrettyCodeOptions = {
  theme: "slack-dark", // good
  onVisitHighlightedLine(node) {
    node.properties.className.push("line--highlighted");
  },
  keepBackground: false,
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    excerpt: {
      type: "string",
      description: "The excerpt of the post",
      required: true,
    },
    publishedAt: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    revisedAt: {
      type: "date",
      description: "The date of the post revision",
      required: false,
    },
    category: {
      type: "string",
      description: "The category of the post",
      required: true,
    },
    // category: {
    //   type: "enum",
    //   options: ["JavaScript", "React", "HTML", "CSS", "Next.js", "VS Code"],
    //   default: 'Next.js',
    //   description: "The category of the post",
    //   required: true,
    // },
    tags: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
    image: {
      type: "string",
      description: "The Thumbnail of the post",
      required: true,
    },
    isPublished: {
      type: "boolean",
      default: true,
      required: true,
    },
    isFeatured: {
      type: "boolean",
      default: false,
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
    headings: {
      type: "json",
      resolve: (post) => {
        // get h2 and h3 only
        const regXHeader = /\n(?<flag>#{2,3})\s+(?<content>.+)/g;
        const slugger = new GithubSlugger();
        const headings = Array.from(post.body.raw.matchAll(regXHeader)).map(
          ({ groups }) => {
            const flag = groups?.flag;
            const content = groups?.content;
            return {
              level: flag.length,
              text: content,
              slug: content ? slugger.slug(content) : undefined,
            };
          }
        );
        return headings;
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [rehypeSlug, [rehypePrettyCode, rehypePrettyCodeOptions]],
  },
});
