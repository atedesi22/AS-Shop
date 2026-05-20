import React, { useState } from 'react';
import { ShoppingBag, Search, User, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import BottomNav from '../components/BottomNav';
// import logoAsShop from '../assets/asshop2.JPG';


const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Images récupérées pour le design
        // import logoAsShop from '../assets/asshop2.JPG';
        // import heroBg from '../assets/asshop1.JPG';
        // import catShoes from '../assets/asshop5.JPG';
        // import catClothes from '../assets/asshop3.JPG';
        // import catAcc from '../assets/asshop4.JPG';


  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      
      {/* --- MOBILE DRAWER --- */}
      {/* <AnimatePresence>
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
              {['Accueil', 'Boutique', 'Marques', 'Contact'].map(item => <a key={item} href="#">{item}</a>)}
            </div>
            <div className="flex gap-6 text-primary-cyan">
             
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}

      {/* --- HERO SECTION IMMERSIVE --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image avec Overlay */}
        <div className="absolute inset-0 z-0">
          <img src='/asshop1.JPG' alt="Hero" className="w-full h-full object-cover scale-110 opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary-cyan font-black tracking-[0.5em] uppercase text-sm mb-4 block">
            Exclusive Streetwear
          </motion.span>
          <motion.h1 
            initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}
            className="text-7xl md:text-[10rem] font-black leading-none uppercase italic tracking-tighter"
          >
            STEP UP <br /> <span className="text-transparent border-t-2 border-b-2 border-white/20 [-webkit-text-stroke:1px_white]">YOUR GAME</span>
          </motion.h1>
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.6 }} className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-cyan text-white px-12 py-5 rounded-full font-black uppercase tracking-widest hover:shadow-[0_0_40px_rgba(0,163,255,0.6)] transition-all">Acheter Maintenant</button>
            <button className="bg-white/10 backdrop-blur-md text-white px-12 py-5 rounded-full font-black uppercase border border-white/20 hover:bg-white hover:text-black transition-all">Collections</button>
          </motion.div>
        </div>
      </section>

      {/* --- MARQUEE DES MARQUES --- */}
      <div className="py-10 bg-white/5 border-y border-white/5 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block text-2xl font-black text-white/20 uppercase">
          NIKE • ADIDAS • JORDAN • VANS • CONVERSE • PUMA • AS SHOP • NIKE • ADIDAS • JORDAN • VANS • CONVERSE • PUMA • AS SHOP • 
        </div>
      </div>

      {/* --- CATEGORIES VISUELLES --- */}
      <section className="container mx-auto px-6 py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Footwear', img: '/asshop5.JPG', tag: 'Sneakers' },
            { name: 'Apparel', img: '/asshop3.JPG', tag: 'Hoodies/Tees' },
            { name: 'Extras', img: '/asshop4.JPG', tag: 'Caps/Bags' }
          ].map((cat, i) => (
            <motion.div 
              key={i} whileHover={{ y: -10 }}
              className="relative h-[500px] rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <span className="text-primary-cyan font-bold text-xs uppercase tracking-widest">{cat.tag}</span>
                <h3 className="text-4xl font-black uppercase italic">{cat.name}</h3>
                <ArrowRight className="mt-4 text-white group-hover:text-primary-cyan transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- PRODUITS VEDETTES --- */}
      <section className="container mx-auto px-6 pb-32">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-5xl font-black uppercase italic">Best <span className="text-primary-cyan">Sellers</span></h2>
          <a href="#" className="text-primary-cyan font-bold hover:underline">Voir tout</a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
          <ProductCard name="Jordan 4 Black Cat" price="165 000 FCFA" />
          <ProductCard name="Nike Dunk Low Panda" price="85 000 FCFA" />
          <ProductCard name="Yeezy Boost 350" price="145 000 FCFA" />
          <ProductCard name="Air Force 1 White" price="75 000 FCFA" />
        </div>
      </section>
          <BottomNav />
    </div>
  );
};

export default Home;