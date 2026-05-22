import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import { ShoppingCart, Heart, ArrowLeft } from 'lucide-react';

const ProductDetail = () => {
  const { name } = useParams(); // Récupère le nom depuis l'URL
  const navigate = useNavigate();
  const { addToCart, toggleFavorite, favorites } = useContext(GlobalContext);

  // Simulation de galerie d'images (à remplacer par tes vraies données plus tard)
  const [mainImage, setMainImage] = useState("https://picsum.photos/800/800");
  const gallery = [
    "https://picsum.photos/800/800",
    "https://picsum.photos/400/400",
    "https://picsum.photos/500/500"
  ];

  const product = { name, price: "15 000 FCFA", description: "Design moderne et confortable..." };

  return (
    <div className="pt-24 px-6 pb-20 max-w-4xl mx-auto min-h-screen">

      
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-white/50 mb-6 hover:text-white">
        <ArrowLeft size={20} /> Retour
      </button>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Colonne Gauche : Galerie */}
        <div>
          <img src={mainImage} alt={name} className="w-full h-96 object-cover rounded-3xl mb-4" />
          <div className="flex gap-4">
            {gallery.map((img, i) => (
              <img 
                key={i} src={img} onClick={() => setMainImage(img)}
                className={`w-20 h-20 object-cover rounded-xl cursor-pointer border-2 ${mainImage === img ? 'border-[#00A3FF]' : 'border-transparent'}`}
              />
            ))}
          </div>
        </div>

        {/* Colonne Droite : Infos & Actions */}
        <div>
          <h1 className="text-4xl font-black uppercase mb-4">{name}</h1>
          <p className="text-2xl text-[#00A3FF] font-bold mb-6">{product.price}</p>
          <p className="text-white/70 mb-8 leading-relaxed">{product.description}</p>
          
          <div className="flex gap-4">
            <button 
              onClick={() => addToCart({ ...product, image: mainImage })}
              className="flex-grow py-4 bg-white text-black font-black rounded-xl hover:bg-[#00A3FF] transition"
            >
              <ShoppingCart className="inline mr-2" /> Ajouter
            </button>
            <button 
              onClick={() => toggleFavorite({ ...product, image: mainImage })}
              className="p-4 border border-white/10 rounded-xl hover:bg-red-500/10"
            >
              <Heart size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;