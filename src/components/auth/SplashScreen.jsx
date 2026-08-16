import React from 'react';
import { Clock, ShoppingCart, Calendar } from 'lucide-react';

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
  return (
    <div className="h-screen flex flex-col bg-cream-100 px-6 py-10 overflow-hidden">
      {/* Logo */}
      <div className="flex flex-col items-center text-center shrink-0">
        <img
          src={`${import.meta.env.BASE_URL}images/logo_app.ico`}
          alt="Mi Menú Saludable"
          className="h-14 w-auto object-contain mb-3"
        />
        <h1 className="font-serif text-3xl leading-tight text-mint-600">Mi Menú Saludable</h1>
        <p className="text-sm text-mirtilo-500 mt-2 max-w-xs">
          Recetas simples para sentirte bien todos los días
        </p>
      </div>

      {/* Destacados de la app, sin foto */}
      <div className="flex-1 min-h-0 flex flex-col justify-center gap-3 py-6 mt-6">
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
        onClick={onContinue}
        className="w-full py-3.5 rounded-2xl bg-coral-500 text-white font-bold text-sm shadow-float shrink-0"
      >
        Comenzar
      </button>
    </div>
  );
};
