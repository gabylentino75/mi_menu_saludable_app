import { EXTENDED_RECIPES, filterRecipesByIngredients } from '../data/recipesData';

/**
 * Motor de IA e Inteligencia de Recomendación
 * Cumple la Regla de Oro: Opera exclusivamente sobre el catálogo base de recetas estructuradas.
 */
export const getAiRecipeRecommendations = async ({ query, ingredients = [], maxPrepTime, category, userRestrictions = [] }) => {
  // Simular pequeña latencia de procesamiento natural de IA (300ms)
  await new Promise(resolve => setTimeout(resolve, 300));

  let candidateRecipes = [...EXTENDED_RECIPES];

  // 1. Filtrar por restricciones del usuario (Sin gluten, Vegetariana, Vegano, Sin lactosa)
  if (userRestrictions && userRestrictions.length > 0) {
    candidateRecipes = candidateRecipes.filter(recipe => {
      return userRestrictions.every(restriction => {
        const rLower = restriction.toLowerCase();
        if (rLower.includes('gluten')) {
          return recipe.etiquetas.includes('Sin Gluten');
        }
        if (rLower.includes('vegetarian')) {
          return recipe.etiquetas.includes('Vegetariana') || recipe.etiquetas.includes('Vegano');
        }
        if (rLower.includes('vegan')) {
          return recipe.etiquetas.includes('Vegano');
        }
        return true;
      });
    });
  }

  // 2. Filtrar por categoría si especifica
  if (category) {
    candidateRecipes = candidateRecipes.filter(r => r.categoria.toLowerCase() === category.toLowerCase());
  }

  // 3. Filtrar por tiempo máximo si especifica
  if (maxPrepTime) {
    candidateRecipes = candidateRecipes.filter(r => r.total_min <= maxPrepTime);
  }

  // 4. Si hay ingredientes, realizar cruzamiento de despensa
  if (ingredients && ingredients.length > 0) {
    const pantryMatches = filterRecipesByIngredients(ingredients);
    const matchedIds = new Set(pantryMatches.map(m => m.recipe.id));
    
    // Priorizar recetas con alto match
    const matchedCandidates = pantryMatches
      .map(m => m.recipe)
      .filter(r => candidateRecipes.some(c => c.id === r.id));

    if (matchedCandidates.length > 0) {
      candidateRecipes = matchedCandidates;
    }
  }

  // 5. Búsqueda por palabras clave en la consulta si existe
  if (query && query.trim()) {
    const qLower = query.toLowerCase().trim();
    const searchFiltered = candidateRecipes.filter(r => 
      r.nombre.toLowerCase().includes(qLower) ||
      r.descripcion.toLowerCase().includes(qLower) ||
      r.etiquetas.some(t => t.toLowerCase().includes(qLower)) ||
      r.ingredientes.some(i => i.nombre.toLowerCase().includes(qLower))
    );

    if (searchFiltered.length > 0) {
      candidateRecipes = searchFiltered;
    }
  }

  // Seleccionar top 3 o 4 sugerencias
  const topRecommendations = candidateRecipes.slice(0, 4);

  // Generar explicación inteligente estructurada
  let explanation = '';
  if (ingredients.length > 0) {
    explanation = `He analizado tus ingredientes (${ingredients.join(', ')}) y seleccionado las opciones de nuestro catálogo oficial que mejor aprovechan tu despensa sin desperdicios.`;
  } else if (maxPrepTime) {
    explanation = `Filtrando por tu límite de ${maxPrepTime} minutos, estas recetas de nuestro catálogo garantizan nutrición rápida y sin complicaciones.`;
  } else {
    explanation = `Basado en tus preferencias y hábitos saludables, te sugiero las siguientes recetas destacadas de nuestro catálogo:`;
  }

  return {
    explanation,
    recommendations: topRecommendations,
    totalFound: candidateRecipes.length
  };
};
