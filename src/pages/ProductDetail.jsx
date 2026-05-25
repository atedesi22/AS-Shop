// import React, { useState, useContext } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { GlobalContext } from '../context/GlobalContext';
// import { ShoppingCart, Heart, ArrowLeft, X, MessageCircle } from 'lucide-react';
// import { AnimatePresence, motion } from 'framer-motion';

// const ProductDetail = ({ price, image}) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const { name } = useParams(); // Récupère le nom depuis l'URL
//   const navigate = useNavigate();
//   const { addToCart, toggleFavorite, favorites } = useContext(GlobalContext);

//   // Simulation de galerie d'images (à remplacer par tes vraies données plus tard)
//   const [mainImage, setMainImage] = useState("https://picsum.photos/800/800");
//   const gallery = [
//     "https://picsum.photos/800/800",
//     "https://picsum.photos/400/400",
//     "https://picsum.photos/500/500"
//   ];

//   const BASE_URL = "https://as-shop-seven.vercel.app"; // Remplace par ton vrai domaine

// const whatsappLink = `https://wa.me/237694870584?text=${encodeURIComponent(
//   `📦 *COMMANDE AS SHOP*\n\n` +
//   `Article : ${name}\n` +
//   `Prix : ${price}\n\n` +
//   `--------------------------\n` +
//   `Lien produit : ${BASE_URL}${image}` // WhatsApp détectera ce lien et créera l'aperçu
// )}`;

//   const product = { name, price: "15 000 FCFA", description: "Design moderne et confortable..." };

//   return (
//     <div className="pt-24 px-6 pb-20 max-w-4xl mx-auto min-h-screen">

      
//       <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-white/50 mb-6 hover:text-white">
//         <ArrowLeft size={20} /> Retour
//       </button>

//       <div className="grid md:grid-cols-2 gap-10">
//         {/* Colonne Gauche : Galerie */}
//         <div>
//           <img src={mainImage} alt={name} className="w-full h-96 object-cover rounded-3xl mb-4" />
//           <div className="flex gap-4">
//             {gallery.map((img, i) => (
//               <img 
//                 key={i} src={img} onClick={() => setMainImage(img)}
//                 className={`w-20 h-20 object-cover rounded-xl cursor-pointer border-2 ${mainImage === img ? 'border-[#00A3FF]' : 'border-transparent'}`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Colonne Droite : Infos & Actions */}
//         <div>
//           <h1 className="text-4xl font-black uppercase mb-4">{name}</h1>
//           <p className="text-2xl text-[#00A3FF] font-bold mb-6">{product.price}</p>
//           <p className="text-white/70 mb-8 leading-relaxed">{product.description}</p>
          
//           <div className="flex gap-4">
//             <button 
//               onClick={() => addToCart({ ...product, image: mainImage })}
//               className="flex-grow py-4 bg-white text-black font-black rounded-xl hover:bg-[#00A3FF] transition"
//             >
//               <ShoppingCart className="inline mr-2" /> Ajouter
//             </button>
//             <button 
//               onClick={() => toggleFavorite({ ...product, image: mainImage })}
//               className="p-4 border border-white/10 rounded-xl hover:bg-red-500/10"
//             >
//               <Heart size={24} />
//             </button>

            
//           </div>
// <button 
//           onClick={() => setIsModalOpen(true)}
//           className="w-full py-3 bg-[#00A3FF] text-white font-bold rounded-lg hover:bg-[#00A3FF] hover:text-white transition"
//         >
//            Commander
//         </button>

//         </div>
//       </div>

//       {/* Modal de Prévisualisation */}
//       <AnimatePresence>
//         {isModalOpen && (
//           <motion.div 
//             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[300] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
//           >
//             <motion.div 
//               initial={{ scale: 0.9 }} animate={{ scale: 1 }}
//               className="bg-neutral-900 p-6 rounded-3xl max-w-sm w-full relative border border-white/10"
//             >
//               <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-white/50 hover:text-white"><X /></button>
              
