"use client";
import Link from "next/link";
import Info from "./Info";
import AddTrackDialog from "../add-dialog/AddTrackDialog";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full z-50 py-5">
      <div className="container flex items-center justify-between relative md:flex-row-reverse">
        <div className="md:hidden">
          <Info />
        </div>

        <Link
          href="/"
          className="font-clash text-4xl font-bold md:absolute md:left-1/2 md:-translate-x-1/2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
        >
          Musica
        </Link>

        <div className="flex items-center gap-4">
          <AddTrackDialog />
          <div className="hidden md:flex">
            <Info />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
