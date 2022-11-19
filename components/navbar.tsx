import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <div className="flex flex-row justify-between font-hindsiliguri bg-hero-color h-20 items-center text-hero-font">
        <div className="ml-4 text-2xl lg:text-4xl">
          Karmen's Data Science Blog
        </div>
        <div className="grid grid-cols-1 text-xl lg:text-2xl">
        <div className="mr-8">
          <Link href="/">
            <button className="hover:bg-hover-color hover:bg-opacity-60 h-12 w-24 md:w-32 rounded">Home</button>
          </Link>
        </div>
        {/* <div className="">
          <Link href="/about">
            <button className="hover:bg-hover-color hover:bg-opacity-60 h-12 w-24 md:w-32 rounded">About</button>
          </Link>
        </div> */}
      </div>
      </div>
    </header>
  );
}