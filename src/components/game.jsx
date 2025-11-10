import Board from './board.jsx'
import { useState, useMemo } from 'react'
import StatusBar from './statusBar.jsx'
import Controls from './controls.jsx'
import { calcWinner } from '../utils/winner.js'


export default function Game() {
    const [sqrs, setSqrs] = useState(Array(9).fill(null))
    const [isNext, setIsNext] = useState(true)

    const winner = useMemo(() => calcWinner(sqrs), [sqrs])
    const isDraw = !winner && sqrs.every(Boolean)
    
    
    function handlePlay(idx) {
        if(sqrs[idx] || winner) return //this cell is filled/end of game

        const next = sqrs.slice() //copy of the state
        next[idx] = isNext ? 'X' : 'O'
        setSqrs(next)
        setIsNext(!isNext)
    }

    function handleReset() {
        setSqrs(Array(9).fill(null))
        setIsNext(true)
    }

    let statusTxt = `Turn: ${isNext ? 'X' : 'O'}`
    if(winner) statusTxt = `Winner: ${winner}`
    else if(isDraw) statusTxt = `It's a Draw!`

    return (
        <div className="game">
        {<StatusBar txt={statusTxt} />}
        {<Board sqrs={sqrs} onPlay={handlePlay} />}
        {<Controls onReset={handleReset} />}
        </div>
    )
    }