import { useState } from "react";

const Shop = () => {
  const [search, setSearch] = useState("");
  // Filtre tes produits via `products.filter(p => p.name.includes(search))`
  return (
    <div className="pt-24 px-6">
      <input 
        className="w-full p-4 bg-neutral-900 text-white rounded-xl mb-8"
        placeholder="Rechercher une paire..."
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* Grille de ProductCard ici */}
    </div>
  );
};

export default Shop;