import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Trash2, ShoppingCart, MessageCircle, Minus, Plus } from 'lucide-react';

const Cart = () => {
 const { cart, removeFromCart, updateQuantity } = useContext(GlobalContext);

  const total = cart.reduce((acc, item) => {
    const price = parseInt(item.price.replace(/\D/g, ''));
    return acc + (price * item.quantity);
  }, 0);


  // Génération du message WhatsApp
  const generateWhatsAppMessage = () => {
    const productList = cart.map(item => `- ${item.name} (${item.price})`).join('\n');
    const message = `Bonjour AS SHOP, je souhaite commander les articles suivants :\n\n${productList}\n\nTotal : ${total.toLocaleString()} FCFA`;
    return `https://wa.me/237694870584?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="pt-24 px-6 pb-32 max-w-2xl mx-auto min-h-screen">

      
      <h2 className="text-4xl font-black uppercase italic mb-10">Mon <span className="text-[#00A3FF]">Panier</span></h2>
      
      {cart.map((item, index) => (
        <div key={index} className="flex items-center bg-neutral-900 p-4 rounded-xl border border-white/5 mb-4">
          {/* Prévisualisation image */}
          <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg mr-4 border border-white/10" />
          
          <div className="flex-grow">
            <h3 className="font-bold">{item.name}</h3>
            <p className="text-[#00A3FF] font-bold">{item.price}</p>
            
            {/* Contrôle de Quantité */}
            <div className="flex items-center gap-3 mt-2">
              <button onClick={() => updateQuantity(index, -1)} className="p-1 bg-neutral-800 rounded"><Minus size={14} /></button>
              <span className="font-bold w-6 text-center">{item.quantity}</span>
              <button onClick={(e) => {
    e.stopPropagation(); // Empêche la propagation de l'événement
    updateQuantity(index, 1);
  }} className="p-1 bg-neutral-800 rounded"><Plus size={14} /></button>
            </div>
          </div>

          <button onClick={() => removeFromCart(index)} className="text-red-500 hover:text-red-400">
            <Trash2 size={20} />
          </button>
        </div>
      ))}

      {/* Total et WhatsApp */}
      {cart.length > 0 && (
        <div className="mt-8 border-t border-white/10 pt-8">
          <div className="flex justify-between text-2xl font-black mb-6">
            <span>Total</span>
            <span className="text-[#00A3FF]">{total.toLocaleString()} FCFA</span>
          </div>
          <a href="#" className="w-full flex items-center justify-center gap-3 bg-[#25D366] py-4 rounded-xl font-black uppercase">
            <MessageCircle /> Commander ({cart.reduce((a, b) => a + b.quantity, 0)} articles)
          </a>
        </div>
      )}
    </div>
  );
};

export default Cart;