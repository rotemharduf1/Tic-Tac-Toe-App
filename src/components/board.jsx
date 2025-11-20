import Square from "./square";
import "./board.css"

export default  function Board({ sqrs, onPlay }) {
    return (
        <div className="board">
            {sqrs.map((val, idx) => (
                <Square key={idx} value={val} onClick={() => onPlay(idx)} />
            ))}
        </div>
    )
}