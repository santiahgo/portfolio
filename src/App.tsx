import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className='hero-heading'>{count}</p>
      <button type='button' onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

export default App
