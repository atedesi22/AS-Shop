import React, { useContext, useState } from 'react';
import { ShoppingCart, X, MessageCircle, Heart } from 'lucide-react';
import { GlobalContext } from '../context/GlobalContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const ProductCard = ({ name, price, image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart, toggleFavorite, favorites } = useContext(GlobalContext);
  const product = products.find((p) => p.name === name); // Cherche par nom
  
  // const isFavorite = favorites?.some((item) => item.name === name);
const isFavorite = favorites?.some((item) => item.id === product.id);

const BASE_URL = "https://as-shop-seven.vercel.app"; // Remplace par ton vrai domaine

const whatsappLink = `https://wa.me/237694870584?text=${encodeURIComponent(
  `📦 *COMMANDE AS SHOP*\n\n` +
  `Article : ${name}\n` +
  `Prix : ${price}\n\n` +
  `--------------------------\n` +
  `Lien produit : ${BASE_URL}${image}` // WhatsApp détectera ce lien et créera l'aperçu
)}`;
  return (
    <>
      <div className="bg-neutral-900 rounded-2xl p-4 border border-white/5 group hover:border-[#00A3FF] transition-all">
      {/* <Link to={`/product/${name}`} className="block">
        <img src={image} alt={name} className="w-full h-48 max-sm:h-48 object-cover rounded-xl mb-4" />
          <h3 className="font-bold text-lg">{name}</h3>
      </Link>
        
        <p className="text-[#00A3FF] font-bold mb-4">{price}</p>

        <div className="flex gap-2">

          <button 
          onClick={() => addToCart({ name, price, image })}
          className="flex-grow py-3 bg-white text-black font-bold rounded-lg hover:bg-[#00A3FF] transition"
        >
          <ShoppingCart size={20} className="inline mr-2" /> 
        </button>
        <button 
          onClick={() => toggleFavorite({ name, price, image })}
          className={`p-3 rounded-lg border ${isFavorite ? 'bg-red-500 border-red-500' : 'border-white/10 hover:border-red-500'}`}
        >
          <Heart size={20} className={isFavorite ? 'fill-white' : ''} />
        </button>
        </div> */}

        {/* On utilise product.id pour le lien */}
      <Link to={`/product/${product.id}`} className="block">
        <img src={product.image} alt={product.name} className="w-full h-45 object-cover rounded-xl mb-4" />
        <h3 className="font-bold text-sm">{product.name}</h3>
      </Link>
        
      <p className="text-[#00A3FF] font-bold mb-4">{product.price}</p>

      <div className="flex gap-2">
        <button onClick={() => addToCart(product)} 
        className="flex-grow py-3 bg-white text-black font-bold rounded-lg hover:bg-[#00A3FF] transition">
          <ShoppingCart size={20} className="inline mr-2"/> 
        </button>
        <button onClick={() => toggleFavorite(product)} className={`p-3 rounded-lg border ${isFavorite ? 'bg-red-500 border-red-500' : 'border-white/10'}`}>
          <Heart size={20} className={isFavorite ? 'fill-white' : ''} />
        </button>
      </div>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="w-full py-3 bg-[#00A3FF] text-white font-bold rounded-lg hover:bg-[#00A3FF] hover:text-white transition"
        >
           Commander
        </button>
      </div>
 {/* sdsd */}
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
              <p className="text-[#00A3FF] font-bold text-xl mb-6">{price}</p>
              
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

