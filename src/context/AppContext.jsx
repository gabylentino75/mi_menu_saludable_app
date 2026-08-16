import React, { createContext, useContext, useState, useEffect } from 'react';
import { EXTENDED_RECIPES } from '../data/recipesData';

const AppContext = createContext();

const INITIAL_USER = {
  nombre: 'Familia Saludable',
  email: 'usuario@ejemplo.com',
  personas_cocina: 2,
  objetivo: 'Ahorrar tiempo y comer variado',
  restricciones: [], // Sin gluten, Vegetariano, Vegano, Sin lactosa
  ingredientes_despensa: ['huevo', 'avena', 'tomate', 'palta', 'queso', 'zanahoria', 'leche']
};

const DEFAULT_WEEKLY_PLAN = {
  lunes: { almuerzo: 'AC01', cena: 'AC02' },
  martes: { almuerzo: 'AC03', cena: 'AC09' },
  miercoles: { almuerzo: 'AC05', cena: 'AC10' },
  jueves: { almuerzo: 'AC08', cena: 'AC04' },
  viernes: { almuerzo: 'AC02', cena: 'AC06' },
  sabado: { almuerzo: 'AC12', cena: 'AC11' },
  domingo: { almuerzo: 'AC16', cena: 'AC07' }
};

export const AppProvider = ({ children }) => {
  // Navigation & View States
  const [activeTab, setActiveTab] = useState('home'); // home | recipes | shopping | profile
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('cs_dark_mode') === 'true';
  });

  // User & Preferences
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('cs_user');
    return saved ? JSON.parse(saved) : INITIAL_USER;
  });

  // Favorites
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('cs_favorites');
    return saved ? JSON.parse(saved) : ['BM01', 'AC01', 'VE01'];
  });

  // Shopping List
  const [shoppingList, setShoppingList] = useState(() => {
    const saved = localStorage.getItem('cs_shopping_list');
    if (saved) return JSON.parse(saved);
    
    // Initial default items for demonstration
    return [
      { id: 'shop-1', nombre: 'Avena arrollada', cantidad: 200, unidad: 'g', categoria: 'Almacén', comprado: false, fuente: 'Overnight Oats' },
      { id: 'shop-2', nombre: 'Tomate perita', cantidad: 4, unidad: 'unid', categoria: 'Verduras', comprado: false, fuente: 'Bowl Mediterráneo' },
      { id: 'shop-3', nombre: 'Queso feta', cantidad: 100, unidad: 'g', categoria: 'Lácteos y Bebidas', comprado: true, fuente: 'Bowl Mediterráneo' },
      { id: 'shop-4', nombre: 'Palta madura', cantidad: 3, unidad: 'unid', categoria: 'Verduras', comprado: false, fuente: 'Tostadas de Palta' }
    ];
  });

  // Weekly Meal Plan
  const [weeklyPlan, setWeeklyPlan] = useState(() => {
    const saved = localStorage.getItem('cs_weekly_plan');
    return saved ? JSON.parse(saved) : DEFAULT_WEEKLY_PLAN;
  });

  // Viandas armadas con el Constructor de Viandas
  const [savedLunchboxes, setSavedLunchboxes] = useState(() => {
    const saved = localStorage.getItem('cs_lunchboxes');
    return saved ? JSON.parse(saved) : [];
  });

  // Modals & Active Viewers
  const [isPantryModalOpen, setIsPantryModalOpen] = useState(false);
  const [isLunchboxModalOpen, setIsLunchboxModalOpen] = useState(false);
  const [selectedRecipeDetail, setSelectedRecipeDetail] = useState(null);
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Autenticación (local, sin backend todavía — se puede conectar Supabase más adelante)
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('cs_authenticated') === 'true';
  });

  // Sync to LocalStorage
  useEffect(() => {
    localStorage.setItem('cs_dark_mode', darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('cs_user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem('cs_favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('cs_shopping_list', JSON.stringify(shoppingList));
  }, [shoppingList]);

  useEffect(() => {
    localStorage.setItem('cs_weekly_plan', JSON.stringify(weeklyPlan));
  }, [weeklyPlan]);

  useEffect(() => {
    localStorage.setItem('cs_lunchboxes', JSON.stringify(savedLunchboxes));
  }, [savedLunchboxes]);

  // Actions
  const toggleDarkMode = () => setDarkMode(prev => !prev);

  // Login / Registro — hoy simulados en local (no hay backend conectado todavía).
  // Cuando se conecte Supabase, reemplazar por supabase.auth.signInWithPassword / signUp.
  const login = ({ email }) => {
    setUser(prev => ({ ...prev, email: email || prev.email }));
    setIsAuthenticated(true);
    localStorage.setItem('cs_authenticated', 'true');
  };

  const register = ({ nombre, email }) => {
    setUser(prev => ({ ...prev, nombre: nombre || prev.nombre, email: email || prev.email }));
    setIsAuthenticated(true);
    localStorage.setItem('cs_authenticated', 'true');
    localStorage.setItem('cs_has_account', 'true');
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.setItem('cs_authenticated', 'false');
  };

  const toggleFavorite = (recipeId) => {
    setFavorites(prev => 
      prev.includes(recipeId) 
        ? prev.filter(id => id !== recipeId)
        : [...prev, recipeId]
    );
  };

  // Consolidador Inteligente de Lista de Compras
  const addIngredientsToShoppingList = (ingredientsArray, sourceName = 'Receta') => {
    setShoppingList(prevList => {
      const newList = [...prevList];

      ingredientsArray.forEach(ing => {
        const cleanName = ing.nombre.trim();
        const existingIndex = newList.findIndex(
          item => item.nombre.toLowerCase() === cleanName.toLowerCase() && item.unidad.toLowerCase() === (ing.unidad || '').toLowerCase()
        );

        if (existingIndex >= 0) {
          // Sumar cantidades si la unidad coincide
          const existing = newList[existingIndex];
          const updatedQty = (typeof existing.cantidad === 'number' && typeof ing.cantidad === 'number')
            ? existing.cantidad + ing.cantidad
            : existing.cantidad;
          
          newList[existingIndex] = {
            ...existing,
            cantidad: updatedQty,
            fuente: `${existing.fuente}, ${sourceName}`
          };
        } else {
          // Agregar nuevo item
          newList.push({
            id: `shop-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
            nombre: cleanName,
            cantidad: ing.cantidad || 1,
            unidad: ing.unidad || 'unid',
            categoria: ing.categoria || 'Almacén',
            comprado: false,
            fuente: sourceName
          });
        }
      });

      return newList;
    });
  };

  const addRecipeToShoppingList = (recipe) => {
    if (!recipe || !recipe.ingredientes) return;
    addIngredientsToShoppingList(recipe.ingredientes, recipe.nombre);
  };

  const addLunchboxToShoppingList = (principal, fruit, complement) => {
    const allIngs = [];
    let titleParts = [];

    if (principal && principal.ingredientes) {
      allIngs.push(...principal.ingredientes);
      titleParts.push(principal.nombre);
    }
    if (fruit && fruit.ingredientes) {
      allIngs.push(...fruit.ingredientes);
      titleParts.push(fruit.nombre);
    }
    if (complement && complement.ingredientes) {
      allIngs.push(...complement.ingredientes);
      titleParts.push(complement.nombre);
    }

    addIngredientsToShoppingList(allIngs, `Vianda Escolar (${titleParts.join(' + ')})`);
  };

  const saveLunchbox = (principal, fruit, complement) => {
    if (!principal || !fruit || !complement) return;
    setSavedLunchboxes(prev => [
      {
        id: `lunchbox-${Date.now()}`,
        fecha: new Date().toISOString(),
        principalId: principal.id,
        frutaId: fruit.id,
        complementoId: complement.id
      },
      ...prev
    ]);
  };

  const removeLunchbox = (lunchboxId) => {
    setSavedLunchboxes(prev => prev.filter(lb => lb.id !== lunchboxId));
  };

  const toggleShoppingItem = (itemId) => {
    setShoppingList(prev => 
      prev.map(item => item.id === itemId ? { ...item, comprado: !item.comprado } : item)
    );
  };

  const removeShoppingItem = (itemId) => {
    setShoppingList(prev => prev.filter(item => item.id !== itemId));
  };

  const clearCompletedShoppingItems = () => {
    setShoppingList(prev => prev.filter(item => !item.comprado));
  };

  const addCustomShoppingItem = (name, category = 'Almacén', amount = 1, unit = 'unid') => {
    if (!name.trim()) return;
    setShoppingList(prev => [
      ...prev,
      {
        id: `shop-custom-${Date.now()}`,
        nombre: name.trim(),
        cantidad: amount,
        unidad: unit,
        categoria: category,
        comprado: false,
        fuente: 'Agregado manualmente'
      }
    ]);
  };

  const setWeeklyMeal = (day, mealType, recipeId) => {
    setWeeklyPlan(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        [mealType]: recipeId
      }
    }));
  };

  const generateShoppingFromWeeklyPlan = () => {
    const recipeIds = new Set();
    Object.values(weeklyPlan).forEach(day => {
      if (day.almuerzo) recipeIds.add(day.almuerzo);
      if (day.cena) recipeIds.add(day.cena);
    });

    const ingredientsToCombine = [];
    recipeIds.forEach(id => {
      const recipe = EXTENDED_RECIPES.find(r => r.id === id);
      if (recipe && recipe.ingredientes) {
        ingredientsToCombine.push(...recipe.ingredientes);
      }
    });

    addIngredientsToShoppingList(ingredientsToCombine, 'Menú Semanal Consolidado');
  };

  return (
    <AppContext.Provider value={{
      activeTab,
      setActiveTab,
      darkMode,
      toggleDarkMode,
      isAuthenticated,
      login,
      register,
      logout,
      user,
      setUser,
      favorites,
      toggleFavorite,
      shoppingList,
      addRecipeToShoppingList,
      addLunchboxToShoppingList,
      savedLunchboxes,
      saveLunchbox,
      removeLunchbox,
      toggleShoppingItem,
      removeShoppingItem,
      clearCompletedShoppingItems,
      addCustomShoppingItem,
      weeklyPlan,
      setWeeklyMeal,
      generateShoppingFromWeeklyPlan,
      isPantryModalOpen,
      setIsPantryModalOpen,
      isLunchboxModalOpen,
      setIsLunchboxModalOpen,
      selectedRecipeDetail,
      setSelectedRecipeDetail,
      isOnboardingOpen,
      setIsOnboardingOpen,
      isMenuOpen,
      setIsMenuOpen
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
