import { useState } from 'react'
import './App.css'
import SortingVisualizer from './Sorting/SortingVisualizer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SortingVisualizer />
    </div>
  )
}

export default App
