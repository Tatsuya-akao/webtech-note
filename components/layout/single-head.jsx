import Link from "next/link";
import Image from "next/image";
import { format, parseISO } from "date-fns";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsArrowClockwise } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";
import s from "@/styles/components/layout/single-head.module.scss";
import { getTagsData } from "@/utils/tags";
import { getSingleCategorySlug } from "@/utils/categories";

export default function SingleHead({ post }) {
  const { category, publishedAt, image, title, tags } = post;
  const tagsData = getTagsData(tags);

  return (
    <div className={s.head}>
      <div className={s.breadcrumb}>
        <Link href="/">Home</Link>
        <FaChevronRight />
        <Link href="/posts">Posts</Link>
        <FaChevronRight />
        <Link href={getSingleCategorySlug(category)}>{category}</Link>
      </div>

      <div className={s.thumb}>
        <Image src={image} fill alt={title} priority />
      </div>

      <div className={s.head_info}>
        <Link href={getSingleCategorySlug(category)} className={s.category}>
          {category}
        </Link>
        <div className={s.time_wrap}>
          <time className={s.time}>
            <AiOutlineClockCircle className={s.icon_published} />
            {format(parseISO(publishedAt), "LLLL d, yyyy")}
          </time>

          {post.revisedAt && (
            <time className={s.time}>
              <BsArrowClockwise className={s.icon_revised} />
              {format(parseISO(post.revisedAt), "LLLL d, yyyy")}
            </time>
          )}
        </div>
      </div>

      <h1 className={s.title}>{title}</h1>

      <ul className={s.tags}>
        {tagsData.map((tag) => {
          return (
            <li className={s.tag} key={tag.name}>
              <Link href={tag.slug} className={s.tag_link}>
                <span>#</span> {tag.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
