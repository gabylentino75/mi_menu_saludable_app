import React from 'react';
import { useApp } from '../../context/AppContext';
import { ChevronRight } from 'lucide-react';
import { EXTENDED_RECIPES } from '../../data/recipesData';
import { RecipeCard } from '../recipes/RecipeCard';
import { VarietyWidget } from './VarietyWidget';

export const HomeView = ({ onSelectRecipe }) => {
  const { user, setActiveTab, setIsLunchboxModalOpen } = useApp();

  // Ideas rápidas (< 20 minutos)
  const quickIdeas = EXTENDED_RECIPES.filter(r => r.total_min <= 15).slice(0, 6);

  const categories = [
    { id: 'Desayuno/Merienda', label: 'Desayunos y meriendas', image: '/images/categories/desayuno.jpg', bg: 'bg-peach-300' },
    { id: 'Almuerzo/Cena', label: 'Almuerzos y cenas', image: '/images/categories/almuerzo.jpg', bg: 'bg-coral-300' },
    { id: 'Viandas', label: 'Viandas escolares', image: '/images/categories/viandas.jpg', bg: 'bg-pinkAccent-200' },
  ];

  const handleCategoryClick = (cat) => {
    if (cat.id === 'Viandas') {
      setIsLunchboxModalOpen(true);
    } else {
      setActiveTab('recipes');
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">

      {/* Greeting */}
      <div>
        <h2 className="text-xl font-bold text-mirtilo-800 dark:text-cream-100">
          Hola, {user.nombre.split(' ')[0]} 👋
        </h2>
        <p className="text-sm text-mirtilo-500 dark:text-cream-300">
          ¿Qué te gustaría preparar hoy?
        </p>
      </div>

      {/* Category Shortcuts — stacked, solid color, matching mockup */}
      <div className="space-y-3">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryClick(cat)}
            className={`w-full flex items-center justify-between gap-3 rounded-2xl p-4 text-left shadow-sm transition-transform active:scale-[0.99] ${cat.bg}`}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/60 overflow-hidden">
                <img src={cat.image} alt={cat.label} className="h-full w-full object-cover" />
              </span>
              <span className="font-bold text-sm text-mirtilo-800">
                {cat.label}
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-mirtilo-700/60" />
          </button>
        ))}
      </div>

      {/* Variety Progress Meter */}
      <VarietyWidget />

      {/* "Para Hoy" - Quick Ideas (< 15 min), horizontal scroll like the mockup */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-base text-mirtilo-800 dark:text-cream-100">
              Para hoy
            </h3>
            <p className="text-xs text-mirtilo-500 dark:text-cream-300">
              Ideas rápidas para vos
            </p>
          </div>
          <button
            onClick={() => setActiveTab('recipes')}
            className="text-xs font-bold text-coral-500 flex items-center gap-0.5"
          >
            Ver todas <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1 -mx-4 px-4">
          {quickIdeas.map((recipe) => (
            <div key={recipe.id} className="w-40 shrink-0">
              <RecipeCard recipe={recipe} onSelect={onSelectRecipe} compact />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
