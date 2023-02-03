import Link from "next/link";
import Image from "next/image";
import { allPosts } from "contentlayer/generated";
import s from "@/styles/components/blog/link-card.module.scss";

export default function LinkCard({ postSlug }) {
  const { title, excerpt, image, url } = allPosts.find((post) => {
    return post._raw.flattenedPath === postSlug;
  });

  return (
    <Link href={url} className={s.card}>
      <div className={s.thumb_wrap}>
        <div className={s.thumb}>
          <Image src={image} fill sizes="200px" alt={title} />
        </div>
      </div>

      <div className={s.content}>
        <p className={s.title}>{title}</p>
        <p className={s.excerpt}>{excerpt}</p>
      </div>
    </Link>
  );
}
