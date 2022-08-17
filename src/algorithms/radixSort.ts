export function radixSort(array: number[]) {
  if (array.length === 0) return array;

  const maxNumber = Math.max(...array);

  let digit = 0;
  while (maxNumber / 10 ** digit > 0) {
    countingSort(array, digit);
    digit++;
  }

  return array;
}

function countingSort(array: number[], digit: number) {
  const buckets = Array(10).fill(0);
  for (let i = 0; i < array.length; i++) {
    const digitOfNumber = Math.floor(array[i] / 10 ** digit) % 10;
    buckets[digitOfNumber]++;
  }
  for (let i = 1; i < buckets.length; i++) {
    buckets[i] += buckets[i - 1];
  }
  const sortedArray = Array(array.length).fill(0);
  for (let i = array.length - 1; i >= 0; i--) {
    const digitOfNumber = Math.floor(array[i] / 10 ** digit) % 10;
    buckets[digitOfNumber]--;
    sortedArray[buckets[digitOfNumber]] = array[i];
  }
  for (let i = 0; i < array.length; i++) {
    array[i] = sortedArray[i];
  }
}