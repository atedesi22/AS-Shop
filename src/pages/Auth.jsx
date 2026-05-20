import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-dark-bg">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-neutral-900 p-8 rounded-3xl border border-white/10"
      >
        <h2 className="text-3xl font-black mb-8 text-center uppercase">
          {isLogin ? 'Connexion' : 'Créer un compte'}
        </h2>

        {/* Formulaire Standard */}
        <div className="flex flex-col gap-4">
          <input className="w-full p-4 bg-black rounded-xl border border-white/5 focus:border-primary-cyan outline-none transition" placeholder="Email" />
          <input className="w-full p-4 bg-black rounded-xl border border-white/5 focus:border-primary-cyan outline-none transition" type="password" placeholder="Mot de passe" />
          <button className="w-full py-4 bg-primary-cyan rounded-xl font-bold uppercase hover:bg-blue-600 transition">
            {isLogin ? 'Se connecter' : 'S\'inscrire'}
          </button>
        </div>

        <div className="my-8 flex items-center gap-4">
          <div className="h-px bg-white/10 flex-grow" />
          <span className="text-xs text-light-gray uppercase">Ou</span>
          <div className="h-px bg-white/10 flex-grow" />
        </div>

        {/* Intégration NovaVerse */}
        <button className="w-full py-4 border border-primary-cyan text-primary-cyan rounded-xl font-bold uppercase hover:bg-primary-cyan hover:text-white transition-all flex items-center justify-center gap-2">
           Se connecter avec <span className="font-black italic">NovaVerse</span>
        </button>

        <p className="mt-8 text-center text-sm text-light-gray">
          {isLogin ? 'Pas encore de compte ?' : 'Déjà un compte ?'}{' '}
          <button onClick={() => setIsLogin(!isLogin)} className="text-primary-cyan font-bold hover:underline">
            {isLogin ? 'S\'inscrire' : 'Se connecter'}
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default Auth;