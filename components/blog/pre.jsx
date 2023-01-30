import { MdContentCopy, MdDone } from "react-icons/md";
import { useEffect, useState, useRef } from "react";

import s from "@/styles/components/blog/pre.module.scss";

export default function Pre({ ...props }) {
  const [isCopied, setIsCopied] = useState(false);
  const codeContent = useRef(null);

  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch (error) {
      alert((error && error.message) || "Failed to copy to clipboard.");
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCopied(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [isCopied]);

  return (
    <>
      <button
        className={isCopied ? `${s.copy} ${s.copy_done}` : s.copy}
        onClick={() => copyToClipboard(codeContent.current.textContent)}
        title="Copy"
      >
        {isCopied ? (
          <span className={s.icon_done}>
            <MdDone />
          </span>
        ) : (
          <span className={s.icon_copy}>
            <MdContentCopy />
          </span>
        )}
      </button>
      <pre className={s.pre} {...props} ref={codeContent}>
        {props.children}
      </pre>
    </>
  );
}
