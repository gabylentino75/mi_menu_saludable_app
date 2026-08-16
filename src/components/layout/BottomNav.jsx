import React from 'react';
import { useApp } from '../../context/AppContext';
import { Home, Utensils, ShoppingBag, User } from 'lucide-react';

export const BottomNav = () => {
  const { activeTab, setActiveTab, shoppingList } = useApp();

  const pendingItemsCount = shoppingList.filter(item => !item.comprado).length;

  const navItems = [
    { id: 'home', label: 'Inicio', icon: Home },
    { id: 'recipes', label: 'Recetas', icon: Utensils },
    { id: 'shopping', label: 'Compras', icon: ShoppingBag, badge: pendingItemsCount },
    { id: 'profile', label: 'Mi perfil', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 bg-cream-100/95 dark:bg-mirtilo-800/95 backdrop-blur-lg transition-colors">
      <div className="max-w-md mx-auto px-2 py-2 flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-1 flex-col items-center justify-center gap-0.5 py-1.5 rounded-xl text-xs transition-colors ${
                isActive
                  ? 'text-coral-500 font-bold'
                  : 'text-mirtilo-500 dark:text-cream-300 font-medium'
              }`}
            >
              <div className={`relative flex h-9 w-9 items-center justify-center rounded-full ${isActive ? 'bg-coral-500/15' : ''}`}>
                <Icon className="w-5 h-5" strokeWidth={isActive ? 2.4 : 1.9} />
                {item.badge > 0 && (
                  <span className="absolute -top-1 -right-1 bg-coral-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {item.badge > 99 ? '99+' : item.badge}
                  </span>
                )}
              </div>
              <span className="text-[11px] tracking-tight">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
