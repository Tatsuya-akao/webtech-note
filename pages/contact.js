import Layout from "@/components/layout/layout";
import Container from "@/components/layout/container";
import Image from "next/image";
import Link from "next/link";

import s from "@/styles/pages/contact.module.scss";
import { NextSeo } from "next-seo";
import { siteTitle } from "@/utils/seo";

const Contact = () => {
  return (
    <>
      <NextSeo
        title={`Contact | ${siteTitle}`}
        description="This page is all about me and about WebTech Note."
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
        <Container>
          <main className={s.contact}>
            <Container additionalClass={s.container}>
              <h1 className={s.main_title}>Contact</h1>
              <p className={s.lead_text}>
                Feel free to contact me from the form below. I'll get back to
                you within 3 days.
                <br />
                If you need a quick response or wanna have casual conversation,
                please send me a DM on{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/a_tatsu1512"
                >
                  Twitter
                </a>
                .
              </p>
              <form className={s.form}>
                <div className={s.form_row}>
                  <label htmlFor="">
                    Your Name<span>*</span>
                  </label>
                  <div className={s.form_control}>
                    <input type="text" />
                  </div>
                </div>
                <div className={s.form_row}>
                  <label htmlFor="">
                    Email<span>*</span>
                  </label>
                  <div className={s.form_control}>
                    <input type="email" />
                  </div>
                </div>
                <div className={s.form_row}>
                  <label htmlFor="">
                    Message<span>*</span>
                  </label>
                  <div className={s.form_control}>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                  </div>
                </div>
                <button className={s.form_btn}>
                  <span>Send</span>
                </button>
              </form>
            </Container>
          </main>
        </Container>
      </Layout>
    </>
  );
};

export default Contact;
