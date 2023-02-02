import Image from "next/image";
import s from "@/styles/components/blog/blog-image.module.scss";

export default function BlogImage({
  src,
  alt,
  caption,
  width,
  height,
  hasBorder,
  hasShadow,
  children,
  ...props
}) {
  return (
    <figure className={`${s.figure}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${s.img} 
        ${hasBorder && s.img_border}
        ${hasShadow && s.img_shadow}`}
        {...props}
      />

      {/* {caption && (
        <figcaption className={s.caption}>
          <span>{caption}</span>
        </figcaption>
      )} */}

      {children && <figcaption className={s.caption}>{children}</figcaption>}
    </figure>
  );
}
