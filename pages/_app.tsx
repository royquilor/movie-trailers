import "../styles/globals.css";
import type { AppProps } from "next/app";

import localFont from "@next/font/local";
const myFont = localFont({
  src: "../fonts/Mona-Sans.woff2",
  variable: "--font-mona-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${myFont.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
