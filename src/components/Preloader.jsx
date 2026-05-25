import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  return (

    <AnimatePresence>
        <div className="fixed inset-0 pointer-events-none opacity-15 z-0">
        <img 
          src="/asshop1.JPG" 
          className="w-full h-full object-cover filter blur-[2px]"
          alt=""
        />
      </div>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white text-black"
        exit={{ opacity: 0 }}
      >
        {/* LOGO avec effet Bounce */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10, bounce: 0.8 }}
          className="mb-8"
        >
          <img src="/logo.png" alt="NovaVerse" className="w-74 h-94" />
        </motion.div>

        {/* MARQUES qui apparaissent au fur et à mesure */}
        
        <div className="flex gap-4 text-black/90 font-bold uppercase tracking-widest">
          {['Nike', 'Jordan', 'Adidas', 'Vans', 'Converse', 'Puma', 'AS SHOP'].map((brand, i) => (
            <motion.span
              key={brand}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.4, duration: 0.5 }}
            >
              {brand}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;