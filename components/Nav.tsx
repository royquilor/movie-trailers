import AvatarDemo from "../components/Avatar";
import { Dialog } from "@radix-ui/react-dialog";
import Link from "next/link";
import AboutDialog from "./AboutDialog";
import NavigationMenuDemo from "./NavigationMenu";

const Nav = () => {
  return (
    <div className="relative z-20 p-5 flex w-full gap-x-5 text-white text-sm font-semibold justify-between">
      <div className="flex gap-x-5">
        <Link href="/">Trailers</Link>
        <AboutDialog text="About">
          <div className="flex gap-6 w-full items-start">
            <div>
              <Link href="https://twitter.com/RoyQuilor">
                <AvatarDemo />
              </Link>
            </div>
            <div>
              <h2 className="text-xl mb-2 text-slate-900 font-semibold">
                Trending movie trailers
              </h2>
              <p className="text-base text-slate-600">
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
