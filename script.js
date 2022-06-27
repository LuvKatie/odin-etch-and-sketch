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


// removes any children if they exist on the Etch and Sketch board
function reset() {
    let child = container.lastElementChild;

    while(child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }
}
// changes each square to a random color when hovered over
function hover() {
    const child = container.querySelectorAll('div');

    child.forEach(div => {
        div.addEventListener('mouseover', (e) => {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            e.target.style.backgroundColor = "#" + randomColor;
        })
    })
}


// prompt for an integer for an X by X grid and then creating said grid within the browser
create.addEventListener('click', () => {
        let boardSize = prompt('Enter desired squares up to 100: ');
        let perimeter = 640 / boardSize;
        let area = boardSize * boardSize;

        if (boardSize == null || boardSize == undefined || isNaN(boardSize)) {
            alert('Please enter a correct response!');
            return; 
        }

        if (container.children.length > 1) {
            reset();
        }

        if (!isNaN(boardSize) && boardSize <= 100 && boardSize > 0) {
            for (i = 0; i < area; i++) {
                const square = document.createElement('div');
                square.setAttribute('style', `width: ${perimeter}px; height: ${perimeter}px; background-color: #FFFAF0; border: solid #696969 1px; box-sizing: border-box;`);
                container.appendChild(square);
            }

        hover();

        } else {
            alert(`${boardSize} is too high or not a positive integer!`);
            return;
        }
});