import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/products'; // Import des données

const Collections = () => {
  const navigate = useNavigate();

  // On utilise les données réelles au lieu de données en dur
  // Ici, on prend les 4 premiers produits pour illustrer les "Vibes"
  const featuredVibes = products.slice(0, 4);

  return (
    <div className="pt-24 px-6 pb-32 max-w-7xl mx-auto min-h-screen">
      
      {/* 1. LE DROP DU MOMENT */}
      <section className="mb-20">
        <div className="relative w-full h-[60vh] rounded-3xl overflow-hidden group">
          <img src="/asshop13.JPG" alt="Drop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-10">
            <span className="text-[#00A3FF] font-black uppercase tracking-widest mb-2">Nouveau Drop</span>
            <h1 className="text-6xl font-black italic uppercase mb-4">Collection Zenith</h1>
            <button 
              onClick={() => navigate('/shop')} 
              className="w-fit bg-white text-black px-8 py-3 rounded-full font-black uppercase hover:bg-[#00A3FF] hover:text-white transition"
            >
              Découvrir
            </button>
          </div>
        </div>
      </section>
      {/* 1. LE DROP DU MOMENT (Vidéo en boucle) */}
        {/* <section className="mb-20">
        <div className="relative w-full h-[60vh] rounded-3xl overflow-hidden group"> */}
            {/* Balise vidéo remplaçant la balise img */}
            {/* <video 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            autoPlay 
            muted 
            loop 
            playsInline
            >
            <source src="/assshop.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
            </video> */}

            {/* Overlay qui reste par-dessus la vidéo */}
            {/* <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-10">
            <span className="text-[#00A3FF] font-black uppercase tracking-widest mb-2">Nouveau Drop</span>
            <h1 className="text-6xl font-black italic uppercase mb-4">Collection Zenith</h1>
            <button className="w-fit bg-white text-black px-8 py-3 rounded-full font-black uppercase hover:bg-[#00A3FF] hover:text-white transition">
                Découvrir
            </button>
            </div>
        </div>
        </section> */}

      {/* 2. SHOP THE LOOK (Connecté aux produits) */}
      <section className="mb-20">
        <h2 className="text-4xl font-black uppercase italic mb-10">Shop <span className="text-[#00A3FF]">the Look</span></h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {featuredVibes.map((p) => (
            <div 
              key={p.id} 
              onClick={() => navigate(`/product/${p.id}`)}
              className="aspect-[3/4] bg-neutral-900 rounded-2xl overflow-hidden relative cursor-pointer hover:opacity-80 transition"
            >
              <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur text-xs px-3 py-1 rounded-full border border-white/10">Voir l'article</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PAR VIBE (Navigation Émotionnelle) */}
      <section>
        <h2 className="text-4xl font-black uppercase italic mb-10">Naviguer par <span className="text-[#00A3FF]">Vibe</span></h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredVibes.map((p) => (
            <div 
              key={p.id} 
              onClick={() => navigate(`/product/${p.id}`)}
              className="relative group cursor-pointer overflow-hidden rounded-3xl h-80"
            >
              <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-3xl font-black italic uppercase">{p.name}</h3>
                <p className="text-white/70 flex items-center gap-2">
                  Voir la proximité <ArrowRight size={16} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Collections;