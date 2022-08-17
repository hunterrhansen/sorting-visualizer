import { swap } from '.';

export function insertionSort(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; i > 0; j--) {
      if (array[j] < array[j - 1]) {
        swap(array, j, j - 1);
      } else {
        break;
      }
    }
  }
  
  return array;
}