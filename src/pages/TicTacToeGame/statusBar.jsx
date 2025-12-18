import "./statusBar.css"

export default function StatusBar({ isXNext, winner, isDraw }) {
    let txt

    if (winner) {
        txt = `Winner: ${winner}`
    } else if (isDraw) {
        txt = `It's a Draw!`
    } else {
        txt = `Turn: ${isXNext ? 'X' : 'O'}`
    }

    return <div className="status">{txt}</div>
}
