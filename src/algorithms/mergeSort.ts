export const mergeSort = (array: number[]) => {
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray);
  return array;
}

function mergeSortHelper(
  mainArray: number[],
  startIdx: number,
  endIdx: number,
  auxiliaryArray: number[],
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray);
}


function doMerge(
  mainArray: number[],
  startIdx: number,
  middleIdx: number,
  endIdx: number,
  auxiliaryArray: number[],
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      mainArray[k] = auxiliaryArray[i];
      i++;
    } else {
      mainArray[k] = auxiliaryArray[j];
      j++;
    }
    k++;
  }
  while (i <= middleIdx) {
    mainArray[k] = auxiliaryArray[i];
    k++;
    i++;
  }
  while (j <= endIdx) {
    mainArray[k] = auxiliaryArray[j];
    k++;
    j++;
  }
}