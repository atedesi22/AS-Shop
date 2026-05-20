import React, { useState, useEffect } from 'react';
import { Home, Search, ShoppingBag, User, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
          <NavItem icon={<Home size={24} />} label="Accueil" active />
          <NavItem icon={<Search size={24} />} label="Recherche" />
          <NavItem icon={<ShoppingBag size={24} />} label="Panier" />
          <NavItem icon={<Heart size={24} />} label="Favoris" />
          <NavItem icon={<User size={24} />} label="Profil" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const NavItem = ({ icon, label, active }) => (
  <button className={`flex flex-col items-center gap-1 transition-colors ${active ? 'text-primary-cyan' : 'text-white/50 hover:text-white'}`}>
    {icon}
    <span className="text-[10px] font-bold uppercase">{label}</span>
  </button>
);

export default BottomNav;