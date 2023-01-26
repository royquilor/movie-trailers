import "../styles/globals.css";
import type { AppProps } from "next/app";
import { motion } from "framer-motion";

import localFont from "@next/font/local";
const myFont = localFont({
  src: "../fonts/Mona-Sans.woff2",
  variable: "--font-mona-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
      exit={{ opacity: 0, y: 20 }}
    >
      <main className={`${myFont.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </motion.div>
  );
}
