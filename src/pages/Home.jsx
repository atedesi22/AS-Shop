import React from 'react';
import Navbar from '../components/Navbar';
// import ProductCard from '../components/ProductCard'; // Nous le créerons ensuite

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <Navbar />

      {/* Section Hero */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          LE STYLE, <span className="text-[#00A3FF]">À CHAQUE PAS</span>
        </h1>
        <p className="text-[#E0E0E0] text-lg mb-8 max-w-2xl mx-auto">
          Découvrez notre sélection exclusive de sneakers et vêtements urbains. 
          Qualité premium, expédition internationale.
        </p>
        <button className="bg-[#00A3FF] hover:bg-blue-600 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105">
          Découvrir la collection
        </button>
      </header>

      {/* Grille de produits */}
      <main className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-[#00A3FF] pl-4">
          Nouveautés
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Exemple d'appel de carte produit */}
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </div>
      </main>
      
      {/* Footer minimaliste */}
      <footer className="border-t border-[#00A3FF]/10 py-8 text-center text-[#E0E0E0] text-sm">
        <p>© 2026 AS SHOP - Tous droits réservés</p>
      </footer>
    </div>
  );
};

export default Home;