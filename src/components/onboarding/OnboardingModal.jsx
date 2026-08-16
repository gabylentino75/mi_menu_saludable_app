import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Sparkles, Users, Clock, Target, ShieldAlert, ArrowRight } from 'lucide-react';

export const OnboardingModal = () => {
  const { user, setUser, isOnboardingOpen, setIsOnboardingOpen } = useApp();

  const [step, setStep] = useState(1);
  const [nombre, setNombre] = useState(user?.nombre && user.nombre !== 'Familia Saludable' ? user.nombre : '');
  const [personas, setPersonas] = useState(2);
  const [tiempoDisponible, setTiempoDisponible] = useState(20);
  const [objetivo, setObjetivo] = useState('Ahorrar tiempo y comer balanceado');
  const [restricciones, setRestricciones] = useState([]);

  if (!isOnboardingOpen) return null;

  const restrictionOptions = ['Sin Gluten', 'Vegetariana', 'Vegano', 'Sin Lactosa', 'Bajo en Sodio'];

  const toggleRestriction = (r) => {
    setRestricciones(prev => prev.includes(r) ? prev.filter(x => x !== r) : [...prev, r]);
  };

  const handleFinish = () => {
    setUser({
      ...user,
      nombre: nombre.trim() || 'Familia Saludable',
      personas_cocina: Number(personas),
      tiempo_disponible: Number(tiempoDisponible),
      objetivo,
      restricciones
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
            Personaliza tu experiencia de cocina en 4 preguntas rápidas
          </p>
        </div>

        {/* Step 1: Who do you cook for? */}
        {step === 1 && (
          <div className="space-y-4">
            <label className="font-bold text-sm block flex items-center gap-1.5">
              <Users className="w-4 h-4 text-coral-500" /> 1. ¿Cómo te llamamos y para cuántos cocinás?
            </label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Tu nombre o apodo (ej: Ana, Familia García)..."
              className="w-full px-4 py-3 bg-cream-50 dark:bg-mirtilo-700 border border-cream-200 dark:border-mirtilo-600 rounded-2xl text-xs text-mirtilo-800 dark:text-cream-100 focus:outline-none"
            />
            <div>
              <span className="text-xs text-mirtilo-500 block mb-1">Comensales: {personas} persona(s)</span>
              <input
                type="range"
                min="1"
                max="8"
                value={personas}
                onChange={(e) => setPersonas(e.target.value)}
                className="w-full accent-coral-500"
              />
            </div>
            <button
              onClick={() => setStep(2)}
              className="w-full py-3 rounded-2xl bg-coral-500 text-white font-bold text-xs shadow-soft hover:bg-coral-600 transition-all flex items-center justify-center gap-1"
            >
              Siguiente <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Step 2: Time available */}
        {step === 2 && (
          <div className="space-y-4">
            <label className="font-bold text-sm block flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-coral-500" /> 2. ¿Cuánto tiempo habitual tenés para cocinar?
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs font-bold">
              {[10, 15, 20, 30].map(mins => (
                <button
                  key={mins}
                  onClick={() => setTiempoDisponible(mins)}
                  className={`p-3 rounded-2xl border transition-all ${
                    tiempoDisponible === mins
                      ? 'bg-coral-500 text-white border-coral-500 shadow-soft'
                      : 'bg-cream-50 dark:bg-mirtilo-700 border-cream-200 dark:border-mirtilo-600'
                  }`}
                >
                  ⏱️ {mins} minutos
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={() => setStep(1)} className="px-4 py-2.5 rounded-2xl bg-cream-200 dark:bg-mirtilo-700 font-bold text-xs">
                Atrás
              </button>
              <button
                onClick={() => setStep(3)}
                className="flex-1 py-2.5 rounded-2xl bg-coral-500 text-white font-bold text-xs shadow-soft hover:bg-coral-600 transition-all flex items-center justify-center gap-1"
              >
                Siguiente <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Objective */}
        {step === 3 && (
          <div className="space-y-4">
            <label className="font-bold text-sm block flex items-center gap-1.5">
              <Target className="w-4 h-4 text-coral-500" /> 3. ¿Cuál es tu objetivo principal?
            </label>
            <div className="space-y-2 text-xs font-bold">
              {[
                'Ahorrar tiempo y comer balanceado',
                'Organizar viandas para chicos',
                'Aprender recetas saludables fáciles',
                'Reducir desperdicios de despensa'
              ].map(obj => (
                <button
                  key={obj}
                  onClick={() => setObjetivo(obj)}
                  className={`w-full p-3 rounded-2xl border text-left transition-all ${
                    objetivo === obj
                      ? 'bg-coral-500 text-white border-coral-500 shadow-soft'
                      : 'bg-cream-50 dark:bg-mirtilo-700 border-cream-200 dark:border-mirtilo-600'
                  }`}
                >
                  🎯 {obj}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={() => setStep(2)} className="px-4 py-2.5 rounded-2xl bg-cream-200 dark:bg-mirtilo-700 font-bold text-xs">
                Atrás
              </button>
              <button
                onClick={() => setStep(4)}
                className="flex-1 py-2.5 rounded-2xl bg-coral-500 text-white font-bold text-xs shadow-soft hover:bg-coral-600 transition-all flex items-center justify-center gap-1"
              >
                Siguiente <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Restrictions & Finish */}
        {step === 4 && (
          <div className="space-y-4">
            <label className="font-bold text-sm block flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-coral-500" /> 4. Restricciones o alergias alimentarias:
            </label>
            <div className="flex flex-wrap gap-2">
              {restrictionOptions.map(rest => {
                const isSel = restricciones.includes(rest);
                return (
                  <button
                    key={rest}
                    onClick={() => toggleRestriction(rest)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                      isSel ? 'bg-coral-500 text-white shadow-soft' : 'bg-cream-100 dark:bg-mirtilo-700 text-mirtilo-700 dark:text-cream-200'
                    }`}
                  >
                    {isSel ? '✓ ' : '+ '} {rest}
                  </button>
                );
              })}
            </div>
            <div className="flex gap-2 pt-2">
              <button onClick={() => setStep(3)} className="px-4 py-2.5 rounded-2xl bg-cream-200 dark:bg-mirtilo-700 font-bold text-xs">
                Atrás
              </button>
              <button
                onClick={handleFinish}
                className="flex-1 py-3 rounded-2xl bg-coral-500 text-white font-bold text-xs shadow-sm hover:opacity-95 transition-all"
              >
                🚀 ¡Empezar a cocinar!
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
