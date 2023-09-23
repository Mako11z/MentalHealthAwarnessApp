import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ResLayout from './components/ResLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1> Mental Health Awarness</h1>
      <h2> Resources </h2>
      <ResLayout />
    </div>
  )
}

export default App
