import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ta charte graphique extraite du logo
        'primary-cyan': '#00A3FF',
        'dark-bg': '#0D0D0D',
        'light-gray': '#E0E0E0',
      },
      fontFamily: {
        // Montserrat pour un look moderne et urbain
        'sans': ['Montserrat', 'sans-serif'],
      },
    },
  },
   plugins: [react(),
     tailwindcss()
  ],
}