//               <img src={image} alt={name} className="w-full h-80 object-cover rounded-2xl mb-6" />
//               <h3 className="text-2xl font-black uppercase mb-2">{name}</h3>
//               <p className="text-[#00A3FF] font-bold text-xl mb-6">{price}</p>
              
//               <a href={whatsappLink} target="_blank" className="w-full flex items-center justify-center gap-2 bg-[#25D366] py-4 rounded-xl font-bold">
//                 <MessageCircle size={20} /> Valider sur WhatsApp
//               </a>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default ProductDetail;



// import React, { useState, useContext } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { GlobalContext } from '../context/GlobalContext';
// import { products } from '../data/products'; // Import centralisé
// import { ShoppingCart, Heart, ArrowLeft, X, MessageCircle } from 'lucide-react';
// import { AnimatePresence, motion } from 'framer-motion';

// const ProductDetail = () => {
//   const { id } = useParams(); // On récupère l'ID
//   const navigate = useNavigate();
//   const { addToCart, toggleFavorite, favorites } = useContext(GlobalContext);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Recherche du produit par ID
//   const product = products.find(p => p.id === parseInt(id));
  
//   // États locaux basés sur le produit trouvé
//   const [mainImage, setMainImage] = useState(product?.image);

//   if (!product) return <div className="pt-24 text-center">Produit introuvable</div>;

//   const BASE_URL = "https://as-shop-seven.vercel.app";
//   const whatsappLink = `https://wa.me/237694870584?text=${encodeURIComponent(
//     `📦 *COMMANDE AS SHOP*\n\n` +
//     `Article : ${product.name}\n` +
//     `Prix : ${product.price}\n\n` +
//     `Lien : ${BASE_URL}/product/${product.id}`
//   )}`;

//   return (
//     <div className="pt-24 px-6 pb-20 max-w-5xl mx-auto min-h-screen">
//       <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-white/50 mb-6 hover:text-white">
//         <ArrowLeft size={20} /> Retour
//       </button>

//       <div className="grid md:grid-cols-2 gap-12">
//         {/* Colonne Gauche : Galerie */}
//         <div>
//           <img src={mainImage} alt={product.name} className="w-full h-[500px] object-cover rounded-3xl mb-4" />
//           <div className="flex gap-4">
//             {product.gallery.map((img, i) => (
//               <img 
//                 key={i} src={img} onClick={() => setMainImage(img)}
//                 className={`w-20 h-20 object-cover rounded-xl cursor-pointer border-2 transition ${mainImage === img ? 'border-[#00A3FF]' : 'border-transparent'}`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Colonne Droite : Infos */}
//         <div className="flex flex-col">
//           <h1 className="text-5xl font-black uppercase mb-4">{product.name}</h1>
//           <p className="text-3xl text-[#00A3FF] font-bold mb-6">{product.price}</p>
//           <p className="text-white/70 mb-8 leading-relaxed text-lg">{product.description}</p>
          
//           <div className="flex gap-4 mb-6">
//             <button 
//               onClick={() => addToCart(product)}
//               className="flex-grow py-4 bg-white text-black font-black rounded-xl hover:bg-neutral-200 transition"
//             >
//               <ShoppingCart className="inline mr-2" /> Ajouter
//             </button>
//             <button 
//               onClick={() => toggleFavorite(product)}
//               className="p-4 border border-white/10 rounded-xl hover:bg-red-500/10"
//             >
//               <Heart size={24} />
//             </button>
//           </div>

//           <button 
//             onClick={() => setIsModalOpen(true)}
//             className="w-full py-4 bg-[#00A3FF] text-white font-black uppercase tracking-wider rounded-xl hover:bg-[#008bd9] transition"
//           >
//             Commander sur WhatsApp
//           </button>
//         </div>
//       </div>

//       {/* Modal de Commande */}
//       <AnimatePresence>
//         {isModalOpen && (
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[300] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
//           >
//             <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }}
//               className="bg-neutral-900 p-8 rounded-3xl max-w-sm w-full relative border border-white/10"
//             >
//               <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-white/50"><X /></button>
              
