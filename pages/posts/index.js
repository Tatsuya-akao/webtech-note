import Layout from "@/components/layout/layout";
import Sidebar from "@/components/layout/sidebar";
import Container from "@/components/layout/container";
import PostList from "@/components/layout/post-list";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import s from "@/styles/pages/posts/posts.module.scss";
import { NextSeo } from "next-seo";
import { siteTitle } from "@/utils/seo";
import { openSans } from "@/utils/fonts";

export default function PostsPage({ posts }) {
  return (
    <>
      <NextSeo
        title={`Posts | ${siteTitle}`}
        description="This is the posts page in WebTech Note."
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
          <h1 className={`${s.title} ${openSans.className}`}>All Posts</h1>
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

export async function getStaticProps() {
  const posts = allPosts
    .filter((post) => post.isPublished)
    .sort((a, b) => {
      return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
    });
  return { props: { posts } };
}
