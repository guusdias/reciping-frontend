import React from "react";
import Image from "next/image";
import { PowerIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import NavLinks from "@/app/ui/home/heading-links";

export default function Header() {
  return (
    <header className="bg-gray-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image
            className="mb-4"
            src="/logo.png"
            alt="logo"
            width={75}
            height={75}
          />
        </div>
        <NavLinks />
        <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-slate-100 text-slate-70 p-3 text-sm font-medium  hover:bg-slate-200 hover:text-slate-800 md:flex-none md:justify-start md:p-2 md:px-3">
          <PowerIcon className="w-6" />
          <div className="hidden md:block">Sign Out</div>
        </button>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Pesquisar"
              className="px-2 py-1 rounded"
            />
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <MagnifyingGlassIcon className="w-4 color-slate-800" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
