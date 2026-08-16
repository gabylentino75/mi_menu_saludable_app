import React, { useState, useMemo } from 'react';
import { Search, X, ChevronRight, Carrot } from 'lucide-react';
import { EXTENDED_RECIPES } from '../../data/recipesData';
import { RecipeCard } from './RecipeCard';
import { useApp } from '../../context/AppContext';

const CATEGORY_CARDS = [
  { id: 'Desayuno/Merienda', label: 'Desayunos y meriendas', image: `${import.meta.env.BASE_URL}images/categories/desayuno.jpg`, bg: 'bg-peach-300' },
  { id: 'Almuerzo/Cena', label: 'Almuerzos y cenas', image: `${import.meta.env.BASE_URL}images/categories/almuerzo.jpg`, bg: 'bg-coral-300' },
  { id: 'Viandas', label: 'Viandas escolares', image: `${import.meta.env.BASE_URL}images/categories/viandas.jpg`, bg: 'bg-pinkAccent-200', wide: true },
];

export const RecipesView = ({ onSelectRecipe }) => {
  const { setIsLunchboxModalOpen, setIsPantryModalOpen } = useApp();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [selectedTime, setSelectedTime] = useState(null); // 10, 15, 20, 30, 31 (for +30)
  const [selectedTags, setSelectedTags] = useState([]);

  const timeOptions = [
    { label: '10 min', value: 10 },
    { label: '15 min', value: 15 },
    { label: '20 min', value: 20 },
    { label: '30 min', value: 30 },
    { label: '+30 min', value: 31 },
  ];
  const tagOptions = ['Sin cocción', 'Con frutas', 'Rápida', 'Poco tiempo', 'Vegetariana', 'Sin Gluten', 'Vegano'];

  const toggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const filteredRecipes = useMemo(() => {
    return EXTENDED_RECIPES.filter(recipe => {
      // 1. Search Query
      if (search.trim()) {
        const q = search.toLowerCase();
        const matchTitle = recipe.nombre.toLowerCase().includes(q);
        const matchDesc = recipe.descripcion.toLowerCase().includes(q);
        const matchIng = recipe.ingredientes.some(i => i.nombre.toLowerCase().includes(q));
        if (!matchTitle && !matchDesc && !matchIng) return false;
      }

      // 2. Category
      if (selectedCategory !== 'Todas' && recipe.categoria !== selectedCategory) {
        return false;
      }

      // 3. Time Filter
      if (selectedTime) {
        if (selectedTime === 31) {
          if (recipe.total_min <= 30) return false;
        } else {
          if (recipe.total_min > selectedTime) return false;
        }
      }

      // 4. Tags Filter
      if (selectedTags.length > 0) {
        const hasAllTags = selectedTags.every(tag => recipe.etiquetas.includes(tag));
        if (!hasAllTags) return false;
      }

      return true;
    });
  }, [search, selectedCategory, selectedTime, selectedTags]);

  const resetFilters = () => {
    setSearch('');
    setSelectedCategory('Todas');
    setSelectedTime(null);
    setSelectedTags([]);
  };

  return (
    <div className="space-y-5 animate-fadeIn">
      
      {/* Title & Counter */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-mirtilo-800 dark:text-cream-100 tracking-tight">
            Catálogo de Recetas
          </h2>
          <p className="text-xs text-mirtilo-500 dark:text-cream-300 font-medium">
            {filteredRecipes.length} recetas saludables encontradas
          </p>
        </div>

        {(search || selectedCategory !== 'Todas' || selectedTime || selectedTags.length > 0) && (
          <button
            onClick={resetFilters}
            className="text-xs font-bold text-coral-500 hover:text-coral-600 flex items-center gap-1 bg-coral-100 dark:bg-coral-500/20 px-3 py-1.5 rounded-xl transition-all"
          >
            <X className="w-3.5 h-3.5" /> Limpiar filtros
          </button>
        )}
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-mirtilo-400 dark:text-cream-300" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar por nombre, ingrediente (ej: espinaca, avena, pollo)..."
          className="w-full pl-11 pr-4 py-3 bg-white dark:bg-mirtilo-700 border border-cream-200 dark:border-mirtilo-600 rounded-2xl text-sm text-mirtilo-800 dark:text-cream-100 placeholder-mirtilo-400 dark:placeholder-cream-300 focus:outline-none focus:ring-2 focus:ring-coral-500/50 shadow-sm transition-all"
        />
      </div>

      {/* Time Quick Filters — flat pills, mirrors the mockup's "Todas / Hasta 15 min / Hasta 30 min" row */}
      <div className="flex flex-wrap gap-2">
        {timeOptions.map((opt) => {
          const isSelected = selectedTime === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => setSelectedTime(isSelected ? null : opt.value)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
                isSelected
                  ? 'bg-coral-500 text-white'
                  : 'bg-white dark:bg-mirtilo-700 text-mirtilo-600 dark:text-cream-200'
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      {/* Category Grid — mirrors the mockup's "Elegí una categoría" section */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-mirtilo-800 dark:text-cream-100">Elegí una categoría</span>
          {selectedCategory !== 'Todas' && (
            <button
              onClick={() => setSelectedCategory('Todas')}
              className="text-xs font-bold text-coral-500"
            >
              Ver todas
            </button>
          )}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {CATEGORY_CARDS.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  if (cat.id === 'Viandas') {
                    setIsLunchboxModalOpen(true);
                  } else {
                    setSelectedCategory(isActive ? 'Todas' : cat.id);
                  }
                }}
                className={`flex items-center gap-3 rounded-2xl p-4 text-left shadow-sm transition-transform active:scale-[0.99] ${cat.bg} ${cat.wide ? 'col-span-2' : ''} ${isActive ? 'ring-2 ring-coral-500' : ''}`}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/60 shrink-0 overflow-hidden">
                  <img src={cat.image} alt={cat.label} className="h-full w-full object-cover" />
                </span>
                <span className="font-bold text-sm text-mirtilo-800">
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>
        <button
          onClick={() => setIsPantryModalOpen(true)}
          className="w-full flex items-center justify-center gap-2 rounded-2xl bg-mint-500 text-white font-bold text-sm py-3 shadow-sm mt-1"
        >
          <Carrot className="w-4 h-4" />
          Tengo estos ingredientes
        </button>
      </div>

      {/* Dietary Tags */}
      <div className="flex flex-wrap gap-1.5">
        {tagOptions.map((tag) => {
          const isSelected = selectedTags.includes(tag);
          return (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1 rounded-xl text-[11px] font-semibold transition-all ${
                isSelected
                  ? 'bg-mint-500 text-white shadow-sm'
                  : 'bg-cream-200/80 dark:bg-mirtilo-700 text-mirtilo-600 dark:text-cream-300 hover:bg-cream-300'
              }`}
            >
              #{tag}
            </button>
          );
        })}
      </div>

      {/* Recipe Cards Grid */}
      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onSelect={onSelectRecipe}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white dark:bg-mirtilo-700/40 rounded-2xl border border-dashed border-cream-300 dark:border-mirtilo-600 p-6 space-y-3">
          <span className="text-4xl">🔍</span>
          <h3 className="font-bold text-base text-mirtilo-800 dark:text-cream-100">
            No encontramos recetas con los filtros aplicados
          </h3>
          <p className="text-xs text-mirtilo-500 dark:text-cream-300 max-w-sm mx-auto">
            Prueba eliminando el filtro de tiempo o modificando tu búsqueda para ver más sugerencias de nuestro catálogo.
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 rounded-xl bg-coral-500 text-white font-bold text-xs shadow-soft hover:bg-coral-600 transition-all"
          >
            Restablecer Filtros
          </button>
        </div>
      )}

    </div>
  );
};
