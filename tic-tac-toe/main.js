var content = document.getElementById('content');

var ticTacToe = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

var currentTurn = "O";

function cells(board) {
    let rows = board.map(r => {
        return r
    })
    let cols = rows.map(c => {
        return c
    })
    let myCols = []
    for (let i = 0; i < rows.length; i++) {
        document.createElement('div');
        for (let j = 0; j < cols.length; j++) {
            columns.innerHTML += `<button row="${board.indexOf(rows[i])}" col="${j}"></button>`
        }
        myCols.push(columns)
    }
    console.log(myCols)
    return `<div>${myCols}</div>`
}


function column(row) {

}

function play() {}


function winningCondition() {

}



content.innerHTML = renderGame(ticTacToe);




function renderGame(game) {
    // Change this render function to use the "game" parameter
    return `
        <div class="container d-flex flex-column justify-content-start align-items-center" id="board">
            <h4>It's player ${currentTurn}'s turn!</h4>
            ${cells(ticTacToe)}
        </div>
    `
}