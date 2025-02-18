import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import { CallButton } from "@/components/ui/callButton";

const lato = localFont({
  src: "./fonts/lato/Lato-Regular.ttf",
  variable: "--lato-regular",
  weight: "400",
});
const latoBlack = localFont({
  src: "./fonts/lato/Lato-Black.ttf",
  variable: "--lato-black",
  weight: "900",
});
const latoBold = localFont({
  src: "./fonts/lato/Lato-Bold.ttf",
  variable: "--lato-bold",
  weight: "700",
});
const EbSemiBold = localFont({
  src: "./fonts/eb/EBGaramond-SemiBold.ttf",
  variable: "--eb-semi-bold",
  weight: "600",
});

export const metadata = {
  title: "Black Lion Limousine: Your Premier Chicago Transportation",
  description:
    "Black Lion Limousine is a premier limousine service provider located in western suburbs of Chicago. With a commitment to excellence and customer satisfaction, we offer a wide range of transportation solutions for both corporate and personal needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:title"
          content="Black Lion Limousine: Your Premier Chicago Transportation"
        />
        <meta
          name="keywords"
          content="limousine rental Chicago, limousine service Chicago, wedding limousine Chicago, luxury car hire Chicago, airport limousine Chicago"
        />
        <meta
          property="og:description"
          content="Black Lion Limousine is a premier limousine service provider located in western suburbs of Chicago. With a commitment to excellence and customer satisfaction, we offer a wide range of transportation solutions for both corporate and personal needs."
        />
        <meta property="og:image" content="/images/desc/title.png" />
        <meta property="og:url" content="https://blacklionlimo.com" />
        <meta property="og:type" content="website" />
      </head>
      <body
        className={`${latoBlack.variable} ${lato.variable} ${latoBold.variable} ${EbSemiBold.variable} antialiased`}
      >
        {children}
        <CallButton />
      </body>
    </html>
  );
}
