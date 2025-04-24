import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main'>
        <h1>{count}</h1>

        <div className='button'>
          <button onClick={() => setCount(count + 1)}>Encriment</button>
          <button onClick={() => setCount(0)}>reset</button>
          <button onClick={() => setCount(count - 1)}>dicriment</button>
        </div>
      </div>
    </>
  )
}

export default App
