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
  title: "Black Lion Limo: Your Premier Chicago Transportation",
  description:
    "Black Lion Limo is a premier limousine service provider located in western suburbs of Chicago. With a commitment to excellence and customer satisfaction, we offer a wide range of transportation solutions for both corporate and personal needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <Script src="/scripts/map/index.js" />
        <script
          async
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_REACT_APP_MAP_API_KEY}&callback=console.debug&libraries=maps,marker&v=beta`}
        ></script> */}
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
