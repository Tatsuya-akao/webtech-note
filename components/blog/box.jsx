import s from "@/styles/components/blog/box.module.scss";

export default function Box({ children, type = "normal" }) {
  const outputBoxClass = (type) => {
    switch (type) {
      case "normal": {
        return s.normal;
      }
      case "success": {
        return s.success;
      }
      case "success_l": {
        return s.success_l;
      }
      case "warning": {
        return s.warning;
      }

      default:
        return s.normal;
    }
  };

  const boxClass = outputBoxClass(type);

  return <div className={`${s.box} ${boxClass}`}>{children}</div>;
}
