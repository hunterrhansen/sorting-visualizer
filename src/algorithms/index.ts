import { bubbleSort } from './bubbleSort';
import { mergeSort } from './mergeSort';
import { insertionSort } from './insertionSort';
import { selectionSort } from './selectionSort';
import { quickSort } from './quickSort';
import { heapSort } from './heapSort';
import { radixSort } from './radixSort';

export { bubbleSort, mergeSort, insertionSort, selectionSort, quickSort, heapSort, radixSort };  

export function swap(array: number[], i: number, j: number) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}