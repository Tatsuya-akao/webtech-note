import s from "@/styles/components/blog/demo-box.module.scss";

export default function DemoBox({ children, title }) {
  return (
    <div className={s.box}>
      <span className={s.title}>{title}</span>
      <div className={s.content}>{children}</div>
    </div>
  );
}
