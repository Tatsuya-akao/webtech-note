import slugify from "slugify";

const convertDotsToHyphens = (string) => {
  return string.replace(/\./g, "-");
};

export const formatSlug = (string) => {
  return slugify(convertDotsToHyphens(string), {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
  });
};
