import React, { useState } from 'react';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      {/* Navbar Améliorée */}
      <nav className="p-6 flex justify-between items-center relative">
        <div className="text-3xl font-bold tracking-tighter">AS<span className="text-primary-cyan">SHOP</span></div>
        
        {/* Menu Desktop */}
        <div className="hidden md:flex gap-8 font-medium">
          {['Accueil', 'Chaussures', 'Vêtements', 'Accessoires'].map(item => (
            <a key={item} href="#" className="hover:text-primary-cyan transition">{item}</a>
          ))}
        </div>

        {/* Menu Mobile Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8">
          {['Accueil', 'Chaussures', 'Vêtements', 'Accessoires'].map(item => <a key={item} href="#" className="text-2xl font-bold">{item}</a>)}
        </motion.div>
      )}

      {/* Hero Section Animée */}
      <header className="container mx-auto px-4 py-24 text-center">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-black mb-6 uppercase"
        >
          Urban <span className="text-primary-cyan italic">Vibe</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-light-gray text-xl mb-10 max-w-lg mx-auto">
          La sélection ultime de sneakers pour affirmer ton style.
        </motion.p>
        <motion.button whileHover={{ scale: 1.1 }} className="bg-primary-cyan px-10 py-4 rounded-full font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(0,163,255,0.5)]">
          Explorer la boutique
        </motion.button>
      </header>

      {/* Section Catégories */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">Nos Catégories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Sneakers', 'Streetwear', 'Accessoires'].map((cat) => (
            <div key={cat} className="h-64 bg-neutral-800 rounded-2xl flex items-center justify-center text-3xl font-bold hover:bg-primary-cyan transition-colors cursor-pointer border border-neutral-700">
              {cat}
            </div>
          ))}
        </div>
      </section>

      {/* Grid Produits (reste identique) */}
      <main className="container mx-auto px-4 pb-20">
        <h2 className="text-4xl font-bold mb-10">Derniers Instants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProductCard name="Air Jordan 4" price="150 000 FCFA" />
          <ProductCard name="Nike Dunk Low" price="120 000 FCFA" />
          <ProductCard name="Vans Old Skool" price="65 000 FCFA" />
          <ProductCard name="Adidas Samba" price="95 000 FCFA" />
        </div>
      </main>
    </div>
  );
};

export default Home;