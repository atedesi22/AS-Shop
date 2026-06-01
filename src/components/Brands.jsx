import React from 'react';
import { useNavigate } from 'react-router-dom';

const Brands = () => {
  const navigate = useNavigate();
  // Liste unique des marques extraite de tes produits
  const brands = ["Nike", "Adidas", "Puma", "Jordan"]; 

  return (
    <div className="pt-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-black uppercase italic mb-10">Nos <span className="text-[#00A3FF]">Marques</span></h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {brands.map((brand) => (
          <div 
            key={brand}
            onClick={() => navigate(`/brand/${brand}`)} // Navigation dynamique
            className="h-32 bg-neutral-900 rounded-2xl flex items-center justify-center border border-white/5 hover:border-[#00A3FF] transition cursor-pointer"
          >
            <span className="text-xl font-black uppercase">{brand}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Brands;