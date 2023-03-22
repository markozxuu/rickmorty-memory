// This code is base on the algorithm Fisher–Yates,
// learn more about how it works here: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle

export function shuffle<T>(array: T[]): T[] {
  const shuffled: T[] = [...array]; // Creamos una copia del array para no modificar el original
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generamos un índice aleatorio
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Intercambiamos los elementos en las posiciones i y j
  }
  return shuffled;
}
