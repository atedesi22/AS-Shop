import React from 'react';
import { Home, Search, ShoppingBag, User, Heart } from 'lucide-react';

const BottomNav = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-black/80 backdrop-blur-lg border-t border-white/10 z-[150] px-6 py-3 flex justify-between items-center">
      <NavItem icon={<Home size={24} />} label="Accueil" active />
      <NavItem icon={<Search size={24} />} label="Recherche" />
      <NavItem icon={<ShoppingBag size={24} />} label="Panier" />
      <NavItem icon={<Heart size={24} />} label="Favoris" />
      <NavItem icon={<User size={24} />} label="Profil" />
    </div>
  );
};

const NavItem = ({ icon, label, active }) => (
  <button className={`flex flex-col items-center gap-1 transition-colors ${active ? 'text-primary-cyan' : 'text-white/50 hover:text-white'}`}>
    {icon}
    <span className="text-[10px] font-bold uppercase">{label}</span>
  </button>
);

export default BottomNav;