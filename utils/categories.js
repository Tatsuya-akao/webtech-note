import { allPosts } from "contentlayer/generated";
import { formatSlug } from "@/utils/slugs";

// returns an array that contains all categories: ['Category 1', 'Category 2', 'Category 3']
export const allCategories = Array.from(
  new Set(
    allPosts
      .filter((post) => post.isPublished)
      .map((post) => post.category)
      .flat()
  )
);

export const getSingleCategorySlug = (category) => {
  return `/posts/category/${formatSlug(category)}`;
};

export const getAllCategorySlugs = allCategories.map((category) =>
  getSingleCategorySlug(category)
);

// order the array of categories the way I like
export const manuallyOrderedCategories = [
  "HTML",
  "CSS",
  "JavaScript",
  "Next.js",
  // "React",
  "VS Code",
];

export const allCategoriesData = manuallyOrderedCategories.map((category) => {
  const categoryData = {
    name: category,
    slug: formatSlug(category),
  };

  return categoryData;
});

export const getPostsByCategory = (category) => {
  return allPosts
    .filter((post) => post.isPublished)
    .filter((post) => {
      return post.category.includes(category);
    });
};

export const getSingleCategoryData = (category) => {
  allCategoriesData.find((data) => {
    return data.category === category;
  });
};

export const getCategoryArchiveLink = (categorySlug) => {
  return `/posts/category/${formatSlug(categorySlug)}`;
};
