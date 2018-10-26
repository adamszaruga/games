var content = document.getElementById('content');

var ticTacToe = "Replace this with your own abstraction of Tic Tac Toe"

content.innerHTML = renderGame(ticTacToe);




function renderGame(game) {
    // Change this render function to use the "game" parameter

    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>It's player O's turn!</h4>
            <div class="w-50 text-center">
                <button>X</button>
                <button>O</button>
                <button>X</button>
            </div>
            <div class="w-50 text-center">
                <button>-</button>
                <button>-</button>
                <button>-</button>
            </div>
            <div class="w-50 text-center">
                <button>O</button>
                <button>-</button>
                <button>X</button>
            </div>
        </div>
    `
}