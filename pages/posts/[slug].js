import { allPosts } from "contentlayer/generated";
import Layout from "@/components/layout/layout";
import Container from "@/components/layout/container";
import SingleHead from "@/components/layout/single-head";
import { MDXComponents } from "@/components/blog/mdx-components";
import s from "@/styles/pages/posts/single-post.module.scss";
import { useLiveReload } from "next-contentlayer/hooks";
import { NextSeo } from "next-seo";
import { siteTitle, domain } from "@/utils/seo";
import Toc from "../../components/blog/toc";
import Comments from "@/components/layout/giscus";

const PostLayout = ({ post }) => {
  useLiveReload();

  const { image, title, excerpt } = post;

  return (
    <>
      <NextSeo
        title={`${title} | ${siteTitle}`}
        description={excerpt}
        openGraph={{
          title: `${title} | ${siteTitle}`,
          description: excerpt,
          images: [
            {
              url: `${domain}${image}`,
              width: 1300,
              height: 630,
              alt: title,
            },
          ],
        }}
      />
      <Layout>
        <Container additionalClass={s.container}>
          <div className={s.content}>
            <main className={s.main}>
              <Container>
                <article className={s.article}>
                  <SingleHead post={post} />

                  <div className={`user-content ${s.user_content}`}>
                    {/* <MDXContent components={mdxComponents} /> */}
                    <MDXComponents code={post.body.code} />
                  </div>

                  <div className={s.comment}>
                    <Comments />
                  </div>
                </article>
              </Container>
            </main>
            <aside className={s.sidebar}>
              <Toc />
            </aside>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default PostLayout;

export async function getStaticProps({ params }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
}
