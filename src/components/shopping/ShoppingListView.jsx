import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ShoppingBag, Plus, Trash2, CheckCircle2, Circle, Sparkles, Check } from 'lucide-react';
import { SHOPPING_CATEGORIES as CATEGORIES } from '../../utils/shoppingCategories';

export const ShoppingListView = () => {
  const {
    shoppingList,
    toggleShoppingItem,
    removeShoppingItem,
    clearCompletedShoppingItems,
    clearAllShoppingItems,
    addCustomShoppingItem
  } = useApp();

  const [newItemName, setNewItemName] = useState('');
  const [newItemCategory, setNewItemCategory] = useState('Almacén');
  const [newItemQty, setNewItemQty] = useState(1);
  const [newItemUnit, setNewItemUnit] = useState('unid');
  const [confirmingClearAll, setConfirmingClearAll] = useState(false);

  const handleClearAll = () => {
    clearAllShoppingItems();
    setConfirmingClearAll(false);
  };

  const handleAddCustom = (e) => {
    e.preventDefault();
    if (!newItemName.trim()) return;
    addCustomShoppingItem(newItemName, newItemCategory, Number(newItemQty) || 1, newItemUnit);
    setNewItemName('');
    setNewItemQty(1);
  };

  const pendingItems = shoppingList.filter(item => !item.comprado);
  const completedItems = shoppingList.filter(item => item.comprado);

  // Agrupar items por categoría del supermercado
  const groupedByCategory = CATEGORIES.reduce((acc, cat) => {
    const itemsInCat = shoppingList.filter(item => (item.categoria || 'Almacén') === cat);
    if (itemsInCat.length > 0) {
      acc[cat] = itemsInCat;
    }
    return acc;
  }, {});

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-mirtilo-800 dark:text-cream-100 tracking-tight flex items-center gap-2">
            <ShoppingBag className="w-6 h-6 text-coral-500" />
            Lista de Compras Inteligente
          </h2>
          <p className="text-xs text-mirtilo-500 dark:text-cream-300 font-medium">
            Agrupada por sectores del supermercado con suma numérica consolidada
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {completedItems.length > 0 && (
            <button
              onClick={clearCompletedShoppingItems}
              className="text-xs font-bold text-coral-600 hover:text-coral-700 bg-coral-100 dark:bg-coral-500/20 px-3 py-1.5 rounded-xl transition-all flex items-center gap-1"
            >
              <Trash2 className="w-3.5 h-3.5" /> Limpiar comprados
            </button>
          )}
          {shoppingList.length > 0 && (
            <button
              onClick={() => setConfirmingClearAll(true)}
              className="text-xs font-bold text-mirtilo-500 dark:text-cream-300 hover:text-coral-600 bg-cream-100 dark:bg-mirtilo-700 px-3 py-1.5 rounded-xl transition-all flex items-center gap-1"
            >
              <Trash2 className="w-3.5 h-3.5" /> Borrar toda la lista
            </button>
          )}
        </div>
      </div>

      {/* Confirmación para borrar toda la lista */}
      {confirmingClearAll && (
        <div className="p-4 rounded-2xl bg-coral-100 dark:bg-coral-500/20 border border-coral-300 dark:border-coral-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fadeIn">
          <p className="text-xs font-bold text-coral-700 dark:text-coral-200">
            ¿Seguro que querés borrar toda la lista? Esta acción no se puede deshacer.
          </p>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setConfirmingClearAll(false)}
              className="px-3.5 py-1.5 rounded-xl bg-white dark:bg-mirtilo-700 text-mirtilo-600 dark:text-cream-200 text-xs font-bold border border-cream-300 dark:border-mirtilo-600"
            >
              Cancelar
            </button>
            <button
              onClick={handleClearAll}
              className="px-3.5 py-1.5 rounded-xl bg-coral-500 text-white text-xs font-bold shadow-soft hover:bg-coral-600"
            >
              Sí, borrar todo
            </button>
          </div>
        </div>
      )}

      {/* Manual Item Add Form */}
      <form onSubmit={handleAddCustom} className="p-4 rounded-2xl bg-white dark:bg-mirtilo-700 border border-cream-200 dark:border-mirtilo-600 shadow-sm space-y-3">
        <span className="text-xs font-bold text-mirtilo-700 dark:text-cream-200 block">
          ➕ Agregar producto manualmente:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
          <input
            type="text"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            placeholder="Ej: Tomate perita, Avena, Manteca..."
            className="sm:col-span-2 px-3.5 py-2 bg-cream-50 dark:bg-mirtilo-800 border border-cream-200 dark:border-mirtilo-600 rounded-xl text-xs text-mirtilo-800 dark:text-cream-100 placeholder-mirtilo-400 focus:outline-none focus:ring-2 focus:ring-coral-500/50"
          />
          <select
            value={newItemCategory}
            onChange={(e) => setNewItemCategory(e.target.value)}
            className="px-3 py-2 bg-cream-50 dark:bg-mirtilo-800 border border-cream-200 dark:border-mirtilo-600 rounded-xl text-xs text-mirtilo-800 dark:text-cream-100 focus:outline-none"
          >
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <button
            type="submit"
            className="px-4 py-2 rounded-xl bg-coral-500 text-white font-bold text-xs hover:bg-coral-600 transition-all flex items-center justify-center gap-1 shadow-soft"
          >
            <Plus className="w-4 h-4" /> Agregar
          </button>
        </div>
      </form>

      {/* Shopping Items List Grouped by Supermarket Category */}
      {Object.keys(groupedByCategory).length > 0 ? (
        <div className="space-y-4">
          {Object.entries(groupedByCategory).map(([category, items]) => (
            <div key={category} className="bg-white dark:bg-mirtilo-700/70 rounded-2xl p-4 border border-cream-200 dark:border-mirtilo-600 shadow-sm">
              <div className="flex items-center justify-between border-b border-cream-100 dark:border-mirtilo-600 pb-2 mb-3">
                <h3 className="font-bold text-sm text-mirtilo-800 dark:text-cream-100 flex items-center gap-2">
                  <span>🛒 Sector: {category}</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-peach-100 text-peach-700 dark:bg-mirtilo-800 dark:text-peach-300">
                    {items.filter(i => !i.comprado).length} pendientes
                  </span>
                </h3>
              </div>

              <div className="space-y-2">
                {items.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => toggleShoppingItem(item.id)}
                    className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between select-none ${
                      item.comprado
                        ? 'bg-mint-50/50 dark:bg-mint-600/10 border-mint-200 dark:border-mint-600/30 text-mirtilo-400 line-through opacity-70'
                        : 'bg-cream-50 dark:bg-mirtilo-800 border-cream-200 dark:border-mirtilo-600 hover:border-coral-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {item.comprado ? (
                        <CheckCircle2 className="w-5 h-5 text-mint-500 shrink-0" />
                      ) : (
                        <Circle className="w-5 h-5 text-mirtilo-300 dark:text-mirtilo-500 shrink-0" />
                      )}
                      <div>
                        <span className="font-bold text-xs sm:text-sm text-mirtilo-800 dark:text-cream-100">
                          {item.nombre}
                        </span>
                        <span className="ml-2 text-xs font-bold text-coral-600 dark:text-coral-400">
                          ({item.cantidad} {item.unidad})
                        </span>
                        {item.fuente && (
                          <span className="block text-[10px] text-mirtilo-400 dark:text-cream-400 font-medium">
                            Fuente: {item.fuente}
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeShoppingItem(item.id);
                      }}
                      className="p-1.5 rounded-lg hover:bg-cream-200 dark:hover:bg-mirtilo-600 text-mirtilo-400 hover:text-coral-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white dark:bg-mirtilo-700/40 rounded-2xl border border-dashed border-cream-300 dark:border-mirtilo-600 p-6 space-y-3">
          <span className="text-4xl">🛒</span>
          <h3 className="font-bold text-base text-mirtilo-800 dark:text-cream-100">
            Tu Lista de Compras está vacía
          </h3>
          <p className="text-xs text-mirtilo-500 dark:text-cream-300 max-w-sm mx-auto">
            Explora las recetas del catálogo, arma una vianda escolar o genera tu menú semanal para sumar ingredientes automáticamente.
          </p>
        </div>
      )}

    </div>
  );
};
