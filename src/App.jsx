import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

// Si tu crées une page de connexion, tu l'importerais ici
// import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="bg-[#0D0D0D] min-h-screen text-white font-sans">
        
        {/* Barre de navigation globale ou section NovaVerse flottante */}
        <div className="bg-[#00A3FF] text-xs text-center py-1 font-bold tracking-widest uppercase">
           Connectez-vous avec <span className="underline cursor-pointer">NovaVerse</span> pour une expérience optimisée
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          {/* Tu pourras ajouter tes autres routes ici : 
              <Route path="/shop" element={<Shop />} /> 
              <Route path="/login" element={<Login />} /> 
          */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;