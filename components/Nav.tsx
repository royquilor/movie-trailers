import AvatarDemo from "../components/Avatar";
import { Dialog } from "@radix-ui/react-dialog";
import Link from "next/link";
import AboutDialog from "./AboutDialog";
import NavigationMenuDemo from "./NavigationMenu";

const Nav = () => {
  return (
    <div className="relative z-20 py-5 px-5 lg:px-16 flex w-full gap-x-5 text-white text-sm font-semibold justify-between">
      <div className="flex gap-x-5">
        <Link href="/">Trailers</Link>
        <AboutDialog text="About">
          <div className="grid lg:grid-cols-4 w-full items-center">
            <div className="col-span-1 ">
              <Link href="https://twitter.com/RoyQuilor">
                <AvatarDemo />
              </Link>
            </div>
            <div className="col-span-3">
              <h2 className="text-2xl mb-2 text-slate-900 font-medium">
                Trending movie trailers
              </h2>
              <p className="text-base text-slate-500">
                Passion project by Roy Quilor. Built with Next JS, Tailwind CSS,
                Radix UI, TMDB and Vercel.
              </p>
            </div>
          </div>
        </AboutDialog>
      </div>
    </div>
  );
};

export default Nav;
