/**
 * Kod JS można umieszczać w modułach.
 * Ponizej przykład modułu eksportującego stałą i funkcję
 * W pliku module.html znajduje się przykład importu modułów
 */
export const name = "Karol";
export function calculator(a, b, op){
    return op(a, b) ?? NaN;
}