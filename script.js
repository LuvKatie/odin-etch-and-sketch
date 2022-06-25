const body = document.querySelector('body');

const container = document.createElement('div');
const btnDiv = document.createElement('div');
const create = document.createElement('button');


create.classList.add('makeBoard');
container.classList.add('board');
btnDiv.classList.add('btn');

create.textContent = 'How Big?';

container.setAttribute('style', `height: 640px; width: 640px;`);

const selectContainer = document.querySelector('.board');
const btnContainer = document.querySelector('.btn');
const createBtn = document.querySelector('.makeBoard');

body.append(container, btnDiv);
btnDiv.appendChild(create);


create.addEventListener('click', () => {
        let boardSize = prompt('Enter desired squares up to 100: ');
        let perimeter = 640 / boardSize;
        let area = boardSize * boardSize;

        if (boardSize == null || boardSize == undefined || isNaN(boardSize)) {
            alert('Please enter a correct response!');
            return; 
        }

        if (!isNaN(boardSize) && boardSize <= 100 && boardSize > 0) {
            for (i = 0; i < area; i++) {
                let square = document.createElement('div');
                square.setAttribute('style', `width: ${perimeter}px; height: ${perimeter}px; background-color: plum; border: solid lime 1px; box-sizing: border-box;`);
                container.appendChild(square);
            }
        } else {
            alert(`${boardSize} is too high or not a positive integer!`);
            return;
        }
});

// Target divs within the Children of Container to set hover effects