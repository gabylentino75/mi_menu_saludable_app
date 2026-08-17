import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { EXTENDED_RECIPES, findLunchboxComponentById } from '../../data/recipesData';
import { RecipeCard } from '../recipes/RecipeCard';
import { RecipeImage } from '../recipes/RecipeImage';
import { User, Heart, Settings, ShieldCheck, Smartphone, Check, Moon, Sun, LogOut, Package, Trash2 } from 'lucide-react';

export const ProfileView = ({ onSelectRecipe }) => {
  const { user, setUser, favorites, darkMode, toggleDarkMode, logout, savedLunchboxes, removeLunchbox } = useApp();

  const [nombre, setNombre] = useState(user.nombre || '');
  const [personas, setPersonas] = useState(user.personas_cocina || 2);
  const [objetivo, setObjetivo] = useState(user.objetivo || 'Ahorrar tiempo y comer balanceado');
  const [restricciones, setRestricciones] = useState(user.restricciones || []);
  const [savedToast, setSavedToast] = useState(false);

  const restrictionOptions = ['Sin Gluten', 'Vegetariana', 'Vegano', 'Sin Lactosa', 'Bajo en Sodio'];

  const toggleRestriction = (rest) => {
    setRestricciones(prev =>
      prev.includes(rest) ? prev.filter(r => r !== rest) : [...prev, rest]
    );
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      nombre,
      personas_cocina: Number(personas),
      objetivo,
      restricciones
    });
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 2000);
  };

  // Recetas favoritas del usuario
  const favoriteRecipes = favorites
    .map(id => EXTENDED_RECIPES.find(r => r.id === id))
    .filter(Boolean);

  // Viandas armadas con el Constructor de Viandas
  const lunchboxesWithRecipes = (savedLunchboxes || [])
    .map(lb => ({
      ...lb,
      principal: findLunchboxComponentById(lb.principalId),
      fruta: findLunchboxComponentById(lb.frutaId),
      complemento: findLunchboxComponentById(lb.complementoId),
      bebida: findLunchboxComponentById(lb.bebidaId)
    }))
    .filter(lb => lb.principal && lb.fruta && lb.complemento && lb.bebida);

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Header Profile Badge */}
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-peach-300 text-mirtilo-800 font-bold text-2xl flex items-center justify-center shadow-sm">
          {nombre.charAt(0).toUpperCase() || 'U'}
        </div>
        <div>
          <h2 className="text-lg font-bold text-mirtilo-800 dark:text-cream-100">
            {nombre || 'Mi Perfil'}
          </h2>
          <p className="text-xs text-mirtilo-500 dark:text-cream-300 font-medium">
            {user.email || 'usuario@ejemplo.com'}
          </p>
          <button type="button" className="text-xs font-bold text-coral-500 mt-0.5">
            Editar perfil
          </button>
          {restricciones.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {restricciones.map(r => (
                <span key={r} className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-coral-100 text-coral-600">
                  {r}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {savedToast && (
        <div className="p-3 bg-mint-500 text-white font-bold text-xs rounded-2xl flex items-center justify-center gap-2 animate-fadeIn shadow-soft">
          <Check className="w-4 h-4" /> ¡Preferencias guardadas exitosamente!
        </div>
      )}

      {/* User Preferences Form */}
      <form onSubmit={handleSaveProfile} className="bg-white dark:bg-mirtilo-700/80 rounded-2xl p-5 border border-cream-200 dark:border-mirtilo-600 shadow-sm space-y-4">
        <h3 className="font-bold text-sm text-mirtilo-800 dark:text-cream-100 flex items-center gap-2 border-b border-cream-100 dark:border-mirtilo-600 pb-2">
          <Settings className="w-4 h-4 text-coral-500" />
          Preferencias Alimentarias & Perfil
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="font-bold text-mirtilo-700 dark:text-cream-200 block mb-1">
              Nombre o Apodo:
            </label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-cream-50 dark:bg-mirtilo-800 border border-cream-200 dark:border-mirtilo-600 rounded-xl text-mirtilo-800 dark:text-cream-100 focus:outline-none focus:ring-2 focus:ring-coral-500/50"
            />
          </div>

          <div>
            <label className="font-bold text-mirtilo-700 dark:text-cream-200 block mb-1">
              ¿Para cuántas personas cocinás habitual?
            </label>
            <input
              type="number"
              min="1"
              max="10"
              value={personas}
              onChange={(e) => setPersonas(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-cream-50 dark:bg-mirtilo-800 border border-cream-200 dark:border-mirtilo-600 rounded-xl text-mirtilo-800 dark:text-cream-100 focus:outline-none focus:ring-2 focus:ring-coral-500/50"
            />
          </div>
        </div>

        <div>
          <label className="font-bold text-mirtilo-700 dark:text-cream-200 block mb-1 text-xs">
            Objetivo Principal:
          </label>
          <select
            value={objetivo}
            onChange={(e) => setObjetivo(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-cream-50 dark:bg-mirtilo-800 border border-cream-200 dark:border-mirtilo-600 rounded-xl text-xs text-mirtilo-800 dark:text-cream-100 focus:outline-none"
          >
            <option value="Ahorrar tiempo y comer balanceado">Ahorrar tiempo y comer balanceado</option>
            <option value="Organizar viandas para chicos">Organizar viandas para chicos</option>
            <option value="Aprender recetas saludables fáciles">Aprender recetas saludables fáciles</option>
            <option value="Reducir desperdicios de despensa">Reducir desperdicios de despensa</option>
          </select>
        </div>

        <div>
          <label className="font-bold text-mirtilo-700 dark:text-cream-200 block mb-2 text-xs">
            Restricciones o Alergias Alimentarias:
          </label>
          <div className="flex flex-wrap gap-2">
            {restrictionOptions.map((rest) => {
              const isSelected = restricciones.includes(rest);
              return (
                <button
                  type="button"
                  key={rest}
                  onClick={() => toggleRestriction(rest)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-coral-500 text-white shadow-soft'
                      : 'bg-cream-100 dark:bg-mirtilo-800 text-mirtilo-600 dark:text-cream-300 hover:bg-cream-200'
                  }`}
                >
                  {isSelected ? '✓ ' : '+ '} {rest}
                </button>
              );
            })}
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2.5 rounded-xl bg-coral-500 text-white font-bold text-xs shadow-soft hover:bg-coral-600 transition-all"
        >
          Guardar Cambios de Perfil
        </button>
      </form>

      {/* Favorite Recipes Section */}
      <div className="space-y-3">
        <h3 className="font-bold text-base text-mirtilo-800 dark:text-cream-100 flex items-center gap-2">
          <Heart className="w-4 h-4 text-coral-500 fill-coral-500" />
          Mis Recetas Favoritas ({favoriteRecipes.length})
        </h3>

        {favoriteRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {favoriteRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onSelect={onSelectRecipe}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-8 bg-white dark:bg-mirtilo-700/40 rounded-2xl border border-dashed border-cream-300 dark:border-mirtilo-600 p-4 text-xs text-mirtilo-500 dark:text-cream-300">
            Aún no has marcado recetas favoritas. Toca el corazón en cualquier tarjeta para guardarla aquí.
          </div>
        )}
      </div>

      {/* Saved Lunchboxes Section */}
      <div className="space-y-3">
        <h3 className="font-bold text-base text-mirtilo-800 dark:text-cream-100 flex items-center gap-2">
          <Package className="w-4 h-4 text-coral-500" />
          Mis Viandas Armadas ({lunchboxesWithRecipes.length})
        </h3>

        {lunchboxesWithRecipes.length > 0 ? (
          <div className="space-y-2.5">
            {lunchboxesWithRecipes.map((lb) => (
              <div
                key={lb.id}
                className="bg-white dark:bg-mirtilo-700/80 rounded-2xl p-4 border border-cream-200 dark:border-mirtilo-600 shadow-sm"
              >
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[10px] font-bold text-mirtilo-400 dark:text-cream-400">
                    {new Date(lb.fecha).toLocaleDateString('es-AR', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </span>
                  <button
                    onClick={() => removeLunchbox(lb.id)}
                    className="p-1.5 rounded-full hover:bg-cream-100 dark:hover:bg-mirtilo-600 text-mirtilo-400 dark:text-cream-400"
                    aria-label="Eliminar vianda"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2 text-center">
                  {[lb.principal, lb.fruta, lb.complemento, lb.bebida].map((recipe, idx) => (
                    <button
                      key={idx}
                      onClick={() => onSelectRecipe && onSelectRecipe(recipe)}
                      className="flex flex-col items-center gap-1 p-2 rounded-xl bg-cream-50 dark:bg-mirtilo-800 hover:bg-cream-100 dark:hover:bg-mirtilo-600 transition-colors"
                    >
                      <RecipeImage recipe={recipe} className="h-10 w-10 rounded-lg" emojiClassName="text-xl" />
                      <span className="text-[10px] font-semibold text-mirtilo-700 dark:text-cream-200 line-clamp-2 leading-tight">
                        {recipe.nombre}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 bg-white dark:bg-mirtilo-700/40 rounded-2xl border border-dashed border-cream-300 dark:border-mirtilo-600 p-4 text-xs text-mirtilo-500 dark:text-cream-300">
            Todavía no armaste ninguna vianda. Usá el "Constructor de Viandas" desde el catálogo de recetas para armar una.
          </div>
        )}
      </div>

      {/* PWA & System Status Card */}
      <div className="bg-white dark:bg-mirtilo-700/80 rounded-2xl p-5 border border-cream-200 dark:border-mirtilo-600 shadow-sm space-y-3">
        <h3 className="font-bold text-sm text-mirtilo-800 dark:text-cream-100 flex items-center gap-2">
          <Smartphone className="w-4 h-4 text-mint-500" />
          Estado de PWA & Funcionamiento Offline
        </h3>
        <p className="text-xs text-mirtilo-600 dark:text-cream-300 leading-relaxed">
          Esta aplicación está optimizada como Progressive Web App (PWA). Podes instalarla en tu pantalla de inicio desde el menú de tu navegador para usarla sin conexión.
        </p>
        <div className="p-3 rounded-2xl bg-mint-50 dark:bg-mint-600/20 border border-mint-200 text-mint-700 dark:text-mint-300 text-xs font-bold flex items-center gap-2">
          <ShieldCheck className="w-4 h-4" /> Service Worker y Almacenamiento Local Activos (Offline Ready)
        </div>
      </div>

      <button
        onClick={logout}
        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-coral-100 text-coral-600 font-bold text-sm shadow-sm"
      >
        <LogOut className="w-4 h-4" /> Cerrar sesión
      </button>

    </div>
  );
};
