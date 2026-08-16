import React, { useState, useEffect } from 'react';
import { useApp, AppProvider } from './context/AppContext';
import { MainLayout } from './components/layout/MainLayout';
import { HomeView } from './components/home/HomeView';
import { RecipesView } from './components/recipes/RecipesView';
import { ShoppingListView } from './components/shopping/ShoppingListView';
import { ProfileView } from './components/profile/ProfileView';
import { WeeklyPlannerView } from './components/planner/WeeklyPlannerView';

import { RecipeDetailModal } from './components/recipes/RecipeDetailModal';
import { IngredientMatcherModal } from './components/pantry/IngredientMatcherModal';
import { LunchboxBuilderModal } from './components/lunchbox/LunchboxBuilderModal';
import { OnboardingModal } from './components/onboarding/OnboardingModal';
import { SplashScreen } from './components/auth/SplashScreen';
import { AuthScreen } from './components/auth/AuthScreen';


function AppContent() {
  const { 
    activeTab,
    setActiveTab,
    isPantryModalOpen,
    setIsPantryModalOpen,
    isLunchboxModalOpen, 
    setIsLunchboxModalOpen,
    selectedRecipeDetail,
    setSelectedRecipeDetail,
    setIsOnboardingOpen
  } = useApp();

  // Check first time onboarding
  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem('cs_onboarding_done');
    if (!hasSeenOnboarding) {
      setIsOnboardingOpen(true);
      localStorage.setItem('cs_onboarding_done', 'true');
    }
  }, [setIsOnboardingOpen]);

  const handleSelectRecipe = (recipe) => {
    setSelectedRecipeDetail(recipe);
  };

  return (
    <MainLayout>
      {/* Top Banner Navigation Shortcut for Weekly Planner */}
      <div className="mb-4 flex items-center justify-between bg-cream-50 dark:bg-mirtilo-700/50 p-2.5 px-4 rounded-2xl border border-cream-200 dark:border-mirtilo-600 text-xs">
        <span className="font-extrabold text-mirtilo-700 dark:text-cream-200">
          📍 Vista actual: {activeTab === 'home' ? 'Inicio' : activeTab === 'recipes' ? 'Catálogo de Recetas' : activeTab === 'planner' ? 'Planificador Semanal' : activeTab === 'shopping' ? 'Lista de Compras' : 'Mi Perfil'}
        </span>
        {activeTab !== 'planner' ? (
          <button
            onClick={() => setActiveTab('planner')}
            className="font-bold text-coral-500 hover:underline flex items-center gap-1"
          >
            📅 Ir a Menú Semanal ➜
          </button>
        ) : (
          <button
            onClick={() => setActiveTab('home')}
            className="font-bold text-coral-500 hover:underline flex items-center gap-1"
          >
            🏠 Ir a Inicio ➜
          </button>
        )}
      </div>

      {/* Main View Router */}
      {activeTab === 'home' && <HomeView onSelectRecipe={handleSelectRecipe} />}
      {activeTab === 'recipes' && <RecipesView onSelectRecipe={handleSelectRecipe} />}
      {activeTab === 'planner' && <WeeklyPlannerView onSelectRecipe={handleSelectRecipe} />}
      {activeTab === 'shopping' && <ShoppingListView />}
      {activeTab === 'profile' && <ProfileView onSelectRecipe={handleSelectRecipe} />}

      {/* Global Modals */}
      <RecipeDetailModal
        recipe={selectedRecipeDetail}
        onClose={() => setSelectedRecipeDetail(null)}
        onSelectRelated={(r) => setSelectedRecipeDetail(r)}
      />

      <IngredientMatcherModal
        isOpen={isPantryModalOpen}
        onClose={() => setIsPantryModalOpen(false)}
        onSelectRecipe={handleSelectRecipe}
      />

      <LunchboxBuilderModal
        isOpen={isLunchboxModalOpen}
        onClose={() => setIsLunchboxModalOpen(false)}
      />

      <OnboardingModal />
    </MainLayout>
  );
}

function Root() {
  const { isAuthenticated } = useApp();
  const [showSplash, setShowSplash] = useState(() => localStorage.getItem('cs_seen_splash') === 'true');

  // 1) Primer contacto del usuario: pantalla de login/registro.
  if (!isAuthenticated) {
    return <AuthScreen />;
  }

  // 2) Recién después de autenticarse (login o registro exitoso) se muestra la bienvenida, una sola vez.
  if (!showSplash) {
    return (
      <SplashScreen
        onContinue={() => {
          localStorage.setItem('cs_seen_splash', 'true');
          setShowSplash(true);
        }}
      />
    );
  }

  // 3) Recién ahí, la app.
  return <AppContent />;
}

export default function App() {
  return (
    <AppProvider>
      <Root />
    </AppProvider>
  );
}
