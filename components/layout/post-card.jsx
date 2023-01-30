import Link from "next/link";
import Image from "next/image";
import { AiOutlineClockCircle } from "react-icons/ai";
import { format, parseISO } from "date-fns";
import s from "@/styles/components/layout/post-card.module.scss";
import { openSans } from "@/utils/fonts";

export default function PostCard({ post, headingLevel }) {
  const { category, tags, excerpt, title, image, publishedAt, url } = post;

  const Heading = () => {
    const HeadingTag = headingLevel;

    return (
      <HeadingTag className={`${s.heading} ${openSans.className}`}>
        <span>{title}</span>
      </HeadingTag>
    );
  };

  return (
    <Link href={url} as={url} className={s.card}>
      <p className={`${s.cat}`}>{category}</p>
      <div className={s.thumb_wrap}>
        <div className={s.thumb}>
          <Image
            src={image}
            fill
            sizes="(max-width: 650px) 100vw, 33vw"
            alt={title}
          />
        </div>
      </div>
      <div className={s.content}>
        <Heading />
        <p className={s.excerpt}>{excerpt}</p>
        <ul className={s.tags}>
          {tags.map((tag) => {
            return (
              <li className={s.tag} key={tag}>
                <span>#</span> {tag}
              </li>
            );
          })}
        </ul>
        <div className={s.info}>
          <p className={s.time}>
            <AiOutlineClockCircle />
            {format(parseISO(publishedAt), "LLLL d, yyyy")}
          </p>
        </div>
      </div>
    </Link>
  );
}
