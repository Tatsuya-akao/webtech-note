import { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineToc, MdClose } from "react-icons/md";

import s from "@/styles/components/layout/toc.module.scss";

export default function Toc({ headings }) {
  const [isTocOpen, setIsTocOpen] = useState(false);

  const toggleTocOpen = () => {
    setIsTocOpen(!isTocOpen);
  };

  const variants = {
    open: { opacity: 1, scale: 1 },
    closed: { opacity: 0, scale: 0 },
  };

  return (
    <div className={s.toc}>
      <div className={s.toc_content}>
        <div className={s.toc_btn} onClick={toggleTocOpen}>
          {isTocOpen ? <MdClose /> : <MdOutlineToc />}
        </div>

        <motion.div
          animate={isTocOpen ? "open" : "closed"}
          variants={variants}
          className={s.toc_body}
        >
          <p className={s.toc_head}>Contents</p>
          <ul className={s.toc_list}>
            {headings.map((heading) => {
              return heading.level === 2 ? (
                <li key={heading.slug} className={s.toc_item}>
                  <a href={`#${heading.slug}`} className={s.toc_link}>
                    {heading.text}
                  </a>
                </li>
              ) : (
                <li
                  key={heading.slug}
                  className={`${s.toc_item} ${s.toc_item_level_3}`}
                >
                  <a href={`#${heading.slug}`} className={s.toc_link}>
                    {heading.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
