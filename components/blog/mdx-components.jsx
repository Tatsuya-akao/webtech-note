import { useMDXComponent } from "next-contentlayer/hooks";
import Box from "@/components/blog/box";
import UnorderedList from "@/components/blog/unordered-list";
import OrderedList from "@/components/blog/ordered-list";
import Pre from "@/components/blog/pre";
import BlogImage from "@/components/blog/blog-image";
import CodeHead from "@/components/blog/code-head";
import Blockquote from "@/components/blog/blockquote";
import OuterLink from "@/components/blog/outer-link";
import Toc from "@/components/blog/toc";
import LinkCard from "@/components/blog/link-card";

import headingStyle from "@/styles/components/blog/headings.module.scss";
import codeStyle from "@/styles/components/blog/code.module.scss";

const components = {
  Box,
  CodeHead,
  BlogImage,
  OuterLink,
  UnorderedList,
  LinkCard,
  Toc,
  p: ({ ...props }) => <p {...props} />,
  h2: ({ ...props }) => <h2 className={`${headingStyle.level2}`} {...props} />,
  h3: ({ ...props }) => <h3 className={`${headingStyle.level3}`} {...props} />,
  h4: ({ ...props }) => <h4 className={`${headingStyle.level4}`} {...props} />,
  h5: ({ ...props }) => <h5 className={`${headingStyle.level5}`} {...props} />,
  ul: ({ ...props }) => <UnorderedList {...props} />,
  ol: ({ ...props }) => <OrderedList {...props} />,
  li: ({ ...props }) => <li {...props} />,
  blockquote: ({ ...props }) => <Blockquote {...props} />,
  code: ({ ...props }) => <code className={`${codeStyle.code}`} {...props} />,
  pre: Pre,
};

export function MDXComponents({ code }) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
