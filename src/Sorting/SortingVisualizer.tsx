import React, { useState, useEffect } from 'react'
import './SortingVisualizer.css'

import { mergeSort, bubbleSort } from '../algorithms';

const ARRAY_LENGTH : number = 20;

export default function SortingVisualizer() {
  const [array, setArray] = useState(generateArray(ARRAY_LENGTH));

  return (
    <div>
      <div className="array-container">
        {array.map((value : number, index : number) => (
          <div key={index} className="array-bar" style={{ height: `${value}px` }} />
        ))}
      </div>
      <button onClick={() => setArray(generateArray(ARRAY_LENGTH))}>Reset</button> 
      <button onClick={() => setArray([...mergeSort(array)])}>Merge Sort</button> 
      <button onClick={() => setArray([...bubbleSort(array)])}>Bubble Sort</button> 
    </div>

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