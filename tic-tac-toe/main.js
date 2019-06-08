var content = document.getElementById('content');

var ticTacToe = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

var currentTurn = "O";

function updateCells(row, col, turn) {
    ticTacToe[row][col] = turn
}

function getCell(row, column) {
    return ticTacToe[row][column]
}



function play(cell) {
    let row = parseInt(cell.getAttribute("row"));
    let col = parseInt(cell.getAttribute("col"));
    if (ticTacToe[row][col] == "") {
        updateCells(row, col, currentTurn)
        currentTurn == "O" ? currentTurn = "X" : currentTurn = "O";
    }
    if (winningCondition(ticTacToe)) {
        return content.innerHTML = `<div class="container align-items-center text-center">
                            <h2 >The winner is ${winningCondition(ticTacToe)}!</h2>
                            <button onclick="resetGame()" class="btn btn-primary" style="width: 100px;" type="submit">Play again!</button>
                            </div>`
    }
    return content.innerHTML = renderGame(ticTacToe);
}

function resetGame() {
    ticTacToe = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    return content.innerHTML = renderGame(ticTacToe)
}

function winningCondition(board) {
    if (checkRow(0, "X") || checkRow(1, "X") || checkRow(2, "X") || checkCol(0, "X") || checkCol(1, "X") || checkCol(2, "X") || checkDiagonals("X")) {
        return "X"
    } else if (checkRow(0, "O") || checkRow(1, "O") || checkRow(2, "O") || checkCol(0, "O") || checkCol(1, "O") || checkCol(2, "O") || checkDiagonals("O")) {
        return "O"
    } else {
        return false
    }

}


//Check all the cells in a row to see if they match up
function checkRow(row, player) {
    return ticTacToe[row].every(e => { return e == player });
}
//Check all the cells in a column to see if they match up.
function checkCol(col, player) {
    let columns = [ticTacToe[0][col], ticTacToe[1][col], ticTacToe[2][col]]
    return columns.every(e => { return e == player });
}
//Diagonal checks to see if they match up.
function checkDiagonals(player) {
    let diag = [ticTacToe[0][2]]
    return (getCell(0, 0) === player && getCell(1, 1) === player && getCell(2, 2) == player) ||
        (getCell(0, 2) === player && getCell(1, 1) === player && getCell(2, 0) == player);
}

content.innerHTML = renderGame(ticTacToe);




function renderGame(game) {
    // Change this render function to use the "game" parameter
    return `
        <div class="container d-flex flex-column justify-content-start align-items-center" id="board">
            <h4 id="header">It's player ${currentTurn}'s turn!</h4>
            <div class="w-50 text-center justify-items-around">
            <button onclick="play(this)" row="0" col="0" style="height: 30px;">${game[0][0]}</button>
            <button onclick="play(this)" row="0" col="1" style="height: 30px;">${game[0][1]}</button>
            <button onclick="play(this)" row="0" col="2" style="height: 30px;">${game[0][2]}</button>
            </div>
            <div class="w-50 text-center justify-items-around py-2">
            <button onclick="play(this)" row="1" col="0" style="height: 30px;">${game[1][0]}</button>
            <button onclick="play(this)" row="1" col="1" style="height: 30px;">${game[1][1]}</button>
            <button onclick="play(this)" row="1" col="2" style="height: 30px;">${game[1][2]}</button>
            </div>
            <div class="w-50 text-center justify-items-around">
            <button onclick="play(this)" row="2" col="0" style="height: 30px;">${game[2][0]}</button>
            <button onclick="play(this)" row="2" col="1" style="height: 30px;">${game[2][1]}</button>
            <button onclick="play(this)" row="2" col="2" style="height: 30px;">${game[2][2]}</button>
            </div>
            <button onclick="resetGame()" class="btn btn-primary" style="width: 100px;" type="submit">Reset</button>
        </div>
    `
}