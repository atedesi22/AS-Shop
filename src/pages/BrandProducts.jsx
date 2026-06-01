import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const BrandProducts = () => {
  const { brandName } = useParams(); // Récupère le nom de la marque (ex: "Nike")

  // Filtre global sur toutes les catégories
  const filtered = products.filter(p => p.brand.toLowerCase() === brandName.toLowerCase());

  return (
    <div className="pt-24 px-6 pb-20">
      <h2 className="text-4xl font-black uppercase italic mb-10">
        Produits <span className="text-[#00A3FF]">{brandName}</span>
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
};

export default BrandProducts;