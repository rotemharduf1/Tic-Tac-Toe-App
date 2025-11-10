import Square from "./square";

export default  function Board({ sqrs = Array(9).fill(null), onPlay = () => {}}) {
    return (
        <div className="board">
            {sqrs.map((val, idx) => (
                <Square key={idx} value={val} onClick={() => onPlay(idx)} />
            ))}
        </div>
    )
}