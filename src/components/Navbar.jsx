import React, { useContext, useState } from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlobalContext } from '../context/GlobalContext';
import { Link } from 'react-router-dom';


const linkNav = [
  { label: 'New Drop', link: "/shop" },
  { label: 'Sneakers', link: "/shop" },
  { label: 'Apparel', link: "/shop" },
  { label: 'Accessories', link: "/shop" }
];

const animatedLink = [
  { label: 'Accueil', link: "/" },
  { label: 'Boutique', link: "/shop" },
  { label: 'Marques', link: "/shop" },
  { label: 'Contact', link: "/shop" }
]
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useContext(GlobalContext);
  return (

    <>
    <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
                className="fixed inset-0 z-[200] bg-black p-8 flex flex-col justify-between"
              >
                <div className="flex justify-between items-center">
                  <a href="/" className="h-16 flex items-center">
                    <img 
                      src='/logo.png' 
                      alt="AS SHOP" 
                      className="h-full w-auto object-contain transition-transform hover:scale-105" 
                    />
                  </a>
                  <X onClick={() => setIsMenuOpen(false)} size={32} className="text-[#00A3FF]" />
                </div>
                <div className="flex flex-col gap-8 text-5xl font-black uppercase italic">
                  {animatedLink.map(item => <a key={item.label} href={item.link}>{item.label}</a>)}
                </div>
                <div className="flex gap-6 text-[#00A3FF]">
                  {/* <Instagram /> */}
                  {/* <Facebook /> */}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
    
          <nav className="fixed w-full z-[100] flex justify-between items-center px-6 bg-gray-950/5 backdrop-blur-xl border-b border-white/5">
  
  {/* --- LOGO --- */}
  {/* Suppression de m-5 et ajout de h-16 pour garder la navbar fine */}
  <a href="/" className="h-16 flex items-center">
    <img 
      src='/logo.png' 
      alt="AS SHOP" 
      className="h-full w-auto object-contain transition-transform hover:scale-105" 
    />
  </a>
  
  {/* Liens Centrés (md:flex) */}
  <div className="hidden md:flex gap-10 font-bold uppercase text-xs tracking-[0.2em]">
    {linkNav.map((item, index) => (
      <a key={index} href={item.link} className="hover:text-[#00A3FF] transition-colors">{item.label}</a>
    ))}
  </div>

  {/* Actions à droite */}
  <div className="flex items-center gap-6">
    <Search size={20} className="cursor-pointer hover:text-[#00A3FF] hidden sm:block" />
    
    <Link to="/cart" className="relative cursor-pointer">
      <ShoppingBag size={20} className="hover:text-[#00A3FF]" />
      {cart.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-[#00A3FF] text-black text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full">
          {cart.length}
        </span>
      )}
    </Link>
    
    <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-[#00A3FF]">
      <Menu />
    </button>              
    
    <button className="hidden md:block bg-white text-black px-5 py-2 rounded-full text-xs font-black uppercase hover:bg-[#00A3FF] hover:text-white transition-all">
      Connexion
    </button>
  </div>
</nav>
    </>
    
  );
};

export default Navbar;