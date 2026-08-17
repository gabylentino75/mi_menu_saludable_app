import React from 'react';
import { useApp } from '../../context/AppContext';
import { Menu, Moon, Sun, Carrot } from 'lucide-react';

export const Header = () => {
  const { darkMode, toggleDarkMode, setIsPantryModalOpen, setIsMenuOpen } = useApp();

  return (
    <header className="sticky top-0 z-30 bg-cream-100/95 dark:bg-mirtilo-800/95 backdrop-blur-md transition-colors">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="p-2 -ml-2 rounded-xl text-mirtilo-700 dark:text-cream-100 hover:bg-cream-200 dark:hover:bg-mirtilo-700 transition-colors"
          aria-label="Menú"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsPantryModalOpen(true)}
            className="p-2 rounded-xl text-mirtilo-700 dark:text-cream-100 hover:bg-cream-200 dark:hover:bg-mirtilo-700 transition-colors"
            title="Tengo estos ingredientes"
            aria-label="Despensa"
          >
            <Carrot className="w-5 h-5" />
          </button>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-xl text-mirtilo-700 dark:text-cream-100 hover:bg-cream-200 dark:hover:bg-mirtilo-700 transition-colors"
            title="Cambiar tema"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
  );
};
