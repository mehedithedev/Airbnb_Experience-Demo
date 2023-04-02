import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NameFunction from './Components/Names'
import Planets from './Components/Planets'
import Maps from './Components/Map'
import UseState from "./State/UseState.jsx";
import InputState from "./State/InputState.jsx";
import Counter from "./State/Counter.jsx";

function App() {

  return(
  <>
    <div className="App">
      <header className="App-header">
      <h1>This is React </h1>
      </header>
      <Planets/>
      <UseState/>
      <InputState/>
      <Counter/>
    </div>
  </>
  )
}

export default App
