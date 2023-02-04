import Script from "next/script";
import { GA_TRACKING_ID } from "@/utils/gtag";

export function GaScript() {
  return (
    <>
      {GA_TRACKING_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
 
           gtag('config', '${GA_TRACKING_ID}');
           `,
            }}
          />
        </>
      )}
    </>
  );
}
