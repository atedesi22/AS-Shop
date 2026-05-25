import React, { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("Tous");

  // 1. Mélange initial une seule fois au chargement
  const shuffledProducts = useMemo(() => {
    return [...products].sort(() => 0.5 - Math.random());
  }, []);

  // 2. Filtre la liste déjà mélangée
  const filteredProducts = useMemo(() => {
    return shuffledProducts.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = category === "Tous" || p.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, category, shuffledProducts]);

  return (
    <div className="pt-24 px-6 pb-32 max-w-7xl mx-auto min-h-screen">

      
      
      {/* Header Boutique */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <h2 className="text-5xl font-black uppercase italic">La <span className="text-[#00A3FF]">Boutique</span></h2>
        
        {/* Barre de recherche */}
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
          <input 
            type="text"
            placeholder="Rechercher une pièce..."
            className="w-full bg-neutral-900 border border-white/10 py-4 pl-12 pr-4 rounded-xl focus:border-[#00A3FF] outline-none transition"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Filtres Catégories */}
      <div className="flex gap-4 mb-12 overflow-x-auto pb-2">
        {['Tous', 'Sneakers', 'Pulls', 'Chemises', 'Outfits', 'T-shirts'].map((cat) => (
          <button 
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-6 py-2 rounded-full font-bold uppercase text-sm border transition-all ${category === cat ? 'bg-[#00A3FF] border-[#00A3FF]' : 'bg-neutral-900 border-white/10 hover:border-white'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grille Produits */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} name={p.name} price={p.price} image={p.image} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-[#E0E0E0]">
          <p>Aucun produit trouvé pour "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
};

export default Shop;

