export const siteTitle = "WebTech Note";
export const description =
  "Welcome to WebTech Note. I share what I have learned from my experience as a front-end web developer.";
// export const domain = '';
export const twitter = "@a_tatsu1512";

export const seoProps = {
  title: siteTitle,
  description: description,
  openGraph: {
    type: "website",
    title: siteTitle,
    siteName: siteTitle,
    description: description,
    images: [
      {
        url: "http://localhost:3000/ogp.png",
        width: 1300,
        height: 630,
        alt: "WebTech Note",
      },
    ],
  },
  twitter: {
    handle: twitter,
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.svg",
    },
  ],
};
