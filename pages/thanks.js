import Layout from "@/components/layout/layout";
import Container from "@/components/layout/container";
import s from "@/styles/pages/thanks.module.scss";
import Link from "next/link";

export default function ThanksPage() {
  return (
    <Layout>
      <main className={s.main}>
        <Container additionalClass={s.container}>
          <h1 className={s.title}>
            <span>Thank You!</span>
            <span>
              Your message has been <br className={s.sp} />
              sent successfully.
            </span>
          </h1>
          <p className={s.text}>
            I'll get back to you within 3 days. <br className={s.pc} />
            If you don't receive my reply for more than 3 days,
            <br className={s.pc} /> please send me a DM on{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/a_tatsu1512"
            >
              Twitter
            </a>
            .
          </p>
          <div className={s.btn_wrap}>
            <Link href="/" className={s.btn}>
              Back to TOP
            </Link>
          </div>
        </Container>
      </main>
    </Layout>
  );
}
