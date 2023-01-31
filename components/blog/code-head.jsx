import s from "@/styles/components/blog/code-head.module.scss";
import margin from "@/styles/components/blog/margin.module.scss";
import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoReact,
  IoLogoCss3,
  IoLogoSass,
  IoLogoMarkdown,
  IoTerminal,
  IoTerminalOutline,
} from "react-icons/io5";

export default function CodeHead({ name, lang }) {
  const outputLanguageString = (value) => {
    switch (value) {
      case "html": {
        return {
          name: "HTML",
          icon: <IoLogoHtml5 />,
        };
      }
      case "css": {
        return {
          name: "CSS",
          icon: <IoLogoCss3 />,
        };
      }
      case "scss": {
        return {
          name: "Sass",
          icon: <IoLogoSass />,
        };
      }
      case "js": {
        return {
          name: "JavaScript",
          icon: <IoLogoJavascript />,
        };
      }
      case "jsx": {
        return {
          name: "JSX",
          icon: <IoLogoReact />,
        };
      }
      case "md": {
        return {
          name: "Markdown",
          icon: <IoLogoMarkdown />,
        };
      }
      case "mdx": {
        return {
          name: "MDX",
          icon: <IoLogoMarkdown />,
        };
      }
      case "console": {
        return {
          name: "console",
          icon: <IoTerminalOutline />,
        };
      }
      default:
        break;
    }
  };

  const langData = outputLanguageString(lang);

  return (
    <div className={`${s.code_head}`}>
      <div className={s.dots}>
        <span></span>
      </div>

      <div className={s.text_wrap}>
        {name && <span className={s.name}>{name}</span>}
        <div className={s.lang_wrap}>
          <div className={s.icon} data-lang={lang}>
            {langData.icon}
          </div>
          <span className={s.lang}>{langData.name}</span>
        </div>
      </div>
    </div>
  );
}
