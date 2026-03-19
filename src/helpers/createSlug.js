export const slugify = (text) => {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Eliminar acentos
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Reemplazar espacios por -
    .replace(/[^\w-]+/g, '') // Eliminar caracteres no alfanuméricos
    .replace(/--+/g, '-'); // Reemplazar múltiples guiones por uno
};