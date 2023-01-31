import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

import s from "@/styles/components/layout/layout.module.scss";

export default function Layout({ children, home }) {
  return (
    <div className={s.layout}>
      <Header home={home} />
      <div className={s.motion}>
        <div className={s.main}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}
