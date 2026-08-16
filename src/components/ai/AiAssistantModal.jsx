import React, { useState } from 'react';
import { X, Sparkles, Send, Loader2, ChefHat, Check } from 'lucide-react';
import { getAiRecipeRecommendations } from '../../services/aiService';
import { RecipeCard } from '../recipes/RecipeCard';

const QUICK_PROMPTS = [
  'Tengo poco tiempo (< 15 min)',
  'Quiero algo dulce con banana y avena',
  'Ideas de viandas para la escuela',
  'Cena rápida vegetariana'
];

export const AiAssistantModal = ({ isOpen, onClose, onSelectRecipe }) => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  if (!isOpen) return null;

  const handleSearch = async (queryText) => {
    const q = queryText || prompt;
    if (!q.trim()) return;

    setLoading(true);
    setResult(null);

    let maxTime = null;
    if (q.toLowerCase().includes('15') || q.toLowerCase().includes('rápida')) maxTime = 15;
    if (q.toLowerCase().includes('20')) maxTime = 20;

    const res = await getAiRecipeRecommendations({ query: q, maxPrepTime: maxTime });
    setResult(res);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-mirtilo-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-mirtilo-800 rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-cream-200 dark:border-mirtilo-700 relative text-mirtilo-800 dark:text-cream-100 p-6 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-cream-200 dark:border-mirtilo-700 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-coral-500 flex items-center justify-center text-white text-2xl shadow-sm">
              <Sparkles className="w-6 h-6 animate-spin" style={{ animationDuration: '6s' }} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-mirtilo-800 dark:text-cream-100">
                Asistente de IA "Mi Menú Saludable"
              </h2>
              <p className="text-xs text-mirtilo-500 dark:text-cream-300 font-medium">
                Recomendaciones inteligentes filtradas sobre nuestro catálogo oficial
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-cream-100 dark:hover:bg-mirtilo-700 text-mirtilo-500 dark:text-cream-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Input Box */}
        <div className="space-y-3">
          <div className="relative">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="¿Qué tenés ganas de cocinar o qué ingredientes tenés?"
              className="w-full pl-4 pr-12 py-3 bg-cream-50 dark:bg-mirtilo-700 border border-cream-200 dark:border-mirtilo-600 rounded-2xl text-xs text-mirtilo-800 dark:text-cream-100 placeholder-mirtilo-400 focus:outline-none focus:ring-2 focus:ring-coral-500/50"
            />
            <button
              onClick={() => handleSearch()}
              disabled={loading || !prompt.trim()}
              className="absolute right-2 top-2 p-2 rounded-xl bg-coral-500 text-white disabled:opacity-40 hover:bg-coral-600 transition-all"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            </button>
          </div>

          {/* Quick Prompts */}
          <div>
            <span className="text-[11px] font-bold text-mirtilo-500 dark:text-cream-300 block mb-1.5">
              Consultas rápidas de ejemplo:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {QUICK_PROMPTS.map((qp) => (
                <button
                  key={qp}
                  onClick={() => {
                    setPrompt(qp);
                    handleSearch(qp);
                  }}
                  className="px-3 py-1 rounded-xl text-xs font-semibold bg-peach-100 dark:bg-mirtilo-700 text-peach-700 dark:text-peach-300 hover:bg-peach-200 transition-all"
                >
                  💡 {qp}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        {loading && (
          <div className="py-12 text-center space-y-3">
            <Loader2 className="w-8 h-8 text-coral-500 animate-spin mx-auto" />
            <p className="text-xs text-mirtilo-600 dark:text-cream-300 font-bold">
              Consultando el catálogo base y cruzando combinaciones saludables...
            </p>
          </div>
        )}

        {result && (
          <div className="space-y-4 pt-2 border-t border-cream-200 dark:border-mirtilo-700 animate-fadeIn">
            <div className="p-3.5 rounded-2xl bg-cream-50 dark:bg-mirtilo-700/60 border-l-4 border-coral-500 text-xs text-mirtilo-700 dark:text-cream-200 font-medium">
              🤖 <span className="font-bold">IA Rationale:</span> {result.explanation}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-80 overflow-y-auto">
              {result.recommendations.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onSelect={(r) => {
                    onClose();
                    onSelectRecipe(r);
                  }}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
