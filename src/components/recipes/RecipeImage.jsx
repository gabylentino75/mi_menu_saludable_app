import React, { useEffect, useState } from 'react';
import { fetchRecipeImageUrl, isImageServiceConfigured } from '../../services/imageService';

// Orden de prioridad para la foto de cada receta:
// 1. Una foto local subida a mano en public/images/recipes/{id}.jpg (así el resultado es exacto, no una búsqueda genérica).
// 2. Si no existe, una foto buscada por API (Pexels/Pixabay, si hay una configurada).
// 3. Si nada de eso funciona, el emoji de la receta sobre un fondo de color.
const LOCAL_IMAGE_BASE = '/images/recipes/';

export const RecipeImage = ({ recipe, className = '', emojiClassName = 'text-3xl' }) => {
  const [source, setSource] = useState('local'); // 'local' | 'remote' | 'emoji'
  const [remoteUrl, setRemoteUrl] = useState(null);

  useEffect(() => {
    setSource('local');
    setRemoteUrl(null);
  }, [recipe.id]);

  useEffect(() => {
    let active = true;
    if (source === 'remote' && !remoteUrl && isImageServiceConfigured()) {
      fetchRecipeImageUrl(recipe).then((found) => {
        if (!active) return;
        if (found) setRemoteUrl(found);
        else setSource('emoji');
      });
    }
    return () => {
      active = false;
    };
  }, [source, recipe, remoteUrl]);

  if (source === 'local') {
    return (
      <img
        src={`${LOCAL_IMAGE_BASE}${recipe.id}.jpg`}
        alt={recipe.nombre}
        loading="lazy"
        onError={() => setSource('remote')}
        className={`object-cover ${className}`}
      />
    );
  }

  if (source === 'remote' && remoteUrl) {
    return (
      <img
        src={remoteUrl}
        alt={recipe.nombre}
        loading="lazy"
        onError={() => setSource('emoji')}
        className={`object-cover ${className}`}
      />
    );
  }

  return (
    <div className={`flex items-center justify-center bg-peach-100 dark:bg-mirtilo-800 ${className}`}>
      <span className={emojiClassName}>{recipe.emoji || '🥗'}</span>
    </div>
  );
};
