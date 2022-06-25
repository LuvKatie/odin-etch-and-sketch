const body = document.querySelector('body');

const container = document.createElement('div');
const btnDiv = document.createElement('div');
const create = document.createElement('button');


create.classList.add('makeBoard');
container.classList.add('board');
btnDiv.classList.add('btn');

create.textContent = 'How Big?';


const selectContainer = document.querySelector('.board');
const btnContainer = document.querySelector('.btn');
const createBtn = document.querySelector('.makeBoard');

body.append(container, btnDiv);
btnDiv.appendChild(create);

let boardSize;
let squareSize;

create.addEventListener('click', () => {
        boardSize = prompt('Enter one integer for your square Etch and Sketch: ');
        container.setAttribute('style', `height: ${boardSize}px; width: ${boardSize}px;`);
        // squareSize = boardSize / 10;

        if (!isNaN(boardSize)) {
            for (i = 0; i <= boardSize; i++) {
                let square = document.createElement('div');
                // square.setAttribute('style', `height: ${squareSize}px; width: ${squareSize}px; background-color: blue;`);
                container.appendChild(square);
            }
        }
});

// Target divs within the Children of Container to set hover effects