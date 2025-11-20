import { useState } from 'react'
import { gameStatus } from '../utils/tictactoe.js'
import Board from './board.jsx'
import Controls from './controls.jsx'
import StatusBar from './statusBar.jsx'
import "./game.css"

export default function Game() {
    const [sqrs, setSqrs] = useState(Array(9).fill(null))
    const [isXNext, setIsXNext] = useState(true)

    const { winner, isDraw } = gameStatus(sqrs)
    
    function handlePlay(idx) {
        if(sqrs[idx] || winner) return //this cell is filled/end of game

        const next = sqrs.slice() //copy of the state
        next[idx] = isXNext ? 'X' : 'O'
        setSqrs(next)
        setIsXNext(!isXNext)
    }

    function handleReset() {
        setSqrs(Array(9).fill(null))
        setIsXNext(true)
    }

    return (
        <div className="game">
        <StatusBar isXNext={isXNext} winner={winner} isDraw={isDraw} />
        <Board sqrs={sqrs} onPlay={handlePlay} />
        <Controls onReset={handleReset} />
        </div>
    )
}
