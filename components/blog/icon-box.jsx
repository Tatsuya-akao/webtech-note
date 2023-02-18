import s from "@/styles/components/blog/icon-box.module.scss";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

export default function IconBox({
  children,
  type = "ref",
  headline = "Reference",
}) {
  const outputBoxClass = (type) => {
    switch (type) {
      case "ref": {
        return s.ref;
      }
      default:
        return s.normal;
    }
  };

  const boxClass = outputBoxClass(type);

  return (
    <div className={`${s.box} ${boxClass}`}>
      <div className={s.head}>
        <HiOutlineClipboardDocumentList className={s.icon} />
        <span className={s.headline}>{headline}</span>
      </div>
      <div css={s.content}>{children}</div>
    </div>
  );
}
