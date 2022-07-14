import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <div className="absolute top-[4rem] font-lobster text-6xl">
        Karmen.Page
      </div>
      <div className="grid grid-cols-6 font-barlow h-12 -mt-6">
        <div className="col-span-4"></div>
        <div className="col-span-1 grid place-items-center">
          <Link href="/">
            <button className="bg-hero-color hover:bg-hero-color hover:bg-opacity-50 h-full w-full">Home</button>
          </Link>
        </div>
        <div className="col-span-1 grid place-items-center">
          <Link href="/about">
            <button className="bg-hero-color h-12 hover:bg-hero-color hover:bg-opacity-50 h-full w-full">About</button>
          </Link>
        </div>
      </div>
    </header>
  );
}