import { useState , useEffect } from 'react'
import { gameStatus } from '../utils/tictactoe.js'
import Board from './board.jsx'
import Controls from './controls.jsx'
import StatusBar from './statusBar.jsx'
import "./game.css"

export default function Game() {
    const [sqrs, setSqrs] = useState(() => {
        const saved = localStorage.getItem('tictactoe-gameState');
        if(!saved) return Array(9).fill(null);

        try{
            const parsed = JSON.parse(saved);
            return Array.isArray(parsed.sqrs) ? parsed.sqrs : Array(9).fill(null);
        } catch{
            return Array(9).fill(null);
        }
    });
    const [history, setHistory] = useState(() => {
        const saved = localStorage.getItem('tictactoe-gameState');
        if(!saved) return [];

        try{
            const parsed = JSON.parse(saved);
            return Array.isArray(parsed.history) ? parsed.history : [];
        } catch{
            return [];
        }
    });
    const [isXNext, setIsXNext] = useState(() => {
        const saved = localStorage.getItem('tictactoe-gameState');
        if(!saved) return true;
        
        try{
            const parsed = JSON.parse(saved);
            return typeof parsed.isXNext === 'boolean' ? parsed.isXNext : true;
        } catch{
            return true;
        }
    });

    // refresh
    //from object to JSON
    useEffect(() => {
        const gameState = {sqrs, isXNext, history};
        localStorage.setItem('tictactoe-gameState', JSON.stringify(gameState));
    }, [sqrs, isXNext, history]);

    const { winner, isDraw } = gameStatus(sqrs)
    
    function handlePlay(idx) {
        if(sqrs[idx] || winner) return //this cell is filled/end of game

        const currentPlayer = isXNext ? 'X' : 'O';
        const next = sqrs.slice();
        next[idx] = currentPlayer;

        setSqrs(next);
        setHistory([...history, { player: currentPlayer, idx }]);
        setIsXNext(!isXNext);
    }

    function handleReset() {
        setSqrs(Array(9).fill(null))
        setIsXNext(true)
        setHistory([])
    }

    return (
        <div className="game">
            <div className='game-container'>
                <StatusBar isXNext={isXNext} winner={winner} isDraw={isDraw} />
                <Board sqrs={sqrs} onPlay={handlePlay} />
                <Controls onReset={handleReset} />
            </div>

            <div className='history-container'>
                <h2>History</h2>
                <ul>
                    {history.map((move, index) => (
                        <li key={index}>
                            {move.player} played on {move.idx}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
