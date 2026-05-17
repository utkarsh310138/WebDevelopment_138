import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-shell">
      <div className="counter-card">
        <h1>React Counter Application</h1>
        <p className="count-value">{count}</p>
        <div className="button-row">
          <button type="button" onClick={() => setCount((value) => value + 1)}>
            Increment (+)
          </button>
          <button type="button" onClick={() => setCount((value) => value - 1)}>
            Decrement (-)
          </button>
        </div>
        <button type="button" className="reset-button" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default App
