
// VARIABLES
const mainContainerEl = document.querySelector('.mainContainer');
const buttons = document.querySelectorAll('.gridSizeButton');
let gridSizeEl = 5;

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        if (button.id == 'small') {
            gridSizeEl = 5;
            console.log(gridSizeEl);
            creatingGrid();
        } else if (button.id == 'medium') {
            gridSizeEl = 15;
            console.log(gridSizeEl);
            creatingGrid();
        } else if (button.id == 'large') {
            gridSizeEl = 30;
            console.log(gridSizeEl);
            creatingGrid();
        }
    });
});

// STYLING
mainContainerEl.style.setProperty('grid-template-columns', `repeat(${gridSizeEl}, 1fr)`);
mainContainerEl.style.setProperty('grid-template-rows', `repeat(${gridSizeEl}, 1fr)`);

// FUNCTIONS
function createGrid(val) {
    const squareEl = document.createElement('div');
    squareEl.classList.add('boxes');
    squareEl.textContent = val;
    return squareEl;
}

// CLEAR GRID
function emptyGrid() {
    console.log('boxes');
    mainContainerEl.textContent = '';
}

// INITIAL GRID (Needed to display an initial GRID)
creatingGrid();

// GRID CREATION
function creatingGrid() {
    emptyGrid();
    for (let index = 0; index < (gridSizeEl * gridSizeEl); index++) {
        mainContainerEl.appendChild(createGrid(index + 1));
    }
}

// OTHER
console.log('INITIAL gridSizeEl ' + gridSizeEl);