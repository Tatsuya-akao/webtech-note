import Giscus from "@giscus/react";

export default function Comments() {
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
      theme="preferred_color_scheme"
      strict="1"
      lang="en"
      loading="lazy"
    />
  );
}
