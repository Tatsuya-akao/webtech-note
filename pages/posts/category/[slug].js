import Layout from "@/components/layout/layout";
import Sidebar from "@/components/layout/sidebar";
import Container from "@/components/layout/container";
import PostList from "@/components/layout/post-list";
import s from "@/styles/pages/posts/archive.module.scss";
import {
  getAllCategorySlugs,
  allCategoriesData,
  getPostsByCategory,
} from "@/utils/categories";
import { NextSeo } from "next-seo";
import { siteTitle } from "@/utils/seo";

export default function CategoryPage({ target, posts }) {
  return (
    <>
      <NextSeo
        title={`${target.name} - Category | ${siteTitle}`}
        description={`This is the ${target.name} category archive page.`}
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
          <h1 className={s.title}>
            <span className={s.title_wrap}>
              <span className={s.title_head}>- CATEGORY -</span>
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
  const target = allCategoriesData.find((category) => {
    return category.slug === params.slug;
  });

  const posts = getPostsByCategory(target.name);

  return {
    props: {
      params,
      target,
      posts,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllCategorySlugs;
  return {
    paths,
    fallback: false,
  };
}
