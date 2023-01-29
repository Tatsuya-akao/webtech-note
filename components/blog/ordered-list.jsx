import s from "@/styles/components/blog/ordered-list.module.scss";
import margin from "@/styles/components/blog/margin.module.scss";

export default function OrderedList({ children }) {
  return <ol className={`${s.list} ${margin.y_small}`}>{children}</ol>;
}
