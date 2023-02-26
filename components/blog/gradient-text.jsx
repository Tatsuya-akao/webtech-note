import { useEffect, useState } from "react";
import { openSans } from "@/utils/fonts";
import s from "@/styles/components/blog/gradient-text.module.scss";

export default function GradientText({
  text,
  type = "type01",
  display,
  clip,
  transparent,
  clipCheck,
}) {
  const [isClipped, setIsClipped] = useState(false);

  return (
    <>
      <span
        className={`${s.text} ${openSans.className} ${
          display === "inline"
            ? s.inline
            : display === "inline-block"
            ? s.inlineBlock
            : s.block
        } 
      ${type === "type01" ? s.type01 : "type02" ? s.type02 : s.type01}
      ${clip && s.clip} ${isClipped === true && s.clip} ${
          transparent && s.transparent
        }`}
      >
        {text}
      </span>
      {clipCheck && (
        <div className={s.btnWrap}>
          <button
            aria-label="Toggle clip"
            className={s.btn}
            onClick={() => setIsClipped(!isClipped)}
          >
            Toggle clip
          </button>
        </div>
      )}
    </>
  );
}
