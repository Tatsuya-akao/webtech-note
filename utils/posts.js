import { compareDesc } from "date-fns";

export const sortPublishedPosts = (posts) => {
  return posts
    .filter((post) => post.isPublished === true)
    .sort((a, b) => {
      return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
    });
};
