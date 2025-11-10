import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Game from './components/game.jsx'

export default function App() {
  return (
    <div className="App">
      <h1> Tic Tac Toe </h1>
      <Game />
    </div>
  )
}