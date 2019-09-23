var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
var pickedDisplay = document.getElementById("pickedColor");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


pickedDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    pickedDisplay.textContent = pickedColor;
    for (i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    pickedDisplay.textContent = pickedColor;
    for (i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
    
})

resetButton.addEventListener("click", function() {
    colors = generateRandomColors(numSquares);
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    pickedColor = pickColor();
    pickedDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function() {
            clickedColor = this.style["backgroundColor"];
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(pickedColor);
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play Again?";
            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        })
    }
})

for (i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function() {
        clickedColor = this.style["backgroundColor"];
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(pickedColor);
            h1.style.backgroundColor = pickedColor;
            resetButton.textContent = "Play Again?";
        }
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    })
}

function changeColors(color) {
    for (i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for (i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}