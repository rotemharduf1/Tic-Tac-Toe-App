import "./controls.css"

export default function Controls({ onReset }) {
    return (
        <div className="controls">
            <button onClick={onReset}>Restart</button>
        </div>
    )
}