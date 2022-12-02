//Variables
const mainContainerEl = document.querySelector('.mainContainer');
const gridSizeEl = document.querySelector('.gridSize');

// Styling
mainContainerEl.style.setProperty('grid-template-columns', `repeat(${gridSizeEl.textContent}, 1fr)`);
mainContainerEl.style.setProperty('grid-template-rows', `repeat(${gridSizeEl.textContent}, 1fr)`);

// GRID Function
function createGrid(val) {
    const squareEl = document.createElement('div');
    squareEl.textContent = val
    return squareEl;
}

//GRID Creation
for (let index = 0; index < (gridSizeEl.textContent * gridSizeEl.textContent); index++) {
    mainContainerEl.appendChild(createGrid(index + 1));
}

console.log('1 mainContainerEl.className' + mainContainerEl.className);
console.log('2 gridSizeEl.textContent ' + gridSizeEl.textContent);