// Servicio de imágenes de recetas. Prueba Pexels primero y, si no está configurado,
// usa Pixabay como alternativa (ambas son gratis). Si ninguna está configurada o
// falla la búsqueda, las tarjetas usan el emoji de la receta como respaldo visual.

const PEXELS_API_KEY = import.meta.env.VITE_PEXELS_API_KEY;
const PIXABAY_API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;
const CACHE_KEY_PREFIX = 'cs_recipe_img_';
const CACHE_TTL_MS = 1000 * 60 * 60 * 24 * 30; // 30 días

export const isPexelsConfigured = () => Boolean(PEXELS_API_KEY);
export const isPixabayConfigured = () => Boolean(PIXABAY_API_KEY);
export const isImageServiceConfigured = () => isPexelsConfigured() || isPixabayConfigured();

// Traduce palabras comunes de nombres de recetas en español a inglés,
// porque la búsqueda de estos bancos de imágenes da resultados mucho más precisos en inglés.
const FOOD_KEYWORDS_ES_EN = {
  avena: 'oatmeal', huevo: 'egg', huevos: 'eggs', pollo: 'chicken', pescado: 'fish',
  merluza: 'fish fillet', salmon: 'salmon', ensalada: 'salad', tarta: 'quiche',
  tortilla: 'omelette', sopa: 'soup', arroz: 'rice', lentejas: 'lentils',
  garbanzos: 'chickpeas', quinoa: 'quinoa', pasta: 'pasta', fideos: 'noodles',
  pan: 'bread', tostadas: 'toast', yogur: 'yogurt', yogurt: 'yogurt', frutas: 'fruit',
  banana: 'banana', manzana: 'apple', frutillas: 'strawberries', kiwi: 'kiwi',
  batata: 'sweet potato', zapallo: 'pumpkin', zapallitos: 'zucchini', berenjena: 'eggplant',
  vianda: 'lunchbox', wrap: 'wrap sandwich', hamburguesa: 'burger', pizza: 'pizza',
  muffin: 'muffin', panqueques: 'pancakes', waffles: 'waffles', smoothie: 'smoothie',
  bowl: 'food bowl', milanesa: 'schnitzel', carne: 'beef steak', verduras: 'vegetables',
  palta: 'avocado toast', empanadas: 'empanadas', croquetas: 'croquettes',
  sandwich: 'sandwich', budin: 'cake', galletitas: 'cookies', chia: 'chia pudding',
  uvas: 'grapes', mandarina: 'mandarin orange', naranja: 'orange fruit', pera: 'pear fruit',
  jugo: 'juice bottle', agua: 'water bottle',
};

function stripAccents(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function buildSearchQuery(recipe) {
  const words = stripAccents(recipe.nombre.toLowerCase()).split(/\s+/);
  const translated = words.map((w) => FOOD_KEYWORDS_ES_EN[w]).filter(Boolean);

  if (translated.length > 0) {
    return `${[...new Set(translated)].slice(0, 2).join(' ')} food`;
  }

  if (recipe.categoria === 'Viandas') return 'kids lunchbox healthy food';
  if (recipe.categoria === 'Desayuno/Merienda') return 'healthy breakfast';
  return 'healthy homemade meal';
}

async function fetchFromPexels(query) {
  const res = await fetch(
    `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1&orientation=square`,
    { headers: { Authorization: PEXELS_API_KEY } }
  );
  if (!res.ok) return null;
  const data = await res.json();
  return data?.photos?.[0]?.src?.medium || null;
}

async function fetchFromPixabay(query) {
  const res = await fetch(
    `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&category=food&per_page=3&safesearch=true`
  );
  if (!res.ok) return null;
  const data = await res.json();
  return data?.hits?.[0]?.webformatURL || null;
}

// Función genérica: busca y cachea una imagen por texto libre, bajo cualquier cacheKey.
// La usan tanto las recetas como las imágenes decorativas (ej: pantalla de bienvenida).
export async function fetchImageByQuery(cacheKey, query) {
  if (!isImageServiceConfigured()) return null;

  const storageKey = CACHE_KEY_PREFIX + cacheKey;
  try {
    const cached = JSON.parse(localStorage.getItem(storageKey) || 'null');
    if (cached && Date.now() - cached.ts < CACHE_TTL_MS) {
      return cached.url;
    }
  } catch {
    // localStorage corrupto o inaccesible: seguimos y volvemos a pedir la imagen
  }

  let url = null;
  try {
    if (isPexelsConfigured()) {
      url = await fetchFromPexels(query);
    }
    if (!url && isPixabayConfigured()) {
      url = await fetchFromPixabay(query);
    }
  } catch {
    return null;
  }

  if (url) {
    try {
      localStorage.setItem(storageKey, JSON.stringify({ url, ts: Date.now() }));
    } catch {
      // si el localStorage está lleno, simplemente no cacheamos
    }
  }

  return url;
}

export async function fetchRecipeImageUrl(recipe) {
  return fetchImageByQuery(recipe.id, buildSearchQuery(recipe));
}
