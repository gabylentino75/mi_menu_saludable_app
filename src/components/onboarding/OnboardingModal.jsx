import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Users } from 'lucide-react';

export const OnboardingModal = () => {
  const { user, setUser, isOnboardingOpen, setIsOnboardingOpen } = useApp();

  const [nombre, setNombre] = useState(user?.nombre && user.nombre !== 'Familia Saludable' ? user.nombre : '');

  if (!isOnboardingOpen) return null;

  const handleFinish = () => {
    setUser({
      ...user,
      nombre: nombre.trim() || 'Familia Saludable'
    });
    setIsOnboardingOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-mirtilo-900/70 backdrop-blur-md animate-fadeIn">
      <div className="bg-white dark:bg-mirtilo-800 rounded-2xl max-w-md w-full p-6 shadow-2xl border border-cream-200 dark:border-mirtilo-700 space-y-6 text-mirtilo-800 dark:text-cream-100">

        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-coral-500 text-white text-3xl font-bold flex items-center justify-center mx-auto shadow-sm">
            🥗
          </div>
          <h2 className="text-xl font-bold">Bienvenido a Mi Menú Saludable</h2>
          <p className="text-xs text-mirtilo-500 dark:text-cream-300">
            Contanos cómo te llamamos para empezar
          </p>
        </div>

        {/* Nombre */}
        <div className="space-y-4">
          <label className="font-bold text-sm block flex items-center gap-1.5">
            <Users className="w-4 h-4 text-coral-500" /> ¿Cómo te llamamos?
          </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu nombre o apodo (ej: Ana, Familia García)..."
            className="w-full px-4 py-3 bg-cream-50 dark:bg-mirtilo-700 border border-cream-200 dark:border-mirtilo-600 rounded-2xl text-xs text-mirtilo-800 dark:text-cream-100 focus:outline-none"
          />
          <button
            onClick={handleFinish}
            className="w-full py-3 rounded-2xl bg-coral-500 text-white font-bold text-xs shadow-soft hover:bg-coral-600 transition-all"
          >
            🚀 ¡Empezar a cocinar!
          </button>
        </div>

      </div>
    </div>
  );
};
