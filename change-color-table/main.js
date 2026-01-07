console.log(`LOADING...`);


let insertCells = document.querySelector('.insert-cells');
let btn = document.querySelector('button');
let changeColor = document.querySelector('div')
let testColor = document.querySelector('.change')
function insert() {
    let numberOfCells = 8;
    return function () {
        for (let i = 1; i <= numberOfCells; i++) {
            let insertCells1 = document.createElement('div')
            insertCells1.textContent = [i];
            insertCells1.className = "name";
            insertCells.appendChild(insertCells1);
        }
    }
}

function changeCellsColor() {
    let standardColor = '#';
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return function () {
        standardColor += `(${red}, ${green},${blue})`;
        // console.log(standardColor);
        btn.textContent = 'standardColor';
        btn.target.style.backgroundColor = "lightblue";
    }
    
} 

btn.addEventListener('click', insert());
testColor.addEventListener('click', changeCellsColor());