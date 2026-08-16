// Normaliza texto para comparar/buscar sin importar mayúsculas, minúsculas ni acentos.
// Ej: normalize("Atún") === normalize("atun") === "atun"
export function normalize(str) {
  if (!str) return '';
  return str
    .toString()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // quita tildes/diacríticos
    .toLowerCase()
    .trim();
}
