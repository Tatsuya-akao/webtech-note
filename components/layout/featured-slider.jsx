import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import Link from "next/link";
import s from "@/styles/components/layout/featured-slider.module.scss";
import "@splidejs/splide/css";
import { featuredPosts } from "@/utils/posts";

export default function FeaturedSlider(...props) {
  return (
    <>
      <Splide
        aria-label="Featured Posts"
        className={s.slider}
        options={{
          autoplay: true,
          interval: 5000,
          speed: 1000,
          perPage: 3.5,
          perMove: 1,
          gap: "48px",
          type: "loop",
          arrows: false,
          mediaQuery: "min",
          breakpoints: {
            1440: {
              fixedWidth: 380,
            },
          },
        }}
      >
        {featuredPosts.map((post) => {
          const { title, image, url } = post;

          return (
            <SplideSlide key={url}>
              <Link href={url} className={s.slide}>
                <div className={s.thumb_wrap}>
                  <Image src={image} fill alt={`${title}`} />
                </div>
                <p className={s.title}>{title}</p>
              </Link>
            </SplideSlide>
          );
        })}
      </Splide>
    </>
  );
}
