// GLOBAL VARIABLES
const mainContainerEl = document.querySelector('.mainContainer');
let gridSizeEl = 10;
let colorOrBlack;

//GRID SIZE
const buttons = document.querySelectorAll('.gridSizeButton');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == 'xSmall') {
            gridSizeEl = 10;
            console.log('You chose GridSize: ' + gridSizeEl);
            creatingGrid();
        } else if (button.id == 'small') {
            gridSizeEl = 20;
            console.log('You chose GridSize: ' + gridSizeEl);
            creatingGrid();
        } else if (button.id == 'medium') {
            gridSizeEl = 30;
            console.log('You chose GridSize: ' + gridSizeEl);
            creatingGrid();
        } else if (button.id == 'large') {
            gridSizeEl = 40;
            console.log('You chose GridSize: ' + gridSizeEl);
            creatingGrid();
        } else if (button.id == 'xLarge') {
            gridSizeEl = 50;
            console.log('You chose GridSize: ' + gridSizeEl);
            creatingGrid();
        }
    })
});

//GRID COLOR
const colorButtons = document.querySelectorAll('.squareColorButton');
colorButtons.forEach((colorButton) => {
    // and for each one we add a 'click' listener
    colorButton.addEventListener('click', () => {
        if (colorButton.id == 'black') {
            colorOrBlack = 'black';
            console.log('You clicked: ' + colorOrBlack);
        } else if (colorButton.id == 'red') {
            colorOrBlack = 'red';
            console.log('You clicked: ' + colorOrBlack);
        } else if (colorButton.id == 'white') {
            colorOrBlack = 'white';
            console.log('You clicked: ' + colorOrBlack);
        }
    })
});

// FUNCTIONS
function creatingGrid() {
    emptyGrid();
    mainContainerEl.style.setProperty('grid-template-columns', `repeat(${gridSizeEl}, 1fr)`);
    mainContainerEl.style.setProperty('grid-template-rows', `repeat(${gridSizeEl}, 1fr)`);
    for (let index = 0; index < (gridSizeEl * gridSizeEl); index++) {
        mainContainerEl.appendChild(createGrid(index + 1));
    }
}

function createGrid(val) {
    const squareEl = document.createElement('div');
    squareEl.classList.add('box');
    squareEl.addEventListener('mouseover', boxesBackground);
    return squareEl;
}

function emptyGrid() {
    mainContainerEl.textContent = '';
}

function boxesBackground() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            if (colorOrBlack == null) {
                alert('You have to pick a color first!');
            } else if (colorOrBlack == 'black') {
                console.log('You picked: ' + colorOrBlack);
                onMouseOverBlack(box);
            } else if (colorOrBlack == 'red') {
                console.log('You picked: ' + colorOrBlack);
                onMouseOverColor(box);
            } else if (colorOrBlack == 'white') {
                console.log('You picked: ' + colorOrBlack);
                onMouseOverWhite(box);
            }
        })
    });
}

//MOUSEOVER
function onMouseOverBlack(box) {
    box.style.background = "black";
    box.classList.add('blackBackground');
}

function onMouseOverColor(box) {
    box.style.background = "red";
    box.classList.add('colorBackground');
}

function onMouseOverWhite(box) {
    box.style.background = "white";
    box.classList.add('whiteBackground');
}

creatingGrid();