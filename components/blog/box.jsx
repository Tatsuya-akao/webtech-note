import s from "@/styles/components/blog/box.module.scss";
import margin from "@/styles/components/blog/margin.module.scss";

export default function Box({ children, type = "normal" }) {
  let boxClass;

  if (type === "normal") {
    boxClass = s.normal;
  } else if (type === "success") {
    boxClass = s.success;
  } else if (type === "warning") {
    boxClass = s.warning;
  }

  return <div className={`${s.box} ${boxClass}`}>{children}</div>;
}
