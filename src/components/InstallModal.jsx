import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Smartphone, Share, PlusSquare, MoreVertical, Download } from 'lucide-react';

const InstallModal = ({ isOpen, onClose }) => {
  const [platform, setPlatform] = useState('android'); // Par défaut ou détecté

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[400] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md"
        >
          <motion.div 
            initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
            className="bg-neutral-900 border border-white/10 p-6 rounded-3xl max-w-md w-full relative text-white"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white">
              <X size={24} />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-[#00A3FF]/20 text-[#00A3FF] rounded-2xl mx-auto flex items-center justify-center mb-4">
                <Smartphone size={32} />
              </div>
              <h3 className="text-2xl font-black uppercase">Installer <span className="text-[#00A3FF]">SOFT SHOES</span></h3>
              <p className="text-white/60 text-sm mt-1">Ajoute l'application sur ton écran d'accueil pour y accéder en un clic.</p>
            </div>

            {/* Sélecteur de plateforme */}
            <div className="flex bg-neutral-800 p-1 rounded-xl mb-6">
              <button 
                onClick={() => setPlatform('android')}
                className={`flex-1 py-2 text-sm font-bold rounded-lg transition ${platform === 'android' ? 'bg-[#00A3FF] text-white' : 'text-white/50'}`}
              >
                Android (Chrome)
              </button>
              <button 
                onClick={() => setPlatform('ios')}
                className={`flex-1 py-2 text-sm font-bold rounded-lg transition ${platform === 'ios' ? 'bg-[#00A3FF] text-white' : 'text-white/50'}`}
              >
                iOS (Safari)
              </button>
            </div>

            {/* Étapes dynamiques selon la plateforme */}
            <div className="space-y-4 mb-6">
              {platform === 'android' ? (
                <>
                  <div className="flex items-start gap-3 bg-neutral-800/50 p-3 rounded-xl">
                    <span className="w-6 h-6 bg-[#00A3FF] rounded-full flex items-center justify-center font-bold text-xs shrink-0">1</span>
                    <p className="text-sm text-white/80">Ouvre le menu de ton navigateur en cliquant sur les trois points <MoreVertical size={16} className="inline mx-1 text-[#00A3FF]" /> en haut à droite.</p>
                  </div>
                  <div className="flex items-start gap-3 bg-neutral-800/50 p-3 rounded-xl">
                    <span className="w-6 h-6 bg-[#00A3FF] rounded-full flex items-center justify-center font-bold text-xs shrink-0">2</span>
                    <p className="text-sm text-white/80">Sélectionne l'option <strong className="text-white">"Ajouter à l'écran d'accueil"</strong> ou <strong className="text-white">"Installer l'application"</strong>.</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-start gap-3 bg-neutral-800/50 p-3 rounded-xl">
                    <span className="w-6 h-6 bg-[#00A3FF] rounded-full flex items-center justify-center font-bold text-xs shrink-0">1</span>
                    <p className="text-sm text-white/80">Appuie sur le bouton de partage <Share size={16} className="inline mx-1 text-[#00A3FF]" /> en bas de ton écran sur Safari.</p>
                  </div>
                  <div className="flex items-start gap-3 bg-neutral-800/50 p-3 rounded-xl">
                    <span className="w-6 h-6 bg-[#00A3FF] rounded-full flex items-center justify-center font-bold text-xs shrink-0">2</span>
                    <p className="text-sm text-white/80">Fais défiler et sélectionne <strong className="text-white">"Sur l'écran d'accueil"</strong> <PlusSquare size={16} className="inline mx-1 text-[#00A3FF]" />.</p>
                  </div>
                </>
              )}
            </div>

            <button onClick={onClose} className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-[#00A3FF] hover:text-white transition">
              J'ai compris
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InstallModal;