import { useEffect } from "react";
import tocbot from "tocbot";
import { MdOutlineToc } from "react-icons/md";

export default function Toc() {
  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc-content",
      contentSelector: ".user-content",
      headingSelector: "h2, h3",
      headingsOffset: 100,
      scrollSmoothOffset: -100,
      scrollSmoothDuration: 200,
      hasInnerContainers: true,
    });

    return () => tocbot.destroy();
  }, []);

  return (
    <div className="toc">
      <div className="toc-card">
        <div className="toc-head">
          <div className="toc-icon">
            <MdOutlineToc />
          </div>
          <span>Table of Contents</span>
        </div>
        <div className="toc-content"></div>
      </div>
    </div>
  );
}
