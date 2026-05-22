import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Trash2, ShoppingCart } from 'lucide-react';

const Favorites = () => {
  const { favorites, removeFromFavorites, addToCart } = useContext(GlobalContext);

  return (
    <div className="pt-24 px-6 pb-32 max-w-4xl mx-auto min-h-screen">

      
      <h2 className="text-4xl font-black uppercase italic mb-10">Vos <span className="text-[#00A3FF]">Favoris</span></h2>
      
      {favorites.length === 0 ? (
        <p className="text-[#E0E0E0] text-center mt-20">Aucun favori pour le moment.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {favorites.map((item, index) => (
            <div key={index} className="bg-neutral-900 p-4 rounded-xl border border-white/5 flex items-center gap-4">
              <div className="w-20 h-20 bg-neutral-800 rounded-lg overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-[#00A3FF] font-bold">{item.price}</p>
              </div>
              <div className="flex flex-col gap-2">
                <button onClick={() => addToCart(item)} className="p-2 bg-[#00A3FF] rounded-lg">
                  <ShoppingCart size={18} />
                </button>
                <button onClick={() => removeFromFavorites(index)} className="p-2 bg-red-900/30 text-red-500 rounded-lg">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;