import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <button type='button' onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

export default App
