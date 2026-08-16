import React, { useState } from 'react';
import { Clock, ShoppingCart, Calendar } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const FEATURES = [
  {
    icon: Clock,
    color: 'coral',
    title: 'Recetas rápidas',
    text: 'Ideas para cocinar en minutos, sin complicarte.'
  },
  {
    icon: ShoppingCart,
    color: 'mint',
    title: 'Lista de compras inteligente',
    text: 'Se arma sola con lo que necesitás de tus recetas.'
  },
  {
    icon: Calendar,
    color: 'pinkAccent',
    title: 'Planificador semanal',
    text: 'Organizá tus almuerzos y cenas de toda la semana.'
  }
];

const ICON_WRAP_CLASSES = {
  coral: 'bg-coral-100 text-coral-500',
  mint: 'bg-mint-100 text-mint-500',
  pinkAccent: 'bg-pinkAccent-100 text-pinkAccent-500'
};

export const SplashScreen = ({ onContinue }) => {
  const { user, setUser } = useApp();
  const [nombre, setNombre] = useState(user?.nombre || '');

  const handleContinue = () => {
    const trimmed = nombre.trim();
    if (trimmed) {
      setUser((prev) => ({ ...prev, nombre: trimmed }));
    }
    onContinue();
  };

  return (
    <div className="h-screen flex flex-col bg-cream-100 px-6 py-10 overflow-hidden">
      {/* Logo */}
      <div className="flex flex-col items-center text-center shrink-0">
        <img
          src="/images/logo_app.ico"
          alt="Mi Menú Saludable"
          className="h-14 w-auto object-contain mb-3"
        />
        <h1 className="font-serif text-3xl leading-tight text-mint-600">Mi Menú Saludable</h1>
        <p className="text-sm text-mirtilo-500 mt-2 max-w-xs">
          Recetas simples para sentirte bien todos los días
        </p>
      </div>

      {/* Nombre con el que querés que te reconozca la app */}
      <div className="shrink-0 mt-6">
        <label
          htmlFor="splash-nombre"
          className="block text-center text-xs font-bold text-mirtilo-600 mb-1.5"
        >
          ¿Cómo querés que te llamemos?
        </label>
        <input
          id="splash-nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Tu nombre"
          className="w-full px-5 py-3 bg-white border-2 border-coral-400 rounded-full text-sm text-mirtilo-700 placeholder-mint-500 text-center focus:outline-none focus:ring-2 focus:ring-coral-500/30"
        />
      </div>

      {/* Destacados de la app, sin foto */}
      <div className="flex-1 min-h-0 flex flex-col justify-center gap-3 py-6">
        {FEATURES.map(({ icon: Icon, color, title, text }) => (
          <div
            key={title}
            className="flex items-center gap-4 bg-white rounded-2xl shadow-sm p-4"
          >
            <div
              className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${ICON_WRAP_CLASSES[color]}`}
            >
              <Icon className="w-5 h-5" strokeWidth={2.2} />
            </div>
            <div className="text-left">
              <p className="font-bold text-sm text-mirtilo-700">{title}</p>
              <p className="text-xs text-mirtilo-500 mt-0.5">{text}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleContinue}
        className="w-full py-3.5 rounded-2xl bg-coral-500 text-white font-bold text-sm shadow-float shrink-0"
      >
        Comenzar
      </button>
    </div>
  );
};
