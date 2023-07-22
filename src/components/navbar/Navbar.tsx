"use client";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { BoltIcon, PlusIcon } from "@heroicons/react/20/solid";

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Info from "./Info";

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
          <Link
            aria-label="add-track-page"
            href="/add"
            className={buttonVariants({
              size: "icon",
              variant: "secondary",
            })}
          >
            <PlusIcon className="h-6 w-6" />
          </Link>
          <div className="hidden md:flex">
            <Info />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
