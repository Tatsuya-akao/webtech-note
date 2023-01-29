import PostCard from "./post-card";
import s from "@/styles/components/layout/post-list.module.scss";

export default function PostList({ posts, headingLevel }) {
  return (
    <ul className={`${s.list}`}>
      {posts.map((post) => {
        const { _id } = post;

        return (
          <li key={_id} className={s.item}>
            <PostCard post={post} headingLevel={headingLevel} />
          </li>
        );
      })}
    </ul>
  );
}
