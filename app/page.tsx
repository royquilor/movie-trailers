"use client";

import Hero from "../components/Hero";
import Row from "../components/Row";
import requests from "../Requests";
import { motion } from "framer-motion";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <main className="bg-black min-h-screen">
        <Nav />
        <Hero />
        <Row title="Trending" fetchUrl={requests.fetchTrending} />
        {/* <PopularMovie movies={request.results} /> */}
      </main>
    </motion.div>
  );
}
