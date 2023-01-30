import Layout from "@/components/layout/layout";
import Sidebar from "@/components/layout/sidebar";
import Container from "@/components/layout/container";
import PostList from "@/components/layout/post-list";
import s from "@/styles/pages/posts/archive.module.scss";
import { getAllTagSlugs, allTagsData, getPostsByTag } from "@/utils/tags";
import { NextSeo } from "next-seo";
import { siteTitle } from "@/utils/seo";
import { openSans, openSansThin } from "@/utils/fonts";

export default function TagPage({ target, posts }) {
  return (
    <>
      <NextSeo
        title={`${target.name} - Tag | ${siteTitle}`}
        description={`This is the ${target.name} tag archive page.`}
        openGraph={{
          images: [
            {
              url: "http://localhost:3000/ogp.png",
              width: 1300,
              height: 630,
              alt: "WebTech Note",
            },
          ],
        }}
      />
      <Layout>
        <Container additionalClass={s.container}>
          <h1 className={`${s.title} ${openSans.className}`}>
            <span className={s.title_wrap}>
              <span className={`${s.title_head} ${openSansThin.className}`}>
                - TAG -
              </span>
              <span className={s.title_main}>{target.name}</span>
            </span>
          </h1>
          <div className={s.content}>
            <main className={s.main}>
              <PostList posts={posts} headingLevel="h2" />
            </main>
            <Sidebar />
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const target = allTagsData.find((tag) => {
    return tag.slug === params.slug;
  });

  const posts = getPostsByTag(target.name);

  return {
    props: {
      params,
      target,
      posts,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllTagSlugs;
  return {
    paths,
    fallback: false,
  };
}
