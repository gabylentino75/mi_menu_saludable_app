import React, { useState } from 'react';
import { X, Plus, Trash2, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { SHOPPING_CATEGORIES } from '../../utils/shoppingCategories';

const EMPTY_INGREDIENT = { nombre: '', cantidad: 1, unidad: 'unid', categoria: 'Almacén' };

// Modal reutilizable para crear una comida que no está en el catálogo (ej. "Asado al horno
// con papas"). Se usa tanto desde el Catálogo de Recetas como desde el Planificador Semanal.
// onSave recibe la comida ya guardada; cada pantalla decide qué hacer después (asignarla a
// un día o simplemente avisar que ya quedó disponible para usar más tarde).
export const CustomMealModal = ({ isOpen, onClose, onSave }) => {
  const { addCustomMeal } = useApp();

  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [draft, setDraft] = useState(EMPTY_INGREDIENT);

  if (!isOpen) return null;

  const reset = () => {
    setName('');
    setIngredients([]);
    setDraft(EMPTY_INGREDIENT);
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  const handleAddDraft = () => {
    if (!draft.nombre.trim()) return;
    setIngredients(prev => [...prev, draft]);
    setDraft(EMPTY_INGREDIENT);
  };

  const handleRemoveDraft = (idx) => {
    setIngredients(prev => prev.filter((_, i) => i !== idx));
  };

  const handleSave = () => {
    if (!name.trim()) return;
    const meal = addCustomMeal(name, 'Almuerzo/Cena', ingredients);
    reset();
    if (meal) onSave(meal);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-mirtilo-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-mirtilo-800 rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto p-6 shadow-2xl space-y-4">
        <div className="flex items-center justify-between border-b border-cream-200 dark:border-mirtilo-700 pb-3">
          <h3 className="font-bold text-base text-mirtilo-800 dark:text-cream-100 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-coral-500" /> Crear comida personalizada
          </h3>
          <button onClick={handleClose} className="p-1 rounded-full hover:bg-cream-100 text-mirtilo-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div>
          <label className="text-xs font-bold text-mirtilo-700 dark:text-cream-200 block mb-1.5">
            Nombre de la comida
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ej: Asado al horno con papas"
            className="w-full px-3.5 py-2.5 bg-cream-50 dark:bg-mirtilo-700 border border-cream-200 dark:border-mirtilo-600 rounded-xl text-xs text-mirtilo-800 dark:text-cream-100 placeholder-mirtilo-400 focus:outline-none focus:ring-2 focus:ring-coral-500/50"
          />
          <span className="text-[10px] text-mirtilo-400 mt-1 block">Categoría: Almuerzo/Cena</span>
        </div>

        <div>
          <label className="text-xs font-bold text-mirtilo-700 dark:text-cream-200 block mb-1.5">
            Ingredientes (para sumarlos a tu lista de compras)
          </label>

          {ingredients.length > 0 && (
            <div className="space-y-1.5 mb-2">
              {ingredients.map((ing, idx) => (
                <div key={idx} className="flex items-center justify-between px-3 py-2 rounded-xl bg-cream-50 dark:bg-mirtilo-700 border border-cream-200 dark:border-mirtilo-600 text-xs">
                  <span className="text-mirtilo-700 dark:text-cream-200 font-semibold">
                    {ing.nombre} <span className="text-mirtilo-400 font-medium">({ing.cantidad} {ing.unidad} · {ing.categoria})</span>
                  </span>
                  <button onClick={() => handleRemoveDraft(idx)} className="text-mirtilo-400 hover:text-coral-500">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
            <input
              type="text"
              value={draft.nombre}
              onChange={(e) => setDraft(prev => ({ ...prev, nombre: e.target.value }))}
              placeholder="Ingrediente"
              className="sm:col-span-2 px-3 py-2 bg-cream-50 dark:bg-mirtilo-800 border border-cream-200 dark:border-mirtilo-600 rounded-xl text-xs text-mirtilo-800 dark:text-cream-100 focus:outline-none"
            />
            <input
              type="number"
              min="1"
              value={draft.cantidad}
              onChange={(e) => setDraft(prev => ({ ...prev, cantidad: Number(e.target.value) || 1 }))}
              className="px-3 py-2 bg-cream-50 dark:bg-mirtilo-800 border border-cream-200 dark:border-mirtilo-600 rounded-xl text-xs text-mirtilo-800 dark:text-cream-100 focus:outline-none"
            />
            <select
              value={draft.categoria}
              onChange={(e) => setDraft(prev => ({ ...prev, categoria: e.target.value }))}
              className="px-2 py-2 bg-cream-50 dark:bg-mirtilo-800 border border-cream-200 dark:border-mirtilo-600 rounded-xl text-xs text-mirtilo-800 dark:text-cream-100 focus:outline-none"
            >
              {SHOPPING_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <button
              onClick={handleAddDraft}
              className="px-3 py-2 rounded-xl bg-cream-200 dark:bg-mirtilo-600 text-mirtilo-700 dark:text-cream-100 font-bold text-xs hover:bg-cream-300 transition-all flex items-center justify-center gap-1"
            >
              <Plus className="w-3.5 h-3.5" /> Agregar
            </button>
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <button
            onClick={handleClose}
            className="px-4 py-2.5 rounded-2xl bg-cream-200 dark:bg-mirtilo-700 text-mirtilo-700 dark:text-cream-200 font-bold text-xs"
          >
            Cancelar
          </button>
          <button
            disabled={!name.trim()}
            onClick={handleSave}
            className="flex-1 py-2.5 rounded-2xl bg-coral-500 text-white font-bold text-xs shadow-soft hover:bg-coral-600 disabled:opacity-50 transition-all"
          >
            Guardar comida personalizada
          </button>
        </div>
      </div>
    </div>
  );
};
