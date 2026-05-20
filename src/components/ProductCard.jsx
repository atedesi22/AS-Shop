import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';

const ProductCard = ({ name, price, image }) => {
  // Formatage du message pour WhatsApp
  const whatsappMessage = `Bonjour, je suis intéressé par cet article : ${name} - ${price}`;
  const whatsappLink = `https://wa.me/237694870584?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-primary-cyan transition-all duration-300 group">
      {/* Image Produit */}
      <div className="h-64 bg-neutral-800 relative overflow-hidden">
        <img 
          src={image || "/asshop5.JPG"} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-bold text-primary-cyan border border-primary-cyan/30">
          NEW
        </div>
      </div>

      {/* Détails */}
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{name || "Nom de la chaussure"}</h3>
        <p className="text-primary-cyan font-black text-xl mb-4">{price || "0 FCFA"}</p>
        
        {/* Actions */}
        <a 
          href={whatsappLink}
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-primary-cyan hover:bg-blue-600 text-white py-2.5 rounded-lg font-bold transition-colors"
        >
          <ShoppingCart size={18} />
          Commander
        </a>
      </div>
    </div>
  );
};

export default ProductCard;