// TODO: write code here
// Game field
const gameField = document.getElementById('gameField');
const fieldSize = 4;

// Grid
for (let i = 0; i < fieldSize * fieldSize; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    gameField.appendChild(cell);
}

// Character
const character = document.createElement('img');
character.src = './img/goblin.png';

// Random number generator
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Random position
function placeCharacter() {
    const randomCell = getRandomInt(0, fieldSize * fieldSize);
    const cells = document.getElementsByClassName('cell');
    
    // Clear previous position
    character.remove();
    
    // New position
    cells[randomCell].appendChild(character);
}

// Moving a character
function moveCharacter() {
    const cells = document.getElementsByClassName('cell');
    let currentPosition = -1;
    
    // Current position
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].contains(character)) {
            currentPosition = i;
            break;
        }
    }
    
    // Generate new position
    let newPosition = currentPosition;
    while (newPosition === currentPosition) {
        newPosition = getRandomInt(0, fieldSize * fieldSize);
    }
    
    // Move character
    cells[currentPosition].removeChild(character);
    cells[newPosition].appendChild(character);
}

// Character init
placeCharacter();

// Timer
setInterval(moveCharacter, 1000);