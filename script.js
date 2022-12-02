//Variables
const mainContainerEl = document.querySelector('.mainContainer');
const gridSizeEl = document.querySelector('.gridSize');

const createGridEl = document.querySelector('.createGrid');

// Event Listeners
createGridEl.addEventListener('click', startGame);

// Styling
mainContainerEl.style.setProperty('grid-template-columns', `repeat(${gridSizeEl.value}, 1fr)`);
mainContainerEl.style.setProperty('grid-template-rows', `repeat(${gridSizeEl.value}, 1fr)`);

function startGame(e) {
    e.preventDefault();
    console.log(gridSizeEl.value);
    createGrid(gridSizeEl.value);
}

// GRID Function
function createGrid(val) {
    const squareEl = document.createElement('div');
    squareEl.textContent = val;
    return squareEl.textContent;
}

//GRID Creation
for (let index = 0; index < (gridSizeEl.value * gridSizeEl.value); index++) {
    mainContainerEl.appendChild(createGrid(index + 1));
}