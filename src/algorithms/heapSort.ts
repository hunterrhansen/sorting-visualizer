import { swap } from '.';

export function heapSort(array: number[]) {
  buildMaxHeap(array);
  for (let endIdx = array.length - 1; endIdx > 0; endIdx--) {
    swap(array, 0, endIdx);
    siftDown(0, endIdx - 1, array);
  }
  return array;
}

function buildMaxHeap(array: number[]) {
  const firstParentIdx = Math.floor((array.length - 2) / 2);
  for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
    siftDown(currentIdx, array.length - 1, array);
  }
}

function siftDown(currentIdx : number, endIdx : number, heap : number[]) {
  let childOneIdx = currentIdx * 2 + 1;
  while (childOneIdx <= endIdx) {
    const childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
    let idxToSwap;
    if (childTwoIdx !== -1 && heap[childTwoIdx] > heap[childOneIdx]) {
      idxToSwap = childTwoIdx;
    } else {
      idxToSwap = childOneIdx;
    }
    if (heap[idxToSwap] > heap[currentIdx]) {
      swap(heap, idxToSwap, currentIdx);
      currentIdx = idxToSwap;
      childOneIdx = currentIdx * 2 + 1;
    } else {
      return;
    }
  }
}