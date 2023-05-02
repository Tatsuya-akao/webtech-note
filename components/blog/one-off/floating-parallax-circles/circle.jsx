import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from "react";
import s from "@/styles/components/blog/one-off/floating-parallax-circles.module.scss";

gsap.registerPlugin(ScrollTrigger);

export function Circle() {
  const el = useRef();
  const q = gsap.utils.selector(el);

  // それぞれのitemをtriggerとして使いたい
  // 現状一番最初の要素の位置が全体のトリガーになってる

  // useEffect(() => {
  //   gsap.to(q(".js-circle"), {
  //     x: "random(-200, 200, 5)",
  //     y: "random(-200, 200, 5)",
  //     ease: "power1.in",
  //     scrollTrigger: {
  //       trigger: q(".js-circle"),
  //       start: "top bottom-=1",
  //       end: "bottom top+=1",
  //       scrub: 2,
  //       markers: true,
  //     },
  //   });
  // }, []);

  return <div ref={el} className={`js-circle ${s.circle}`}></div>;
}
