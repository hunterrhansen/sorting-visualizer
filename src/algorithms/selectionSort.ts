import { swap } from '.';

export function selectionSort(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      swap(array, i, minIdx);
    }
  }
  return array;
}