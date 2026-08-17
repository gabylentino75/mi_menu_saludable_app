import React, { useState } from 'react';
import { X, Clock, Users, Flame, ShoppingCart, Check, Heart, ArrowRightLeft, Sparkles, AlertCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { EXTENDED_RECIPES } from '../../data/recipesData';
import { RecipeImage } from './RecipeImage';

export const RecipeDetailModal = ({ recipe, onClose, onSelectRelated }) => {
  const { favorites, toggleFavorite, addRecipeToShoppingList } = useApp();
  const [checkedIngredients, setCheckedIngredients] = useState({});
  const [checkedSteps, setCheckedSteps] = useState({});
  const [addedToListToast, setAddedToListToast] = useState(false);

  if (!recipe) return null;

  const isFav = favorites.includes(recipe.id);

  const toggleIng = (ingId) => {
    setCheckedIngredients(prev => ({ ...prev, [ingId]: !prev[ingId] }));
  };

  const toggleStep = (idx) => {
    setCheckedSteps(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleAddShopping = () => {
    addRecipeToShoppingList(recipe);
    setAddedToListToast(true);
    setTimeout(() => setAddedToListToast(false), 2500);
  };

  // Encontrar recetas relacionadas
  const relatedRecipes = (recipe.recetas_relacionadas || [])
    .map(id => EXTENDED_RECIPES.find(r => r.id === id))
    .filter(Boolean);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-mirtilo-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white dark:bg-mirtilo-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-cream-200 dark:border-mirtilo-700 relative text-mirtilo-800 dark:text-cream-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Hero Photo */}
        <div className="relative">
          <RecipeImage recipe={recipe} className="h-56 w-full" emojiClassName="text-6xl" />

          <button
            onClick={onClose}
            className="absolute top-4 left-4 p-2 rounded-full bg-white/90 dark:bg-mirtilo-600/90 text-mirtilo-700 dark:text-cream-100 shadow-sm transition-all z-10"
          >
            <X className="w-5 h-5" />
          </button>
          <button
            onClick={() => toggleFavorite(recipe.id)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/90 dark:bg-mirtilo-600/90 shadow-sm transition-all z-10"
          >
            <Heart className={`w-5 h-5 ${isFav ? 'fill-coral-500 text-coral-500' : 'text-mirtilo-700 dark:text-cream-100'}`} />
          </button>
        </div>

        <div className="p-6 pb-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-coral-100 text-coral-600">
              {recipe.categoria}
            </span>
            {recipe.subcategoria && (
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-peach-100 text-peach-700 dark:bg-mirtilo-600 dark:text-peach-300">
                {recipe.subcategoria}
              </span>
            )}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-mirtilo-800 dark:text-cream-100 leading-tight">
            {recipe.nombre}
          </h2>

          {/* Quick Metrics Bar */}
          <div className="flex items-center gap-4 mt-3 text-sm text-mirtilo-600 dark:text-cream-300">
            {typeof recipe.total_min === 'number' && (
              <span className="flex items-center gap-1 font-bold text-coral-600 dark:text-coral-400">
                <Clock className="w-4 h-4" /> {recipe.total_min} min
              </span>
            )}
            {typeof recipe.porciones === 'number' && (
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" /> {recipe.porciones} porciones
              </span>
            )}
            {recipe.dificultad && (
              <span className="flex items-center gap-1">
                <Flame className="w-4 h-4" /> {recipe.dificultad}
              </span>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">

          {/* Actions & Tags */}
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex flex-wrap gap-1.5">
              {recipe.etiquetas.map((t, idx) => (
                <span key={idx} className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-mint-100 text-mint-600 dark:bg-mint-600/20 dark:text-mint-300">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleFavorite(recipe.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all ${
                  isFav
                    ? 'bg-coral-500 text-white border-coral-500'
                    : 'border-cream-300 dark:border-mirtilo-600 text-mirtilo-600 dark:text-cream-200 hover:bg-cream-100'
                }`}
              >
                <Heart className={`w-4 h-4 ${isFav ? 'fill-white' : ''}`} />
                {isFav ? 'Favorita' : 'Guardar'}
              </button>

              <button
                onClick={handleAddShopping}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-coral-500 text-white font-bold text-xs shadow-sm hover:opacity-95 transition-all active:scale-95"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Agregar a mi lista</span>
              </button>
            </div>
          </div>

          {/* Toast Notification */}
          {addedToListToast && (
            <div className="p-3 bg-mint-400 text-white text-xs font-bold rounded-xl flex items-center justify-between shadow-soft animate-fadeIn">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" /> ¡Ingredientes agregados a tu lista de compras!
              </span>
              <span className="text-[10px] opacity-80">Suma inteligente activa</span>
            </div>
          )}

          {/* Description */}
          <p className="text-sm text-mirtilo-600 dark:text-cream-200 leading-relaxed italic bg-cream-50 dark:bg-mirtilo-700/50 p-3.5 rounded-2xl border-l-4 border-peach-400">
            "{recipe.descripcion}"
          </p>

          {/* Section 1: Ingredients with Checkboxes */}
          <div>
            <h3 className="font-bold text-base text-mirtilo-800 dark:text-cream-100 mb-3 flex items-center justify-between">
              <span>🛒 Ingredientes Requeridos</span>
              <span className="text-xs font-medium text-mirtilo-400">
                {Object.keys(checkedIngredients).filter(k => checkedIngredients[k]).length}/{recipe.ingredientes.length} listos
              </span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {recipe.ingredientes.map((ing) => {
                const isChecked = checkedIngredients[ing.id];
                return (
                  <label
                    key={ing.id}
                    onClick={() => toggleIng(ing.id)}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer select-none ${
                      isChecked
                        ? 'bg-mint-100/60 dark:bg-mint-600/20 border-mint-300 dark:border-mint-600 line-through opacity-75'
                        : 'bg-cream-50 dark:bg-mirtilo-700 border-cream-200 dark:border-mirtilo-600 hover:border-peach-400'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${isChecked ? 'bg-mint-500 border-mint-500 text-white' : 'border-mirtilo-300 dark:border-mirtilo-500 bg-white dark:bg-mirtilo-800'}`}>
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <div className="flex-1 text-xs">
                      <span className="font-bold text-mirtilo-800 dark:text-cream-100">{ing.nombre}</span>
                      <span className="ml-1 text-mirtilo-500 dark:text-cream-300 font-medium">({ing.cantidad} {ing.unidad})</span>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-cream-200 dark:bg-mirtilo-600 text-mirtilo-600 dark:text-cream-300">
                      {ing.categoria}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Section 2: Smart Substitution Guide */}
          {recipe.sustituciones && recipe.sustituciones.length > 0 && (
            <div className="p-4 rounded-2xl bg-peach-100/70 dark:bg-mirtilo-700/60 border border-peach-300 dark:border-mirtilo-600">
              <h4 className="font-bold text-xs text-peach-700 dark:text-peach-300 mb-2 flex items-center gap-1.5">
                <ArrowRightLeft className="w-4 h-4 text-coral-500" />
                Sustitutos Inteligentes (¿Te falta algo?)
              </h4>
              <div className="space-y-2">
                {recipe.sustituciones.map((sub, idx) => (
                  <div key={idx} className="text-xs bg-white dark:bg-mirtilo-800 p-2.5 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-1 shadow-sm">
                    <div>
                      <span className="font-bold text-mirtilo-700 dark:text-cream-200">{sub.original}</span>
                      <span className="mx-1.5 text-coral-500">➜</span>
                      <span className="font-bold text-coral-600 dark:text-coral-400">{sub.reemplazo}</span>
                    </div>
                    <span className="text-[11px] text-mirtilo-500 dark:text-cream-300 italic">{sub.nota}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 3: Step by Step Instructions */}
          <div>
            <h3 className="font-bold text-base text-mirtilo-800 dark:text-cream-100 mb-3">
              👩‍🍳 Paso a Paso de Preparación
            </h3>
            <div className="space-y-2.5">
              {recipe.pasos.map((paso, idx) => {
                const isDone = checkedSteps[idx];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleStep(idx)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                      isDone
                        ? 'bg-mint-100/50 dark:bg-mint-600/20 border-mint-300 dark:border-mint-600 opacity-80'
                        : 'bg-white dark:bg-mirtilo-700 border-cream-200 dark:border-mirtilo-600 hover:shadow-sm'
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-full font-bold text-xs flex items-center justify-center shrink-0 ${isDone ? 'bg-mint-500 text-white' : 'bg-peach-200 text-peach-700 dark:bg-mirtilo-600 dark:text-peach-300'}`}>
                      {idx + 1}
                    </span>
                    <p className={`text-xs sm:text-sm leading-relaxed ${isDone ? 'line-through text-mirtilo-500 dark:text-cream-400' : 'text-mirtilo-700 dark:text-cream-100 font-medium'}`}>
                      {paso}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Preservation & Meal Prep Info */}
          <div className="p-3.5 rounded-2xl bg-cream-100 dark:bg-mirtilo-700/40 text-xs flex flex-wrap items-center justify-between gap-2 text-mirtilo-600 dark:text-cream-300">
            <div>
              <span className="font-bold">Conservación:</span> {recipe.conservacion}
            </div>
            <div className="flex gap-2">
              {recipe.congelable && (
                <span className="px-2 py-0.5 rounded-md bg-blue-100 text-blue-700 font-bold text-[10px]">
                  ❄️ Congelable
                </span>
              )}
              {recipe.preparacion_anticipada && (
                <span className="px-2 py-0.5 rounded-md bg-mint-100 text-mint-700 font-bold text-[10px]">
                  🍱 Meal Prep Listo
                </span>
              )}
            </div>
          </div>

          {/* Related Recipes */}
          {relatedRecipes.length > 0 && (
            <div className="pt-4 border-t border-cream-200 dark:border-mirtilo-700">
              <h4 className="font-bold text-sm text-mirtilo-800 dark:text-cream-100 mb-3">
                💡 Recetas Relacionadas
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {relatedRecipes.map(rel => (
                  <button
                    key={rel.id}
                    onClick={() => onSelectRelated && onSelectRelated(rel)}
                    className="p-3 rounded-xl bg-cream-50 dark:bg-mirtilo-700 text-left transition-all flex items-center gap-2"
                  >
                    <RecipeImage recipe={rel} className="h-10 w-10 rounded-lg shrink-0" emojiClassName="text-xl" />
                    <div className="overflow-hidden">
                      <span className="text-xs font-bold text-mirtilo-800 dark:text-cream-100 truncate block">{rel.nombre}</span>
                      <span className="text-[10px] text-mirtilo-500 dark:text-cream-300 font-semibold">{rel.total_min} min</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
