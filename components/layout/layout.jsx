import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

import { motion } from "framer-motion";

import s from "@/styles/components/layout/layout.module.scss";

export default function Layout({ children, home }) {
  return (
    <div className={s.layout}>
      <Header home={home} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "just" }}
        className={s.motion}
      >
        <div className={s.main}>{children}</div>
      </motion.div>
      <Footer />
    </div>
  );
}
