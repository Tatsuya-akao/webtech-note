export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export const detectPageView = (url) => {
  if (!GA_TRACKING_ID) return;
  if (typeof window !== "undefined") {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};
