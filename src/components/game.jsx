import { useState , useEffect } from 'react'
import { gameStatus } from '../utils/tictactoe.js'
import Board from './board.jsx'
import Controls from './controls.jsx'
import StatusBar from './statusBar.jsx'
import "./game.css"

const STORAGE_KEY = 'tictactoe-gameState';

export default function Game() {
    const [sqrs, setSqrs] = useState(Array(9).fill(null));
    const [history, setHistory] = useState([]);
    const [isXNext, setIsXNext] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const gameStateFromLocalStorage = localStorage.getItem(STORAGE_KEY);
        if (gameStateFromLocalStorage) {
            const parsedState = JSON.parse(gameStateFromLocalStorage);
            setSqrs(parsedState.sqrs);
            setIsXNext(parsedState.isXNext);
            setHistory(parsedState.history);
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        if(isLoading) return;

        const gameState = { sqrs, isXNext, history };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState));
        }, [sqrs, isXNext, history, isLoading]);

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

    if(isLoading) {
        return <div>Loading...</div>;
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
