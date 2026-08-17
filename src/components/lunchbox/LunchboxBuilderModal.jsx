import React, { useState } from 'react';
import { X, Sparkles, ShoppingBag, Check, ChevronRight, Apple, Cookie, Utensils, GlassWater } from 'lucide-react';
import { EXTENDED_RECIPES, LUNCHBOX_FRUITS, LUNCHBOX_DRINKS } from '../../data/recipesData';
import { useApp } from '../../context/AppContext';
import { RecipeImage } from '../recipes/RecipeImage';

const COMPLEMENT_KEYWORDS = /budín|budin|galletita|waffle|muffin/i;

export const LunchboxBuilderModal = ({ isOpen, onClose }) => {
  const { addLunchboxToShoppingList, saveLunchbox } = useApp();

  const [step, setStep] = useState(1); // 1: Principal, 2: Fruta, 3: Complemento, 4: Bebida, 5: Resumen
  const [selectedPrincipal, setSelectedPrincipal] = useState(null);
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [selectedComplement, setSelectedComplement] = useState(null);
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [addedToast, setAddedToast] = useState(false);

  if (!isOpen) return null;

  // Filtrar recetas por subcategoría para cada paso.
  // Principal: platos del catálogo de "Viandas" (wraps, tartitas, milanesitas, etc.).
  // Fruta: sólo fruta fresca real, no recetas que la incluyan como ingrediente.
  // Complemento: sólo budines, galletitas, waffles o muffins del catálogo de Desayuno/Merienda.
  // Bebida: sólo agua mineral o jugo.
  const principales = EXTENDED_RECIPES.filter(r => r.categoria === 'Viandas' && r.subcategoria === 'Principales Vianda');
  const frutas = LUNCHBOX_FRUITS;
  const complementos = EXTENDED_RECIPES.filter(r => r.categoria === 'Desayuno/Merienda' && COMPLEMENT_KEYWORDS.test(r.nombre));
  const bebidas = LUNCHBOX_DRINKS;

  const handleAddLunchboxToShopping = () => {
    addLunchboxToShoppingList(selectedPrincipal, selectedFruit, selectedComplement, selectedDrink);
    setAddedToast(true);
    setTimeout(() => {
      setAddedToast(false);
      onClose();
    }, 2000);
  };

  const resetLunchbox = () => {
    setStep(1);
    setSelectedPrincipal(null);
    setSelectedFruit(null);
    setSelectedComplement(null);
    setSelectedDrink(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-mirtilo-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-mirtilo-800 rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-cream-200 dark:border-mirtilo-700 relative text-mirtilo-800 dark:text-cream-100 p-6 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-cream-200 dark:border-mirtilo-700 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-coral-500 flex items-center justify-center text-white text-2xl shadow-sm">
              🍱
            </div>
            <div>
              <h2 className="text-xl font-bold text-mirtilo-800 dark:text-cream-100">
                Constructor de Viandas Escolares
              </h2>
              <p className="text-xs text-mirtilo-500 dark:text-cream-300 font-medium">
                Diseña un menú modular equilibrado en 3 pasos simples
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

        {/* Step Wizard Progress Indicator */}
        <div className="flex items-center justify-between px-2">
          {[
            { id: 1, label: '1. Principal', icon: Utensils },
            { id: 2, label: '2. Fruta', icon: Apple },
            { id: 3, label: '3. Complemento', icon: Cookie },
            { id: 4, label: '4. Bebida', icon: GlassWater },
          ].map((s) => {
            const Icon = s.icon;
            const isCurrent = step === s.id;
            const isDone = step > s.id;
            return (
              <div
                key={s.id}
                onClick={() => isDone && setStep(s.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-coral-500 text-white shadow-soft'
                    : isDone
                    ? 'bg-mint-100 text-mint-700 dark:bg-mint-600/30 dark:text-mint-300'
                    : 'bg-cream-100 text-mirtilo-400 dark:bg-mirtilo-700 dark:text-cream-400'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{s.label}</span>
              </div>
            );
          })}
        </div>

        {/* Step 1: Principal */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="font-bold text-sm text-mirtilo-800 dark:text-cream-100 flex items-center gap-2">
              <span>🥪 Paso 1: Selecciona el plato Principal</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {principales.map(p => {
                const isSelected = selectedPrincipal?.id === p.id;
                return (
                  <div
                    key={p.id}
                    onClick={() => setSelectedPrincipal(p)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 ${
                      isSelected
                        ? 'border-coral-500 bg-coral-50 dark:bg-mirtilo-700 shadow-md ring-2 ring-coral-500'
                        : 'border-cream-200 dark:border-mirtilo-600 bg-white dark:bg-mirtilo-700/50 hover:border-peach-300'
                    }`}
                  >
                    <RecipeImage recipe={p} className="h-12 w-12 rounded-xl shrink-0" emojiClassName="text-3xl" />
                    <div className="flex-1">
                      <h4 className="font-bold text-xs text-mirtilo-800 dark:text-cream-100">{p.nombre}</h4>
                      <span className="text-[10px] text-mirtilo-500 dark:text-cream-300 font-semibold">{p.total_min} min prep</span>
                    </div>
                    {isSelected && <Check className="w-5 h-5 text-coral-500 font-bold" />}
                  </div>
                );
              })}
            </div>
            <div className="flex justify-end pt-2">
              <button
                disabled={!selectedPrincipal}
                onClick={() => setStep(2)}
                className="px-5 py-2.5 rounded-xl bg-coral-500 text-white font-bold text-xs disabled:opacity-50 hover:bg-coral-600 transition-all flex items-center gap-1 shadow-soft"
              >
                Siguiente: Fruta <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Fruta */}
        {step === 2 && (
          <div className="space-y-4">
            <h3 className="font-bold text-sm text-mirtilo-800 dark:text-cream-100 flex items-center gap-2">
              <span>🍎 Paso 2: Selecciona la opción de Fruta fresca</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {frutas.map(f => {
                const isSelected = selectedFruit?.id === f.id;
                return (
                  <div
                    key={f.id}
                    onClick={() => setSelectedFruit(f)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 ${
                      isSelected
                        ? 'border-coral-500 bg-coral-50 dark:bg-mirtilo-700 shadow-md ring-2 ring-coral-500'
                        : 'border-cream-200 dark:border-mirtilo-600 bg-white dark:bg-mirtilo-700/50 hover:border-peach-300'
                    }`}
                  >
                    <RecipeImage recipe={f} className="h-12 w-12 rounded-xl shrink-0" emojiClassName="text-3xl" />
                    <div className="flex-1">
                      <h4 className="font-bold text-xs text-mirtilo-800 dark:text-cream-100">{f.nombre}</h4>
                      <span className="text-[10px] text-mint-600 font-semibold">100% Nutritiva</span>
                    </div>
                    {isSelected && <Check className="w-5 h-5 text-coral-500 font-bold" />}
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between pt-2">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-2 rounded-xl bg-cream-200 dark:bg-mirtilo-700 text-mirtilo-700 dark:text-cream-200 font-bold text-xs"
              >
                Atrás
              </button>
              <button
                disabled={!selectedFruit}
                onClick={() => setStep(3)}
                className="px-5 py-2.5 rounded-xl bg-coral-500 text-white font-bold text-xs disabled:opacity-50 hover:bg-coral-600 transition-all flex items-center gap-1 shadow-soft"
              >
                Siguiente: Complemento <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Complemento */}
        {step === 3 && (
          <div className="space-y-4">
            <h3 className="font-bold text-sm text-mirtilo-800 dark:text-cream-100 flex items-center gap-2">
              <span>🍪 Paso 3: Selecciona un Complemento o Snack</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {complementos.map(c => {
                const isSelected = selectedComplement?.id === c.id;
                return (
                  <div
                    key={c.id}
                    onClick={() => setSelectedComplement(c)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 ${
                      isSelected
                        ? 'border-coral-500 bg-coral-50 dark:bg-mirtilo-700 shadow-md ring-2 ring-coral-500'
                        : 'border-cream-200 dark:border-mirtilo-600 bg-white dark:bg-mirtilo-700/50 hover:border-peach-300'
                    }`}
                  >
                    <RecipeImage recipe={c} className="h-12 w-12 rounded-xl shrink-0" emojiClassName="text-3xl" />
                    <div className="flex-1">
                      <h4 className="font-bold text-xs text-mirtilo-800 dark:text-cream-100">{c.nombre}</h4>
                      <span className="text-[10px] text-mirtilo-500 dark:text-cream-300 font-semibold">Sin conservantes</span>
                    </div>
                    {isSelected && <Check className="w-5 h-5 text-coral-500 font-bold" />}
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between pt-2">
              <button
                onClick={() => setStep(2)}
                className="px-4 py-2 rounded-xl bg-cream-200 dark:bg-mirtilo-700 text-mirtilo-700 dark:text-cream-200 font-bold text-xs"
              >
                Atrás
              </button>
              <button
                disabled={!selectedComplement}
                onClick={() => setStep(4)}
                className="px-5 py-2.5 rounded-xl bg-coral-500 text-white font-bold text-xs disabled:opacity-50 hover:bg-coral-600 transition-all flex items-center gap-1 shadow-soft"
              >
                Siguiente: Bebida <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Bebida */}
        {step === 4 && (
          <div className="space-y-4">
            <h3 className="font-bold text-sm text-mirtilo-800 dark:text-cream-100 flex items-center gap-2">
              <span>🥤 Paso 4: Selecciona una Bebida</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {bebidas.map(b => {
                const isSelected = selectedDrink?.id === b.id;
                return (
                  <div
                    key={b.id}
                    onClick={() => setSelectedDrink(b)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 ${
                      isSelected
                        ? 'border-coral-500 bg-coral-50 dark:bg-mirtilo-700 shadow-md ring-2 ring-coral-500'
                        : 'border-cream-200 dark:border-mirtilo-600 bg-white dark:bg-mirtilo-700/50 hover:border-peach-300'
                    }`}
                  >
                    <RecipeImage recipe={b} className="h-12 w-12 rounded-xl shrink-0" emojiClassName="text-3xl" />
                    <div className="flex-1">
                      <h4 className="font-bold text-xs text-mirtilo-800 dark:text-cream-100">{b.nombre}</h4>
                    </div>
                    {isSelected && <Check className="w-5 h-5 text-coral-500 font-bold" />}
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between pt-2">
              <button
                onClick={() => setStep(3)}
                className="px-4 py-2 rounded-xl bg-cream-200 dark:bg-mirtilo-700 text-mirtilo-700 dark:text-cream-200 font-bold text-xs"
              >
                Atrás
              </button>
              <button
                disabled={!selectedDrink}
                onClick={() => {
                  saveLunchbox(selectedPrincipal, selectedFruit, selectedComplement, selectedDrink);
                  setStep(5);
                }}
                className="px-5 py-2.5 rounded-xl bg-coral-500 text-white font-bold text-xs disabled:opacity-50 hover:bg-coral-600 transition-all flex items-center gap-1 shadow-soft"
              >
                Ver Resumen Vianda <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Summary & Add to Shopping */}
        {step === 5 && (
          <div className="space-y-5 animate-fadeIn">
            <div className="p-4 rounded-2xl bg-peach-100 border border-peach-200 dark:border-mirtilo-500 space-y-3">
              <h3 className="font-bold text-base text-mirtilo-800 dark:text-cream-100 flex items-center gap-2">
                🎉 ¡Vianda Escolar Equilibrada Armada!
              </h3>
              
              <div className="space-y-2">
                <div className="flex items-center gap-3 bg-white dark:bg-mirtilo-800 p-2.5 rounded-xl shadow-sm">
                  {selectedPrincipal && <RecipeImage recipe={selectedPrincipal} className="h-10 w-10 rounded-lg shrink-0" emojiClassName="text-2xl" />}
                  <div>
                    <span className="text-[10px] text-coral-500 font-bold uppercase block">Principal</span>
                    <span className="text-xs font-bold text-mirtilo-800 dark:text-cream-100">{selectedPrincipal?.nombre}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white dark:bg-mirtilo-800 p-2.5 rounded-xl shadow-sm">
                  {selectedFruit && <RecipeImage recipe={selectedFruit} className="h-10 w-10 rounded-lg shrink-0" emojiClassName="text-2xl" />}
                  <div>
                    <span className="text-[10px] text-mint-600 font-bold uppercase block">Fruta Fresca</span>
                    <span className="text-xs font-bold text-mirtilo-800 dark:text-cream-100">{selectedFruit?.nombre}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white dark:bg-mirtilo-800 p-2.5 rounded-xl shadow-sm">
                  {selectedComplement && <RecipeImage recipe={selectedComplement} className="h-10 w-10 rounded-lg shrink-0" emojiClassName="text-2xl" />}
                  <div>
                    <span className="text-[10px] text-peach-600 font-bold uppercase block">Complemento</span>
                    <span className="text-xs font-bold text-mirtilo-800 dark:text-cream-100">{selectedComplement?.nombre}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white dark:bg-mirtilo-800 p-2.5 rounded-xl shadow-sm">
                  {selectedDrink && <RecipeImage recipe={selectedDrink} className="h-10 w-10 rounded-lg shrink-0" emojiClassName="text-2xl" />}
                  <div>
                    <span className="text-[10px] text-mirtilo-500 font-bold uppercase block">Bebida</span>
                    <span className="text-xs font-bold text-mirtilo-800 dark:text-cream-100">{selectedDrink?.nombre}</span>
                  </div>
                </div>
              </div>
            </div>

            {addedToast && (
              <div className="p-3 bg-mint-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 animate-fadeIn shadow-soft">
                <Check className="w-4 h-4" /> ¡Ingredientes agregados a tu lista de compras!
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <button
                onClick={resetLunchbox}
                className="flex-1 px-4 py-2.5 rounded-xl border border-cream-300 dark:border-mirtilo-600 text-mirtilo-700 dark:text-cream-200 font-bold text-xs hover:bg-cream-100"
              >
                Volver a armar
              </button>

              <button
                onClick={handleAddLunchboxToShopping}
                className="flex-2 px-5 py-3 rounded-xl bg-coral-500 text-white font-bold text-xs shadow-sm hover:opacity-95 transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                Agregar ingredientes de la vianda a Lista de Compras
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
