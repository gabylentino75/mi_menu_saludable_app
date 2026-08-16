import React from 'react';
import { useApp } from '../../context/AppContext';
import { Home, Utensils, Calendar, ShoppingBag, User, LogOut, X } from 'lucide-react';

const MENU_ITEMS = [
  { id: 'home', label: 'Inicio', icon: Home },
  { id: 'recipes', label: 'Catálogo de recetas', icon: Utensils },
  { id: 'planner', label: 'Planificador semanal', icon: Calendar },
  { id: 'shopping', label: 'Lista de compras', icon: ShoppingBag },
  { id: 'profile', label: 'Mi perfil', icon: User }
];

export const SideMenu = () => {
  const { isMenuOpen, setIsMenuOpen, activeTab, setActiveTab, user, logout } = useApp();

  if (!isMenuOpen) return null;

  const handleSelect = (id) => {
    setActiveTab(id);
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    setIsMenuOpen(false);
    logout();
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <button
        type="button"
        aria-label="Cerrar menú"
        onClick={() => setIsMenuOpen(false)}
        className="absolute inset-0 bg-mirtilo-800/40 animate-fadeIn"
      />

      {/* Drawer */}
      <div className="relative w-72 max-w-[80%] h-full bg-white dark:bg-mirtilo-800 shadow-xl flex flex-col animate-slideIn">
        <div className="flex items-center justify-between p-4 border-b border-cream-200 dark:border-mirtilo-600">
          <div className="min-w-0">
            <p className="font-bold text-sm text-mirtilo-800 dark:text-cream-100 truncate">
              {user.nombre}
            </p>
            <p className="text-xs text-mirtilo-500 dark:text-cream-300 truncate">
              {user.email}
            </p>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-xl text-mirtilo-500 dark:text-cream-300 hover:bg-cream-100 dark:hover:bg-mirtilo-700 transition-colors shrink-0"
            aria-label="Cerrar menú"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {MENU_ITEMS.map(({ id, label, icon: Icon }) => {
            const isActive = activeTab === id;
            return (
              <button
                key={id}
                onClick={() => handleSelect(id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-coral-100 text-coral-600 dark:bg-coral-500/20 dark:text-coral-300'
                    : 'text-mirtilo-700 dark:text-cream-200 hover:bg-cream-100 dark:hover:bg-mirtilo-700'
                }`}
              >
                <Icon className="w-5 h-5" />
                {label}
              </button>
            );
          })}
        </nav>

        <div className="p-3 border-t border-cream-200 dark:border-mirtilo-600">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-coral-600 hover:bg-coral-50 dark:hover:bg-mirtilo-700 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};
