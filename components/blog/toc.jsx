import { useEffect } from "react";
import tocbot from "tocbot";
import { MdOutlineToc } from "react-icons/md";

export default function Toc() {
  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc-content",
      contentSelector: ".user-content",
      headingSelector: "h2, h3",
      scrollSmoothOffset: -100,
      scrollSmoothDuration: 200,
    });

    return () => tocbot.destroy();
  }, []);

  return (
    <div className="toc">
      <div className="toc-card">
        <div className="toc-icon">
          <MdOutlineToc />
        </div>
        <p className="toc-head">- Table of Contents -</p>
        <div className="toc-content"></div>
      </div>
    </div>
  );
}
