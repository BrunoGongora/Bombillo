import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Componentes from './Componentes/bombillo'






function App() {
  const [count, setCount] = useState(0)
  return (

    <div className="App">
      <Componentes />
      <Componentes />
      <Componentes />
      <Componentes />
    </div>

  )
}

export default App
