import { useState } from 'react'
import './App.css'
import RegisterForm from './RegisterForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Basic Register Form</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Register to learn more
      </p>
      <RegisterForm />

    </>
  )
}

export default App
