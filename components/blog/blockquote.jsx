import s from "@/styles/components/blog/blockquote.module.scss";

const Blockquote = ({ children }) => {
  return <blockquote className={`${s.blockquote} `}>{children}</blockquote>;
};

export default Blockquote;
