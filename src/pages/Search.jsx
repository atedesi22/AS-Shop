import React, { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const SearchPage = () => {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query) return [];
    return products.filter(p => 
      p.name.toLowerCase().includes(query.toLowerCase()) || 
      p.category.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="pt-24 px-6 pb-32 max-w-3xl mx-auto min-h-screen">
      {/* Barre de recherche Pinterest Style */}
      <div className="relative mb-8">
        <div className="flex items-center bg-neutral-900 border border-white/10 rounded-full py-4 px-6 focus-within:border-[#00A3FF] transition-all shadow-xl">
          <Search className="text-white/40 mr-4" size={24} />
          <input 
            type="text"
            placeholder="Rechercher des pièces..."
            className="w-full bg-transparent outline-none text-lg font-medium placeholder:text-white/30"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && <X className="text-white/50 cursor-pointer" onClick={() => setQuery("")} />}
        </div>
      </div>

      {/* Résultats ou "Recherches populaires" */}
      {query ? (
        <div className="grid grid-cols-2 gap-4">
          {results.map((p) => (<ProductCard key={p.id} product={p} />))}
          {results.length === 0 && <p className="text-white/30 col-span-2 text-center mt-10">Aucun résultat pour "{query}"</p>}
        </div>
      ) : (
        <div className="mt-10">
          <h3 className="text-white/50 font-bold mb-6">Recherches populaires</h3>
          <div className="flex flex-wrap gap-3">
            {['Jordan 4', 'Vintage', 'Sneakers', 'Hoodie'].map((tag) => (
              <button 
                key={tag} 
                onClick={() => setQuery(tag)}
                className="bg-neutral-900 hover:bg-neutral-800 px-6 py-3 rounded-full font-bold transition"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;