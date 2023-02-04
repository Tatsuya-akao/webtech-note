import { DefaultSeo } from "next-seo";
import * as gtag from "@/utils/gtag";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { GaScript } from "@/components/layout/ga-script";

import "@/styles/base/reset.scss";
import "@/styles/base/mixins.scss";
import "@/styles/base/colors.scss";
import "@/styles/base/global.scss";
import "@/styles/libs/rehype.scss";
import "@/styles/libs/tocbot.scss";
import { seoProps } from "@/utils/seo";
import { mukta } from "@/utils/fonts";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouterChange = (url) => {
      gtag.detectPageview(url);
    };
    router.events.on("routeChangeComplete", handleRouterChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouterChange);
    };
  }, [router.events]);

  return (
    <>
      <GaScript />
      <DefaultSeo {...seoProps} />

      <div className={mukta.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
