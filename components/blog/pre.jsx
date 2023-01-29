import s from "@/styles/components/blog/pre.module.scss";

export default function Pre({ ...props }) {
  return <pre className={s.pre} {...props} />;
}
