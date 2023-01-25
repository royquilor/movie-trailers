import { ReactNode } from "react";
import Footer from "./Footer";
import Meta from "./Meta";
import Nav from "./Nav";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 80 }}
      className="min-h-screen"
    >
      <Meta />
      {/* <Nav /> */}
      <main> {children} </main>
      {/* <Footer /> */}
    </motion.div>
  );
};

export default Layout;
