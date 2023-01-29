import s from "../styles/components/button.module.scss";

export default function Button({ children }) {
  return <div className={s.btn}>{children}</div>;
}
