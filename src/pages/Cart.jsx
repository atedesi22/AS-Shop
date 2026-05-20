import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Trash2, ShoppingCart, MessageCircle } from 'lucide-react';

const Cart = () => {
  const { cart, removeFromCart } = useContext(GlobalContext);

  // Calcul du total
  const total = cart.reduce((acc, item) => acc + parseInt(item.price.replace(/\D/g, '')), 0);

  // Génération du message WhatsApp
  const generateWhatsAppMessage = () => {
    const productList = cart.map(item => `- ${item.name} (${item.price})`).join('\n');
    const message = `Bonjour AS SHOP, je souhaite commander les articles suivants :\n\n${productList}\n\nTotal : ${total.toLocaleString()} FCFA`;
    return `https://wa.me/237694870584?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="pt-24 px-6 pb-32 max-w-2xl mx-auto min-h-screen">
      <h2 className="text-4xl font-black uppercase italic mb-10">Mon <span className="text-primary-cyan">Panier</span></h2>
      
      {cart.length === 0 ? (
        <p className="text-light-gray text-center mt-20">Votre panier est vide.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center bg-neutral-900 p-4 rounded-xl border border-white/5">
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-primary-cyan font-bold">{item.price}</p>
              </div>
              <button onClick={() => removeFromCart(index)} className="text-red-500 hover:text-red-400">
                <Trash2 size={20} />
              </button>
            </div>
          ))}

          <div className="mt-8 border-t border-white/10 pt-6">
            <div className="flex justify-between text-2xl font-black mb-8">
              <span>Total</span>
              <span className="text-primary-cyan">{total.toLocaleString()} FCFA</span>
            </div>
            
            <a 
              href={generateWhatsAppMessage()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] py-4 rounded-xl font-bold uppercase tracking-widest transition-all"
            >
              <MessageCircle /> Commander sur WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;