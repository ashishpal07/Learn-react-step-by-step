import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Timer } from './components/Timer';

function App() {
  const [time, setTime] = useState(0);

  return (
    <>
      <Timer />
    </>
  )
}

export default App
