import { Open_Sans } from "@next/font/google";
import { Mukta } from "@next/font/google";

export const openSans = Open_Sans({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});

export const openSansThin = Open_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const mukta = Mukta({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});