//               <img src={mainImage} alt={product.name} className="w-full h-64 object-cover rounded-2xl mb-6" />
//               <h3 className="text-2xl font-black uppercase mb-2">{product.name}</h3>
//               <p className="text-[#00A3FF] font-bold text-xl mb-6">{product.price}</p>
              
//               <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-[#25D366] py-4 rounded-xl font-bold">
//                 <MessageCircle size={20} /> Valider la commande
//               </a>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default ProductDetail;


import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import { products } from '../data/products'; // Import direct de tes données
import { ShoppingCart, Heart, ArrowLeft, X, MessageCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const ProductDetail = () => {
  const { id } = useParams(); // On récupère l'ID depuis l'URL
  const navigate = useNavigate();
  const { addToCart, toggleFavorite } = useContext(GlobalContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { name } = useParams();
// const product = products.find((p) => p.id === id); // Cherche par nom


  // Recherche du produit exact dans ton fichier data
  const product = products.find((p) => p.id === parseInt(id));

  // Si le produit n'existe pas
  if (!product) {
    return <div className="pt-24 text-center text-white">Produit introuvable.</div>;
  }

  // Initialisation des états avec les données réelles du produit
  const [mainImage, setMainImage] = useState(product.image);

  const BASE_URL = "https://as-shop-seven.vercel.app";

  const whatsappLink = `https://wa.me/237694870584?text=${encodeURIComponent(
    `📦 *COMMANDE AS SHOP*\n\n` +
    `Article : ${product.name}\n` +
    `Prix : ${product.price}\n` +
    `Image : ${BASE_URL}${mainImage}\n\n` + // Ajout de l'image ici
    `Lien : ${BASE_URL}/product/${product.id}`
  )}`;

  return (
    <div className="pt-24 px-6 pb-20 max-w-4xl mx-auto min-h-screen">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-white/50 mb-6 hover:text-white">
        <ArrowLeft size={20} /> Retour
      </button>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Galerie */}
        <div>
          <img src={mainImage} alt={product.name} className="w-full h-96 object-cover rounded-3xl mb-4" />
          <div className="flex gap-4">
            {product.gallery.map((img, i) => (
              <img 
                key={i} src={img} onClick={() => setMainImage(img)}
                className={`w-20 h-20 object-cover rounded-xl cursor-pointer border-2 ${mainImage === img ? 'border-[#00A3FF]' : 'border-transparent'}`}
              />
            ))}
          </div>
        </div>

        {/* Infos */}
        <div>
          <h1 className="text-4xl font-black uppercase mb-4">{product.name}</h1>
          <p className="text-2xl text-[#00A3FF] font-bold mb-6">{product.price}</p>
          <p className="text-white/70 mb-8 leading-relaxed">{product.description}</p>
          
          <div className="flex gap-4 mb-4">
            <button onClick={() => addToCart(product)} className="flex-grow py-4 bg-white text-black font-black rounded-xl hover:bg-[#00A3FF] transition">
              <ShoppingCart className="inline mr-2" /> Ajouter
            </button>
            <button onClick={() => toggleFavorite(product)} className="p-4 border border-white/10 rounded-xl hover:bg-red-500/10">
              <Heart size={24} />
            </button>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="w-full py-3 bg-[#00A3FF] text-white font-bold rounded-lg hover:bg-[#008bd9] transition">
            Commander
          </button>
        </div>
      </div>

      {/* Modal WhatsApp */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
          >
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }}
              className="bg-neutral-900 p-6 rounded-3xl max-w-sm w-full relative border border-white/10"
            >
              <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-white/50"><X /></button>
              <img src={mainImage} alt={product.name} className="w-full h-64 object-cover rounded-2xl mb-6" />
              <h3 className="text-2xl font-black uppercase mb-2">{product.name}</h3>
              <p className="text-[#00A3FF] font-bold text-xl mb-6">{product.price}</p>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 bg-[#25D366] py-4 rounded-xl font-bold">
                <MessageCircle size={20} /> Valider sur WhatsApp
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductDetail;