import "../styles/globals.css";
import { ReactNode } from "react";

import localFont from "@next/font/local";
import Nav from "../components/Nav";
const myFont = localFont({
  src: "../fonts/Mona-Sans.woff2",
  variable: "--font-mona-sans",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${myFont.variable} font-sans`}>
      <head />
      <Nav />
      <body>{children}</body>
    </html>
  );
}
