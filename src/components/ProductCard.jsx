import React, { useState } from 'react';
import { ShoppingCart, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductCard = ({ name, price, image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const whatsappLink = `https://wa.me/237694870584?text=${encodeURIComponent(`Je souhaite commander : ${name} à ${price}`)}`;

  return (
    <>
      <div className="bg-neutral-900 rounded-2xl p-4 border border-white/5 group hover:border-primary-cyan transition-all">
        <img src={image} alt={name} className="w-full h-64 object-cover rounded-xl mb-4" />
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-primary-cyan font-bold mb-4">{price}</p>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-primary-cyan hover:text-white transition"
        >
          Commander
        </button>
      </div>

      {/* Modal de Prévisualisation */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9 }} animate={{ scale: 1 }}
              className="bg-neutral-900 p-6 rounded-3xl max-w-sm w-full relative border border-white/10"
            >
              <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-white/50 hover:text-white"><X /></button>
              
              <img src={image} alt={name} className="w-full h-80 object-cover rounded-2xl mb-6" />
              <h3 className="text-2xl font-black uppercase mb-2">{name}</h3>
              <p className="text-primary-cyan font-bold text-xl mb-6">{price}</p>
              
              <a href={whatsappLink} target="_blank" className="w-full flex items-center justify-center gap-2 bg-[#25D366] py-4 rounded-xl font-bold">
                <MessageCircle size={20} /> Valider sur WhatsApp
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductCard;