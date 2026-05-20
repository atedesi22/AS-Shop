import React from 'react';
import { ShoppingBag, Search, User, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-[#0D0D0D] border-b border-[#00A3FF]/20 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tighter text-white">
          AS<span className="text-[#00A3FF]">SHOP</span>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#" className="hover:text-[#00A3FF] transition">Accueil</a>
          <a href="#" className="hover:text-[#00A3FF] transition">Boutique</a>
          <a href="#" className="hover:text-[#00A3FF] transition">Marques</a>
        </div>

        {/* Icônes */}
        <div className="flex gap-4">
          <Search className="w-6 h-6 cursor-pointer hover:text-[#00A3FF] transition" />
          <ShoppingBag className="w-6 h-6 cursor-pointer hover:text-[#00A3FF] transition" />
          <User className="w-6 h-6 cursor-pointer hover:text-[#00A3FF] transition" />
          {/* <Menu className="md:hidden w-6 h-6 cursor-pointer" /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;