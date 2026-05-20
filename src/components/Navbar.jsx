import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


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
  return (

    <>
    <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
                className="fixed inset-0 z-[200] bg-black p-8 flex flex-col justify-between"
              >
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-black tracking-tighter">AS SHOP</span>
                  <X onClick={() => setIsMenuOpen(false)} size={32} className="text-primary-cyan" />
                </div>
                <div className="flex flex-col gap-8 text-5xl font-black uppercase italic">
                  {animatedLink.map(item => <a key={item.label} href={item.link}>{item.label}</a>)}
                </div>
                <div className="flex gap-6 text-primary-cyan">
                  {/* <Instagram /> */}
                  {/* <Facebook /> */}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
    
    <nav className="fixed w-full z-[100] px-6 py-5 flex justify-between items-center bg-black/40 backdrop-blur-xl border-b border-white/5">
            {/* --- LOGO À LA PLACE DU TEXTE --- */}
            <a href="/" className="group block h-12">
              <img 
                src='/asshop2.JPG' // Utilisation de la variable importée ici
                alt="AS SHOP - Logo Streetwear Douala" 
                className="h-full w-auto object-contain transition-transform group-hover:scale-105"
              />
            </a>
            
            <div className="hidden md:flex gap-10 font-bold uppercase text-xs tracking-[0.2em]">
              {
               linkNav.map((item, index) => (
                <a key={index} href={item.link} className="hover:text-primary-cyan transition-colors">{item.label}</a>
              ))}
            </div>
    
            <div className="flex items-center gap-6">
              <Search size={20} className="cursor-pointer hover:text-primary-cyan hidden sm:block" />
              <ShoppingBag size={20} className="cursor-pointer hover:text-primary-cyan" />
<button onClick={() => setIsMenuOpen(true)} className="md:hidden text-primary-cyan">
  <Menu />
</button>              <button className="hidden md:block bg-white text-black px-5 py-2 rounded-full text-xs font-black uppercase hover:bg-primary-cyan hover:text-white transition-all">Connexion</button>
            </div>
          </nav>
    </>
    
  );
};

export default Navbar;