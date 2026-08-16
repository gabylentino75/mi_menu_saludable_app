import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { EXTENDED_RECIPES } from '../../data/recipesData';
import { Calendar, ShoppingBag, Plus, Sparkles, Check, ChevronRight, X, Utensils } from 'lucide-react';
import { VarietyWidget } from '../home/VarietyWidget';

const DAYS = [
  { id: 'lunes', label: 'Lunes' },
  { id: 'martes', label: 'Martes' },
  { id: 'miercoles', label: 'Miércoles' },
  { id: 'jueves', label: 'Jueves' },
  { id: 'viernes', label: 'Viernes' },
  { id: 'sabado', label: 'Sábado' },
  { id: 'domingo', label: 'Domingo' },
];

export const WeeklyPlannerView = ({ onSelectRecipe }) => {
  const { weeklyPlan, setWeeklyMeal, generateShoppingFromWeeklyPlan } = useApp();
  const [pickerState, setPickerState] = useState(null); // { day, mealType }
  const [generatedToast, setGeneratedToast] = useState(false);

  const handleGenerateShopping = () => {
    generateShoppingFromWeeklyPlan();
    setGeneratedToast(true);
    setTimeout(() => setGeneratedToast(false), 2500);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-mirtilo-800 dark:text-cream-100 tracking-tight flex items-center gap-2">
            <Calendar className="w-6 h-6 text-coral-500" />
            Planificador Semanal
          </h2>
          <p className="text-xs text-mirtilo-500 dark:text-cream-300 font-medium">
            Organiza tus almuerzos y cenas para evitar decidir a último momento
          </p>
        </div>

        <button
          onClick={handleGenerateShopping}
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-coral-500 text-white font-bold text-xs shadow-sm hover:opacity-95 transition-all active:scale-95"
        >
          <ShoppingBag className="w-4 h-4" />
          Generar lista de compras automática
        </button>
      </div>

      {generatedToast && (
        <div className="p-3 bg-mint-500 text-white font-bold text-xs rounded-2xl flex items-center justify-center gap-2 animate-fadeIn shadow-soft">
          <Check className="w-4 h-4" /> ¡Ingredientes de toda la semana consolidados en tu Lista de Compras!
        </div>
      )}

      {/* Variety Progress Widget */}
      <VarietyWidget />

      {/* Days Grid */}
      <div className="space-y-4">
        {DAYS.map((day) => {
          const dayPlan = weeklyPlan[day.id] || {};
          const almuerzoRecipe = EXTENDED_RECIPES.find(r => r.id === dayPlan.almuerzo);
          const cenaRecipe = EXTENDED_RECIPES.find(r => r.id === dayPlan.cena);

          return (
            <div key={day.id} className="bg-white dark:bg-mirtilo-700/80 rounded-2xl p-4 border border-cream-200 dark:border-mirtilo-600 shadow-sm">
              <h3 className="font-bold text-sm text-mirtilo-800 dark:text-cream-100 mb-3 text-coral-600 dark:text-coral-400">
                📅 {day.label}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                {/* Slot Almuerzo */}
                <div className="p-3 rounded-2xl bg-cream-50 dark:bg-mirtilo-800 border border-cream-100 dark:border-mirtilo-600 flex flex-col justify-between min-h-[90px]">
                  <div className="flex items-center justify-between text-xs font-bold text-mirtilo-500 dark:text-cream-300 mb-1">
                    <span>☀️ Almuerzo</span>
                    {almuerzoRecipe && (
                      <button
                        onClick={() => setPickerState({ day: day.id, mealType: 'almuerzo' })}
                        className="text-[10px] text-coral-500 hover:underline font-semibold"
                      >
                        Cambiar
                      </button>
                    )}
                  </div>

                  {almuerzoRecipe ? (
                    <div 
                      onClick={() => onSelectRecipe(almuerzoRecipe)}
                      className="flex items-center gap-2.5 cursor-pointer group"
                    >
                      <span className="text-2xl">{almuerzoRecipe.emoji}</span>
                      <div className="flex-1 overflow-hidden">
                        <span className="font-bold text-xs text-mirtilo-800 dark:text-cream-100 group-hover:text-coral-500 truncate block">
                          {almuerzoRecipe.nombre}
                        </span>
                        <span className="text-[10px] text-mirtilo-400 font-semibold">
                          ⏱️ {almuerzoRecipe.total_min} min
                        </span>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => setPickerState({ day: day.id, mealType: 'almuerzo' })}
                      className="w-full py-2.5 rounded-xl border border-dashed border-cream-300 dark:border-mirtilo-600 text-mirtilo-400 dark:text-cream-400 text-xs font-bold hover:border-coral-400 hover:text-coral-500 transition-all flex items-center justify-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" /> Agregar Almuerzo
                    </button>
                  )}
                </div>

                {/* Slot Cena */}
                <div className="p-3 rounded-2xl bg-cream-50 dark:bg-mirtilo-800 border border-cream-100 dark:border-mirtilo-600 flex flex-col justify-between min-h-[90px]">
                  <div className="flex items-center justify-between text-xs font-bold text-mirtilo-500 dark:text-cream-300 mb-1">
                    <span>🌙 Cena</span>
                    {cenaRecipe && (
                      <button
                        onClick={() => setPickerState({ day: day.id, mealType: 'cena' })}
                        className="text-[10px] text-coral-500 hover:underline font-semibold"
                      >
                        Cambiar
                      </button>
                    )}
                  </div>

                  {cenaRecipe ? (
                    <div 
                      onClick={() => onSelectRecipe(cenaRecipe)}
                      className="flex items-center gap-2.5 cursor-pointer group"
                    >
                      <span className="text-2xl">{cenaRecipe.emoji}</span>
                      <div className="flex-1 overflow-hidden">
                        <span className="font-bold text-xs text-mirtilo-800 dark:text-cream-100 group-hover:text-coral-500 truncate block">
                          {cenaRecipe.nombre}
                        </span>
                        <span className="text-[10px] text-mirtilo-400 font-semibold">
                          ⏱️ {cenaRecipe.total_min} min
                        </span>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => setPickerState({ day: day.id, mealType: 'cena' })}
                      className="w-full py-2.5 rounded-xl border border-dashed border-cream-300 dark:border-mirtilo-600 text-mirtilo-400 dark:text-cream-400 text-xs font-bold hover:border-coral-400 hover:text-coral-500 transition-all flex items-center justify-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" /> Agregar Cena
                    </button>
                  )}
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Recipe Picker Modal */}
      {pickerState && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-mirtilo-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-mirtilo-800 rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-cream-200 dark:border-mirtilo-700 pb-3">
              <h3 className="font-bold text-base text-mirtilo-800 dark:text-cream-100">
                Seleccionar Receta para {pickerState.day} ({pickerState.mealType})
              </h3>
              <button
                onClick={() => setPickerState(null)}
                className="p-1 rounded-full hover:bg-cream-100 text-mirtilo-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
              {EXTENDED_RECIPES.map((recipe) => (
                <div
                  key={recipe.id}
                  onClick={() => {
                    setWeeklyMeal(pickerState.day, pickerState.mealType, recipe.id);
                    setPickerState(null);
                  }}
                  className="p-3 rounded-2xl bg-cream-50 dark:bg-mirtilo-700 border border-cream-200 dark:border-mirtilo-600 hover:border-coral-400 cursor-pointer flex items-center justify-between transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{recipe.emoji}</span>
                    <div>
                      <h4 className="font-bold text-xs text-mirtilo-800 dark:text-cream-100">{recipe.nombre}</h4>
                      <span className="text-[10px] text-mirtilo-500 dark:text-cream-300">{recipe.categoria} • {recipe.total_min} min</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-mirtilo-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
