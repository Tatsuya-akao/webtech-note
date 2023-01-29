import s from "@/styles/components/layout/container.module.scss";

export default function Container({ children, additionalClass }) {
  return (
    <div
      className={
        additionalClass ? `${s.container} ${additionalClass}` : `${s.container}`
      }
    >
      {children}
    </div>
  );
}
