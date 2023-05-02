import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import s from "@/styles/components/blog/one-off/floating-parallax-circles.module.scss";
import { Circle } from "./circle";

gsap.registerPlugin(ScrollTrigger);

export function Circles() {
  const el = useRef();
  const q = gsap.utils.selector(el);

  useEffect(() => {
    gsap.to(".js-circle", {
      x: "random(-400, 400, 100)",
      y: "random(-400, 400, 100)",
      ease: "power1.in",
      scrollTrigger: {
        trigger: ".js-circles",
        start: "top bottom-=1",
        end: "bottom top+=1",
        scrub: 1,
        markers: true,
      },
    });
  }, []);

  return (
    <div className={`js-circles ${s.circles}`}>
      <div className={`js-circle ${s.circle}`}></div>
      <div className={`js-circle ${s.circle}`}></div>
      <div className={`js-circle ${s.circle}`}></div>
      <div className={`js-circle ${s.circle}`}></div>
      <div className={`js-circle ${s.circle}`}></div>
      <div className={`js-circle ${s.circle}`}></div>
      <div className={`js-circle ${s.circle}`}></div>
      <div className={`js-circle ${s.circle}`}></div>
    </div>
  );
}
