export function calcWinner(sqrs) {
    const lines = [
        [0,1,2],[3,4,5],[6,7,8], // rows
        [0,3,6],[1,4,7],[2,5,8], // cols
        [0,4,8],[2,4,6]          // diags
    ]
    for (const [a,b,c] of lines) {
        if (sqrs[a] && sqrs[a] === sqrs[b] && sqrs[a] === sqrs[c]) {
            return sqrs[a]
        }
    }
    return null
}

export function gameStatus(sqrs) {
    const winner = calcWinner(sqrs)
    const isDraw = !winner && sqrs.every(x => x !== null)
    return { winner, isDraw }
}