import { DefaultSeo } from "next-seo";
import { pageView } from "@/utils/gtag";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { GaScript } from "@/components/layout/ga-script";
import { seoProps } from "@/utils/seo";
import { mukta } from "@/utils/fonts";
import { ThemeProvider } from "next-themes";

import "@/styles/base/reset.scss";
import "@/styles/base/mixins.scss";
import "@/styles/base/colors.scss";
import "@/styles/base/global.scss";
import "@/styles/libs/rehype.scss";
import "@/styles/libs/tocbot.scss";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouterChange = (url) => {
      pageView(url);
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

      <ThemeProvider>
        <div className={mukta.className}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
