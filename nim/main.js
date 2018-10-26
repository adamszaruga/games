var content = document.getElementById('content');

var nim = "Replace this with your own abstraction of Nim"

content.innerHTML = renderGame(nim);




function renderGame(game) {
    // Change this render function to use the "game" parameter

    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>There are 16 pebbles left</h4>
            <div class="w-50 text-center pebble-container">
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
            </div>
            <h4 class="mt-5">It's player 1's turn! How many pebbles will you take?</h4>
            <div>
                <select id="takeInput">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button class="btn btn-primary">Take</button>
            </div>
        </div>
    `
}