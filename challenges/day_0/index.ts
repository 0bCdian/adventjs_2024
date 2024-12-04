export function prepareGifts(gifts: number[]): number[] {
  if (gifts.length === 0) return gifts;
  const uniqueGifts = new Set<number>(gifts);
  const sortedArray = Array.from(uniqueGifts).toSorted((a, b) => a - b);
  return sortedArray;
}
