let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns
var nextLabel = document.getElementById('next-lbl');
var text = document.createTextNode("X");
nextLabel.appendChild(text);
//initialize the game


// use the value stored in the nextPlayer variable to indicate who the next player is


//This call will create the buttons needed for the gameboard.
createGameBoard();

function createGameBoard() {

    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    for (var c = 0; c < 9; c++) {
        var button = document.createElement("button");
        button.innerHTML = "  ";
        var td = document.getElementsByTagName("td")[c];
        td.appendChild(button);
    }
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', (event) => { takeCell(event) });
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event) {
    let btnsEvent = event.target;

    //disables the button if the button has a value of O or X


    //filters to see whats the next player value and updates the button to have that value
    if (nextPlayer === 'X') {

        btnsEvent.innerText = 'X';
        nextPlayer = 'O';
        text.nodeValue = "O";

    } else {
        if (nextPlayer === 'O') {

            btnsEvent.innerText = 'O';
            nextPlayer = 'X';
            text.nodeValue = "X";

        }

    }

    if (btnsEvent.innerText === 'X' || btnsEvent.innerText === 'O') {
        btnsEvent.disabled = true;
    }
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver()) {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element

        let textLabel = document.getElementById('game-over-lbl');
        var gameOverText = document.createElement('h1');
        let textContent = document.createTextNode("Game Over");
        gameOverText.appendChild(textContent);
        textLabel.appendChild(gameOverText);
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}
//function to see if game is over
function isGameOver() {

    for (let i = 0; i < btns.length; i++)
        if (!btns[i].disabled)
            return false;


    return true;
}
