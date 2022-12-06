
// GLOBAL VARIABLES
const mainContainerEl = document.querySelector('.mainContainer');
let gridSizeEl = 10;

// FUNCTIONS
function createGrid(val) {
    const squareEl = document.createElement('div');
    squareEl.classList.add('box');
    return squareEl;
}

// CLEAR GRID
function emptyGrid() {
    mainContainerEl.textContent = '';
}

// INITIAL GRID (Needed to display an initial GRID)
creatingGrid();

// GRID CREATION
function creatingGrid() {
    // STYLING
    mainContainerEl.style.setProperty('grid-template-columns', `repeat(${gridSizeEl}, 1fr)`);
    mainContainerEl.style.setProperty('grid-template-rows', `repeat(${gridSizeEl}, 1fr)`);

    emptyGrid();
    for (let index = 0; index < (gridSizeEl * gridSizeEl); index++) {
        mainContainerEl.appendChild(createGrid(index + 1));
    }
}

//MOUSEOVER
function mouseOver(box) {
    console.log('Inside mouseOver: ' + box.classList.value);
    box.style.background = "black";
    box.classList.add('blackBackground');
}

//GRID SIZE
const buttons = document.querySelectorAll('.gridSizeButton');
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        if (button.id == 'xSmall') {
            gridSizeEl = 10;
            console.log(gridSizeEl);
            creatingGrid();
        } else if (button.id == 'small') {
            gridSizeEl = 20;
            console.log(gridSizeEl);
            creatingGrid();
        } else if (button.id == 'medium') {
            gridSizeEl = 30;
            console.log(gridSizeEl);
            creatingGrid();
        } else if (button.id == 'large') {
            gridSizeEl = 40;
            console.log(gridSizeEl);
            creatingGrid();
        } else if (button.id == 'xLarge') {
            gridSizeEl = 50;
            console.log(gridSizeEl);
            creatingGrid();
        }
    })
});

// BOXES BACKGROUND
const boxes = document.querySelectorAll('.box');
boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
    if (box.classList.contains('blackBackground')) {
        console.log('If already black ' + box.classList.value);
    } else {
            console.log('If not yet black: ' + box.classList.value);
            mouseOver(box)
        }
    })
});

