import { allPosts } from "contentlayer/generated";
import { formatSlug } from "@/utils/slugs";
import { compareDesc } from "date-fns";

export const allTags = Array.from(
  new Set(
    allPosts
      .filter((post) => post.isPublished)
      .sort((a, b) => {
        return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
      })
      .map((post) => post.tags)
      .flat()
  )
);

export const getAllTagSlugs = allTags.map(
  (tag) => `/posts/tag/${formatSlug(tag)}`
);

const sortTags = (tags) => {
  return tags.sort((a, b) =>
    a.toLowerCase() > b.toLowerCase()
      ? 1
      : b.toLowerCase() > a.toLowerCase()
      ? -1
      : 0
  );
};

export const allTagsData = sortTags(allTags).map((tag) => {
  const tagData = {
    name: tag,
    slug: formatSlug(tag),
  };

  return tagData;
});

export const generateTagsData = (tags) => {
  return tags.map((tag) => {
    return {
      name: tag,
      slug: `/posts/tag/${formatSlug(tag)}`,
    };
  });
};

export const getPostsByTag = (tag) => {
  return allPosts
    .filter((post) => post.isPublished)
    .filter((post) => {
      return post.tags.includes(tag);
    })
    .sort((a, b) => {
      return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
    });
};

export const getTagArchiveLink = (tagSlug) => {
  return `/posts/tag/${tagSlug}`;
};

export const getTagsData = (tags) => {
  const sortedTags = sortTags(tags);
  const tagsData = generateTagsData(sortedTags);

  return tagsData;
};
