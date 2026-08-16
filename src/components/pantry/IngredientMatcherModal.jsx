import React, { useState } from 'react';
import { X, Carrot, Plus, Check, Sparkles, ChefHat } from 'lucide-react';
import { filterRecipesByIngredients } from '../../data/recipesData';
import { RecipeCard } from '../recipes/RecipeCard';
import { normalize } from '../../utils/text.js';

const POPULAR_PANTRY_ITEMS = [
  'huevo', 'tomate', 'queso', 'palta', 'avena', 'espinaca', 
  'zanahoria', 'pollo', 'atún', 'lentejas', 'garbanzos', 'banana', 
  'manzana', 'pepino', 'leche', 'zucchini', 'arroz'
];

export const IngredientMatcherModal = ({ isOpen, onClose, onSelectRecipe }) => {
  const [selectedIngredients, setSelectedIngredients] = useState(['huevo', 'tomate', 'queso']);
  const [customInput, setCustomInput] = useState('');

  if (!isOpen) return null;

  const addIngredient = (ing) => {
    const clean = normalize(ing);
    if (clean && !selectedIngredients.includes(clean)) {
      setSelectedIngredients(prev => [...prev, clean]);
    }
    setCustomInput('');
  };

  const removeIngredient = (ing) => {
    const clean = normalize(ing);
    setSelectedIngredients(prev => prev.filter(i => i !== clean));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addIngredient(customInput);
    }
  };

  // Obtener recetas cruzadas por el motor de coincidencias
  const matches = filterRecipesByIngredients(selectedIngredients);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-mirtilo-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-mirtilo-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-cream-200 dark:border-mirtilo-700 relative text-mirtilo-800 dark:text-cream-100 p-6 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-cream-200 dark:border-mirtilo-700 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-peach-100 dark:bg-mirtilo-700 flex items-center justify-center text-peach-600 dark:text-peach-300">
              <Carrot className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-mirtilo-800 dark:text-cream-100">
                Tengo estos ingredientes
              </h2>
              <p className="text-xs text-mirtilo-500 dark:text-cream-300 font-medium">
                La IA encuentra recetas exactas o con 1 o 2 ingrediente faltante
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-cream-100 dark:hover:bg-mirtilo-700 text-mirtilo-500 dark:text-cream-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Selected Ingredients Tags */}
        <div className="space-y-3">
          <label className="text-xs font-bold text-mirtilo-700 dark:text-cream-200">
            Tus ingredientes seleccionados ({selectedIngredients.length}):
          </label>
          <div className="flex flex-wrap gap-2 p-3 bg-cream-50 dark:bg-mirtilo-700/60 rounded-2xl border border-cream-200 dark:border-mirtilo-600 min-h-[52px]">
            {selectedIngredients.length === 0 && (
              <span className="text-xs text-mirtilo-400 dark:text-cream-400 self-center">
                Selecciona de la lista o escribe los ingredientes de tu heladera...
              </span>
            )}
            {selectedIngredients.map((ing) => (
              <span
                key={ing}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-coral-500 text-white font-bold text-xs shadow-sm animate-fadeIn"
              >
                {ing}
                <button
                  onClick={() => removeIngredient(ing)}
                  className="hover:text-peach-200 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Custom Input & Popular Selector */}
        <div className="space-y-3">
          <div className="flex gap-2">
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Escribe otro ingrediente (ej: espinaca, atún)..."
              className="flex-1 px-4 py-2.5 bg-white dark:bg-mirtilo-700 border border-cream-200 dark:border-mirtilo-600 rounded-xl text-xs text-mirtilo-800 dark:text-cream-100 placeholder-mirtilo-400 focus:outline-none focus:ring-2 focus:ring-coral-500/50"
            />
            <button
              onClick={() => addIngredient(customInput)}
              className="px-4 py-2.5 rounded-xl bg-peach-400 text-white font-bold text-xs hover:bg-peach-500 transition-all flex items-center gap-1"
            >
              <Plus className="w-4 h-4" /> Agregar
            </button>
          </div>

          <div>
            <span className="text-[11px] font-bold text-mirtilo-500 dark:text-cream-300 block mb-1.5">
              Sugerencias rápidas de despensa:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {POPULAR_PANTRY_ITEMS.map((item) => {
                const isSelected = selectedIngredients.includes(normalize(item));
                return (
                  <button
                    key={item}
                    onClick={() => isSelected ? removeIngredient(item) : addIngredient(item)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                      isSelected
                        ? 'bg-mint-500 text-white shadow-sm'
                        : 'bg-cream-100 dark:bg-mirtilo-700 text-mirtilo-600 dark:text-cream-300 hover:bg-cream-200'
                    }`}
                  >
                    {isSelected ? '✓ ' : '+ '} {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Coincidence Results */}
        <div className="space-y-4 pt-2 border-t border-cream-200 dark:border-mirtilo-700">
          <h3 className="font-bold text-sm text-mirtilo-800 dark:text-cream-100 flex items-center justify-between">
            <span>🍳 Coincidencias encontradas ({matches.length})</span>
            {selectedIngredients.length > 0 && (
              <span className="text-xs font-normal text-mint-600 dark:text-mint-400 font-bold">
                Ordenado por mayor porcentaje de cobertura
              </span>
            )}
          </h3>

          {matches.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-80 overflow-y-auto p-1">
              {matches.map(({ recipe, matchPercentage, missingCount, missingIngredients }) => (
                <div key={recipe.id} className="relative">
                  {/* Coincidence Tag */}
                  <div className="absolute top-2 right-2 z-10 flex gap-1">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      matchPercentage >= 80 ? 'bg-mint-500 text-white' : 'bg-peach-500 text-white'
                    }`}>
                      {matchPercentage}% Cobertura
                    </span>
                    {missingCount > 0 && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cream-200 text-mirtilo-700 dark:bg-mirtilo-800 dark:text-cream-200">
                        +{missingCount} faltantes
                      </span>
                    )}
                  </div>

                  <RecipeCard
                    recipe={recipe}
                    onSelect={(r) => {
                      onClose();
                      onSelectRecipe(r);
                    }}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-cream-50 dark:bg-mirtilo-700/30 rounded-2xl p-4">
              <ChefHat className="w-8 h-8 mx-auto text-mirtilo-400 dark:text-cream-400 mb-2" />
              <p className="text-xs text-mirtilo-600 dark:text-cream-300 font-medium">
                Selecciona al menos 1 o 2 ingredientes para ver qué recetas podés preparar hoy.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
