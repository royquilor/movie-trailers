import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="p-5 flex gap-x-3">
      <Link href="/">Privacy</Link>
      <Link href="/">Terms</Link>
    </footer>
  );
};

export default Footer;
