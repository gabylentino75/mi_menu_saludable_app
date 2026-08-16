import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const AuthScreen = () => {
  const { login, register } = useApp();

  // Primer ingreso (sin cuenta creada todavía) -> formulario de registro.
  // Si ya existe una cuenta en este dispositivo -> formulario de inicio de sesión.
  const [mode, setMode] = useState(() =>
    localStorage.getItem('cs_has_account') === 'true' ? 'login' : 'register'
  );
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === 'login') {
      login({ email });
    } else {
      register({ nombre: email.split('@')[0], email });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Logo */}
      <div className="flex flex-col items-center text-center pt-14 px-6 shrink-0">
        <img
          src="/images/logo_app.ico"
          alt="Mi Menú Saludable"
          className="h-16 w-auto object-contain mb-3"
        />

        <h1 className="font-serif text-3xl leading-tight text-mint-600">
          Mi Menú<br />Saludable
        </h1>
      </div>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="px-8 pt-8 space-y-4 shrink-0">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full px-5 py-3 bg-white border-2 border-coral-400 rounded-full text-sm text-mirtilo-700 placeholder-mint-500 focus:outline-none focus:ring-2 focus:ring-coral-500/30"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          required
          className="w-full px-5 py-3 bg-white border-2 border-coral-400 rounded-full text-sm text-mirtilo-700 placeholder-mint-500 focus:outline-none focus:ring-2 focus:ring-coral-500/30"
        />

        {mode === 'login' && (
          <p className="text-center text-[11px] text-mirtilo-400">¿Olvidaste tu contraseña?</p>
        )}

        <div className="flex justify-center pt-2">
          <button
            type="submit"
            className="px-12 py-3 rounded-full bg-coral-500 text-white font-bold text-sm shadow-float"
          >
            {mode === 'login' ? 'Ingresar' : 'Registrarme'}
          </button>
        </div>

        <p className="text-center text-xs text-mirtilo-500 pt-1">
          {mode === 'login' ? '¿No tenés cuenta? ' : '¿Ya tenés cuenta? '}
          <button
            type="button"
            onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
            className="font-bold text-coral-500"
          >
            {mode === 'login' ? 'Registrate' : 'Iniciar sesión'}
          </button>
        </p>
      </form>

      {/* Borde decorativo de vegetales y frutas */}
      {/* aspect-ratio fijo (no altura en px) para que siempre se recorte la misma
          franja de la foto -el racimo de vegetales completo- sin importar el ancho de pantalla */}
      <div className="mt-10 w-full shrink-0">
        <img
          src="/images/portada.png"
          alt="Vegetales y frutas frescas"
          className="w-full aspect-[1080/500] object-cover object-bottom"
        />
      </div>
    </div>
  );
};
