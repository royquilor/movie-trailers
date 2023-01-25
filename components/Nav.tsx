import Link from "next/link";

const Nav = () => {
  return (
    <div className="fixed left-0 top-0 z-10 p-5 flex gap-x-5 text-white text-sm ">
      <Link href="/">Home</Link>
      <Link href="/">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
};

export default Nav;
