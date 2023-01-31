import Layout from "@/components/layout/layout";
import Container from "@/components/layout/container";
import Link from "next/link";

import s from "@/styles/pages/about.module.scss";
import { NextSeo } from "next-seo";
import { siteTitle, domain } from "@/utils/seo";
import { openSans } from "@/utils/fonts";

const About = () => {
  return (
    <>
      <NextSeo
        title={`About | ${siteTitle}`}
        description="This page is all about me and about WebTech Note."
        openGraph={{
          images: [
            {
              url: `${domain}/ogp.png`,
              width: 1300,
              height: 630,
              alt: "WebTech Note",
            },
          ],
        }}
      />
      <Layout>
        <main className={s.about}>
          <Container additionalClass={s.container}>
            <h1 className={`${s.main_title} ${openSans.className}`}>
              About Me
            </h1>
            <div className={s.content}>
              <div className={s.intro}>
                <p>
                  Hi 👋 I'm Tatsuya, a self-taught front-end web developer
                  fromJapan. It's been 4 years since I started my career as a
                  webdeveloper, and I've been freelancing since the beginning.
                </p>
                <p>
                  I am passionate about learning new things, and web development
                  is the best for me because it offers the endless amount of
                  learning.
                </p>
                {/* <div className={s.img_wrap}>
                  <Image src={aboutImg} alt="about" />
                </div> */}
                <p>
                  Currently, I'm interested in React, Next.js, TypeScript and
                  other front-end stuff. Also, as I go deeper in the front-end
                  world, I became more and more interested in back-end.
                  Eventuallly, I wanna be a full-stack developer.
                </p>
                <p>
                  Aside from work, I love traveling. I often use Couchsurfing
                  and hang out with people from all over the world. You can
                  often see me traveling in SouthEast Asia.
                </p>

                <h2 className={openSans.className}>Experience</h2>
                <p>
                  I started learning web development in 2018 November. After 3
                  months of self-study, I got the first project on a
                  crowdsourcing platform. Since then, I've been freelancing and
                  I've worked with many companies and freelancers.
                </p>
                <p>
                  For now, I'm in partnership with several tech companies in
                  Japan. Most of my tasks are WordPress theme development, and
                  corporate website coding.
                </p>

                <h2 className={openSans.className}>My goal at the moment</h2>
                <p>
                  For the past 4 years, I've done so many WordPress projects but
                  I got almost no experience in using modern tech stack like
                  React, Next.js and other. (In Japan, WordPress is still
                  dominant)
                </p>
                <p>
                  So I started learning Next.js and this blog is the very first
                  project that I built using Next.js. From now on, I'm gonna
                  learn modern tech stack like React, Next.js, and Jamstack and
                  hopefully get some projects. Also, I'd like to work for
                  clients outside of Japan.
                </p>

                <h2 className={openSans.className}>About WebTech Note</h2>
                <p>
                  In this blog, I'm gonna write about web development, mostly
                  front-end stuff. My current interests are Next.js and React,
                  and Jamstack so there will be a lot of articles about these
                  topics.
                </p>
                <p>
                  The reason I started this blog was because I wanted to build a
                  blog with modern tech stack. I actually have a blog{" "}
                  <a
                    href="https://web-dev.tech/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    webdev.tech
                  </a>{" "}
                  on WordPress and I still post articles once in a while, but
                  it's been almost 3 years and I'm getting bored of using the
                  same stack.
                </p>
                <p>In this blog, I use following tech stack:</p>

                <ul>
                  <li>Next.js</li>
                  <li>MDX</li>
                  <li>CSS Modules(Sass)</li>
                  <li>Contentlayer</li>
                  <li>Vercel</li>
                </ul>

                <p>
                  I briefly explain how this blog works in{" "}
                  <Link href="/posts/how-i-built-my-blog">another post</Link>,
                  so check it out if you are interested.
                </p>
              </div>

              <div className={s.contact}>
                <h2 className={openSans.className}>Contact Me</h2>
                <p>
                  If you'd like to talk to me or ask me something, feel free to
                  contact me through the options below:
                </p>

                <p>
                  -{" "}
                  <a
                    href="https://twitter.com/a_tatsu1512"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Twitter
                  </a>
                  <br />-{" "}
                  <a
                    href="https://github.com/Tatsuya-akao"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  {/* <br />- <a>Contact Form</a> */}
                </p>
              </div>
            </div>
          </Container>
        </main>
      </Layout>
    </>
  );
};

export default About;
