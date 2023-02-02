import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import s from "@/styles/components/blog/blockquote.module.scss";

const Blockquote = ({ children }) => {
  return (
    <blockquote className={`${s.blockquote} `}>
      <FaQuoteLeft className={s.quote_left} />
      <div className={s.content}>{children}</div>
      <FaQuoteRight className={s.quote_right} />
    </blockquote>
  );
};

export default Blockquote;
