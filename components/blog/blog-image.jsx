import Image from "next/image";
import s from "@/styles/components/blog/blog-image.module.scss";

export default function BlogImage({
  src,
  alt,
  caption,
  width,
  height,
  ...props
}) {
  return (
    <figure className={`${s.figure}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={s.img}
        {...props}
      />

      {caption && (
        <figcaption className={s.caption}>
          <span>{caption}</span>
        </figcaption>
      )}
    </figure>
  );
}
