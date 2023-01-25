import Link from "next/link";

const Nav = () => {
  return (
    <div className="fixed left-0 top-0 z-10 p-5 flex w-full gap-x-5 text-white text-sm justify-between ">
      <div>
        <Link href="/">Trailers</Link>
      </div>
      <div className="flex gap-x-8">
        <Link href="/">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Nav;
