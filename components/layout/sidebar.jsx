import Link from "next/link";
import s from "@/styles/components/layout/sidebar.module.scss";
import { GoFileDirectory } from "react-icons/go";
import { ImPriceTags } from "react-icons/im";
import { allCategoriesData, getCategoryArchiveLink } from "@/utils/categories";
import { allTagsData, getTagArchiveLink } from "@/utils/tags";

export default function Sidebar() {
  const categories = allCategoriesData;
  const tags = allTagsData;

  return (
    <aside className={`${s.sidebar} `}>
      <div className={s.block}>
        <p className={s.block_head}>
          <GoFileDirectory />
          Category
        </p>
        <ul className={s.cat_list}>
          {categories.map((category) => {
            return (
              <li key={category.slug} className={s.cat_item}>
                <Link
                  href={getCategoryArchiveLink(category.slug)}
                  className={s.cat_link}
                >
                  <span>-</span>
                  {category.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={s.block}>
        <p className={s.block_head}>
          <ImPriceTags />
          Tag
        </p>
        <ul className={s.tag_list}>
          {tags.map((tag) => {
            const { name, slug } = tag;

            return (
              <li className={s.tag_item} key={name}>
                <Link href={getTagArchiveLink(slug)} className={s.tag_link}>
                  <span>#</span> {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
