import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';

// Import des pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import Auth from './pages/Auth';
import ProductDetail from './pages/ProductDetail';

// Import des composants UI
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-[#00A3FF] selection:text-black">
          
          {/* Top Bar Promotionnelle NovaVerse */}
          <div className="bg-[#00A3FF] text-[10px] text-center py-1 font-black tracking-[0.2em] uppercase cursor-pointer hover:bg-white transition-colors">
            Expérience NovaVerse activée - Connectez-vous pour synchroniser vos données
          </div>

          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/product/:name" element={<ProductDetail />} />
          </Routes>

          {/* Navigation Mobile en bas */}
          <BottomNav />
          
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;