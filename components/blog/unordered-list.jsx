import s from "@/styles/components/blog/unordered-list.module.scss";

export default function UnorderedList({ children }) {
  return <ul className={`${s.list}`}>{children}</ul>;
}
