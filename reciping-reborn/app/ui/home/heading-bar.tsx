import React from "react";
import NavLinks from "@/app/ui/home/heading-links";

export default function Header() {
  return (
    <header className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8" />
        </div>
        <NavLinks />
        <div className="flex items-center space-x-4">
          <button className="text-white">Fazer login</button>
          <button className="text-white">Criar conta</button>
          <div className="relative">
            <input
              type="text"
              placeholder="Pesquisar"
              className="px-2 py-1 rounded"
            />
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
              🔍
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
