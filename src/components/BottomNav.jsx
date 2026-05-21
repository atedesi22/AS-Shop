import React, { useState, useEffect } from 'react';
import { Home, Search, ShoppingBag, User, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const BottomNav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // On cache si on scroll vers le bas, on affiche si on scroll vers le haut
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100 }} 
          animate={{ y: 0 }} 
          exit={{ y: 100 }}
          className="md:hidden fixed bottom-0 left-0 w-full bg-black/80 backdrop-blur-lg border-t border-white/10 z-[150] px-6 py-3 flex justify-between items-center"
        >
          <NavLink to="/" className={({isActive}) => isActive ? "text-[#00A3FF]" : "text-white/50"}>
            <Home size={24} />
          </NavLink>
          <NavLink to="/search" className={({isActive}) => isActive ? "text-[#00A3FF]" : "text-white/50"}>
            <Search size={24} />
          </NavLink>
          <NavLink to="/cart" className={({isActive}) => isActive ? "text-[#00A3FF]" : "text-white/50"}>
            <ShoppingBag size={24} />
          </NavLink>
          <NavLink to="/wishlist" className={({isActive}) => isActive ? "text-[#00A3FF]" : "text-white/50"}>
            <Heart size={24} />
          </NavLink>
          <NavLink to="/profile" className={({isActive}) => isActive ? "text-[#00A3FF]" : "text-white/50"}>
            <User size={24} />
          </NavLink>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const NavItem = ({ icon, label, active }) => (
  <button className={`flex flex-col items-center gap-1 transition-colors ${active ? 'text-[#00A3FF]' : 'text-white/50 hover:text-white'}`}>
    {icon}
    <span className="text-[10px] font-bold uppercase">{label}</span>
  </button>
);

export default BottomNav;