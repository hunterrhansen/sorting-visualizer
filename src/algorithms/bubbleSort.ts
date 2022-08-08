export function bubbleSort(array : number[]) {
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        isSorted = false;
      }
    }
  }
  return array;
}

function swap(array: number[], i: number, j: number) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}