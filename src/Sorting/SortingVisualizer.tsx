import { useState } from 'react'
import './SortingVisualizer.css'

import { mergeSort, bubbleSort, insertionSort, selectionSort, quickSort, heapSort, radixSort } from '../algorithms';

const ARRAY_LENGTH : number = 40;

export default function SortingVisualizer() {
  const [array, setArray] = useState(generateArray(ARRAY_LENGTH));

  return (
    <>
      <div className="visualizer">
        <h1>Sorting Visualizer</h1>
        <div className="array-container">
          {array.map((value : number, index : number) => (
            <div key={index} className="array-bar" style={{ height: `${value}px`, backgroundColor: generateGradient(value) }} />
          ))}
        </div>
      </div>
      <button onClick={() => setArray(generateArray(ARRAY_LENGTH))}>New Array</button> 
      <button onClick={() => setArray([...mergeSort(array)])}>Merge Sort</button> 
      <button onClick={() => setArray([...bubbleSort(array)])}>Bubble Sort</button>
      <button onClick={() => setArray([...insertionSort(array)])}>Insertion Sort</button> 
      <button onClick={() => setArray([...selectionSort(array)])}>Selection Sort</button>
      <button onClick={() => setArray([...quickSort(array)])}>Quick Sort</button>  
      <button onClick={() => setArray([...heapSort(array)])}>Heap Sort</button>
      <button onClick={() => setArray([...radixSort(array)])}>Radix Sort</button>

    </>
  )
}

function generateArray(size : number) {
  const array : number[] = [];
  for (let i = 0; i < size; i++) {
    array.push(randomIntFromInterval(5, 500));
  }
  return array;
}

function randomIntFromInterval(min : number, max : number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateGradient(value: number) {
  return 'rgba(42, 72, 88, ' + (value / 500) + ')';
}