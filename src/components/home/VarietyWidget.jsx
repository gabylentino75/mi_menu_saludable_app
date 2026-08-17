import React from 'react';
import { useApp } from '../../context/AppContext';
import { Apple, Carrot, Leaf, Sparkles } from 'lucide-react';

export const VarietyWidget = () => {
  const { weeklyPlan, findWeeklyPlanMealById } = useApp();

  // Calcular cantidad acumulada de frutas, verduras y legumbres en el plan semanal
  let fruitsCount = 0;
  let veggiesCount = 0;
  let legumesCount = 0;

  Object.values(weeklyPlan).forEach(day => {
    ['almuerzo', 'cena'].forEach(mealType => {
      const recipeId = day[mealType];
      if (recipeId) {
        const recipe = findWeeklyPlanMealById(recipeId);
        if (recipe) {
          if (recipe.frutas && recipe.frutas.length > 0) fruitsCount += recipe.frutas.length;
          if (recipe.verduras && recipe.verduras.length > 0) veggiesCount += recipe.verduras.length;
          const hasLegumes = (recipe.ingredientes || []).some(i =>
            ['lentejas', 'garbanzos', 'porotos', 'soja'].some(leg => i.nombre.toLowerCase().includes(leg))
          );
          if (hasLegumes) legumesCount += 1;
        }
      }
    });
  });

  // Metas semanales recomendadas flexibles (no restrictivas)
  const targetFruits = 7;
  const targetVeggies = 14;
  const targetLegumes = 4;

  const fruitPct = Math.min(Math.round((fruitsCount / targetFruits) * 100), 100);
  const veggiePct = Math.min(Math.round((veggiesCount / targetVeggies) * 100), 100);
  const legumePct = Math.min(Math.round((legumesCount / targetLegumes) * 100), 100);

  const totalScore = Math.round((fruitPct + veggiePct + legumePct) / 3);

  return (
    <div className="bg-white dark:bg-mirtilo-700/80 rounded-2xl p-5 shadow-sm border border-cream-200 dark:border-mirtilo-600 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-bold text-sm text-mirtilo-800 dark:text-cream-100 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-coral-500" />
            Indicador de Variedad Semanal
          </h3>
          <p className="text-[11px] text-mirtilo-500 dark:text-cream-300">
            Medidor flexible de diversidad de alimentos en tu menú
          </p>
        </div>
        <div className="px-3 py-1 rounded-full bg-peach-100 dark:bg-mirtilo-800 text-coral-600 dark:text-coral-400 font-bold text-xs">
          {totalScore}% NutriScore
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {/* Frutas */}
        <div className="space-y-1.5 p-3 rounded-2xl bg-cream-50 dark:bg-mirtilo-800/60 border border-cream-100 dark:border-mirtilo-600">
          <div className="flex items-center justify-between text-xs font-bold text-coral-600 dark:text-coral-300">
            <span className="flex items-center gap-1">
              <Apple className="w-3.5 h-3.5" /> Frutas
            </span>
            <span>{fruitsCount}/{targetFruits}</span>
          </div>
          <div className="w-full bg-cream-200 dark:bg-mirtilo-600 h-2 rounded-full overflow-hidden">
            <div
              className="bg-coral-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${fruitPct}%` }}
            />
          </div>
        </div>

        {/* Verduras */}
        <div className="space-y-1.5 p-3 rounded-2xl bg-cream-50 dark:bg-mirtilo-800/60 border border-cream-100 dark:border-mirtilo-600">
          <div className="flex items-center justify-between text-xs font-bold text-mint-600 dark:text-mint-300">
            <span className="flex items-center gap-1">
              <Carrot className="w-3.5 h-3.5" /> Verduras
            </span>
            <span>{veggiesCount}/{targetVeggies}</span>
          </div>
          <div className="w-full bg-cream-200 dark:bg-mirtilo-600 h-2 rounded-full overflow-hidden">
            <div
              className="bg-mint-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${veggiePct}%` }}
            />
          </div>
        </div>

        {/* Legumbres */}
        <div className="space-y-1.5 p-3 rounded-2xl bg-cream-50 dark:bg-mirtilo-800/60 border border-cream-100 dark:border-mirtilo-600">
          <div className="flex items-center justify-between text-xs font-bold text-peach-600 dark:text-peach-300">
            <span className="flex items-center gap-1">
              <Leaf className="w-3.5 h-3.5" /> Legumbres
            </span>
            <span>{legumesCount}/{targetLegumes}</span>
          </div>
          <div className="w-full bg-cream-200 dark:bg-mirtilo-600 h-2 rounded-full overflow-hidden">
            <div
              className="bg-peach-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${legumePct}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
