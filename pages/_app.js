import { AnimatePresence } from "framer-motion";
import { DefaultSeo } from "next-seo";
import "@/styles/base/reset.scss";
import "@/styles/base/mixins.scss";
import "@/styles/base/colors.scss";
import "@/styles/base/global.scss";
import "@/styles/libs/rehype.scss";
import "@/styles/libs/splide.scss";
import "@/styles/libs/tocbot.scss";
import { seoProps } from "@/utils/seo";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...seoProps} />

      <AnimatePresence mode="wait">
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
