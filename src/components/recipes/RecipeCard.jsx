import React from 'react';
import { Clock, Heart } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { RecipeImage } from './RecipeImage';

export const RecipeCard = ({ recipe, onSelect, compact = false }) => {
  const { favorites, toggleFavorite } = useApp();
  const isFav = favorites.includes(recipe.id);

  if (compact) {
    return (
      <div
        onClick={() => onSelect && onSelect(recipe)}
        className="bg-white dark:bg-mirtilo-700/80 rounded-2xl p-3 shadow-sm cursor-pointer flex flex-col gap-2"
      >
        <RecipeImage recipe={recipe} className="h-20 w-full rounded-xl" emojiClassName="text-3xl" />
        <p className="text-sm font-bold leading-snug text-mirtilo-800 dark:text-cream-100 line-clamp-2">
          {recipe.nombre}
        </p>
        <p className="text-xs text-mirtilo-500 dark:text-cream-300 flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" /> {recipe.total_min} min
        </p>
      </div>
    );
  }

  return (
    <div
      onClick={() => onSelect && onSelect(recipe)}
      className="bg-white dark:bg-mirtilo-700/80 rounded-2xl p-4 shadow-sm cursor-pointer flex items-center gap-3"
    >
      <RecipeImage recipe={recipe} className="h-16 w-16 shrink-0 rounded-xl" emojiClassName="text-2xl" />

      <div className="min-w-0 flex-1">
        <h3 className="font-bold text-mirtilo-800 dark:text-cream-100 text-sm leading-snug truncate">
          {recipe.nombre}
        </h3>
        <p className="text-xs text-mirtilo-500 dark:text-cream-300 mt-0.5 flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" /> {recipe.total_min} min · {recipe.dificultad}
        </p>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(recipe.id);
        }}
        className="p-1.5 shrink-0"
        aria-label="Favorito"
      >
        <Heart className={`w-5 h-5 ${isFav ? 'fill-coral-500 text-coral-500' : 'text-mirtilo-300 dark:text-cream-400'}`} />
      </button>
    </div>
  );
};
