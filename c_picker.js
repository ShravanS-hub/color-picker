let noOfSquares = 6;
let colors = [];
let pickedColor;

const squares = document.querySelectorAll(".square");
const targetColor = document.getElementById("targetColor");
const message = document.getElementById("message");
const head = document.querySelector("h1");
const resetButton = document.getElementById("NewColor");

function init() {
    setupSquares();
    reset();
}

function reset() {
    colors = generateRandomColors(noOfSquares);
    pickedColor = pickColor();
    targetColor.textContent = pickedColor;
    message.textContent = "";
    head.style.backgroundColor = "steelblue";

    squares.forEach((square, index) => {
        if (colors[index]) {
            square.style.display = "block";
            square.style.backgroundColor = colors[index];
        } else {
            square.style.display = "none";
        }
    });
}

function setupSquares() {
    squares.forEach((square) => {
        square.addEventListener("click", function () {
            const clickedColor = this.style.backgroundColor;

            if (clickedColor === pickedColor) {
                message.textContent = "Correct!";
                message.style.color = "green";
                changeColors(pickedColor);
                head.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                message.textContent = "Try Again";
                message.style.color = "red";
            }
        });
    });
}

function changeColors(color) {
    squares.forEach((square) => {
        square.style.backgroundColor = color;
    });
}

function pickColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function generateRandomColors(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

resetButton.addEventListener("click", function () {
    this.textContent = "New Colors";
    reset();
});

init();
