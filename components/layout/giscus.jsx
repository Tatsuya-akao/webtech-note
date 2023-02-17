import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

const themeMapping = {
  light: "light",
  dark: "dark",
};

export default function Comments() {
  const { resolvedTheme } = useTheme();
  const theme = themeMapping[resolvedTheme];

  return (
    <Giscus
      id="comments"
      repo="Tatsuya-akao/webtech-note"
      repoId="R_kgDOI3MqPA"
      category="Announcements"
      categoryId="DIC_kwDOI3MqPM4CT-NJ"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme={theme}
      strict="1"
      lang="en"
      loading="lazy"
    />
  );
}
