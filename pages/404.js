import Layout from "@/components/layout/layout";
import Container from "@/components/layout/container";
import s from "@/styles/pages/404.module.scss";
import Link from "next/link";

export default function Custom404() {
  return (
    <Layout>
      <main className={s.main}>
        <Container additionalClass={s.container}>
          <h1 className={s.title}>
            <span>404</span>
            <span>Page Not Found.</span>
          </h1>
          <p className={s.text}>
            The link you followed may be broken, or the page may have removed.
            <br />
            Please check the URL and try again.
          </p>
          <div className={s.btn_wrap}>
            <Link href="/" className={s.btn}>
              Go back Home
            </Link>
          </div>
        </Container>
      </main>
    </Layout>
  );
}
