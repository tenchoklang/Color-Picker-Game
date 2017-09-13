
var squares = document.getElementsByClassName("square");
var numberOfSquares = squares.length;
var colorArr = [];
var title = document.querySelector(".title")
var tryAgain = document.querySelector("#tryAgain")
// var easy = document.querySelector("#easy");
// var hard = document.querySelector("#hard");
var newGame = document.querySelector("#newGame");
var mode = document.querySelectorAll(".mode")
initialize(numberOfSquares);

// easy.addEventListener("click", function(){
// 	this.classList.add("difficulty")
// 	hard.classList.remove("difficulty")
// 	clear(squares.length);
// 	numberOfSquares = 3;
// 	initialize(numberOfSquares);
// })

// hard.addEventListener("click", function(){
// 	this.classList.add("difficulty")
// 	easy.classList.remove("difficulty")
// 	clear(numberOfSquares);
// 	numberOfSquares =6;
// 	initialize(numberOfSquares);
// })

// newGame.addEventListener("click", function(){
// 	clear(squares.length);
// 	tryAgain.style.color = "white"
// 	initialize(squares.length);
// })


for(var i=0;i<mode.length;i++){
	mode[i].addEventListener("click", function(){
		clear(numberOfSquares);
		if(this.textContent == "EASY"){
			this.classList.add("selected")
		 	mode[2].classList.remove("selected")
			numberOfSquares =3;
		}else if(this.textContent == "HARD"){
			this.classList.add("selected")
		 	mode[1].classList.remove("selected")
			numberOfSquares =6;
		}else{
			tryAgain.style.color = "white"
		}
	initialize(numberOfSquares);
	})
}



function initialize(numberOfSquares){
    correctAnswer = Math.floor(Math.random() * numberOfSquares);

	for(var i=0;i<numberOfSquares;i++){
		var r = Math.floor(Math.random() * 255);
		var g = Math.floor(Math.random() * 255);
		var b = Math.floor(Math.random() * 255);
		var rgbColor = "rgb(" + r + ", " + g + ", " + b + ")";
		colorArr[i] = rgbColor;
		squares[i].style.visibility = "visible"
		squares[i].style.backgroundColor = rgbColor;
		
		squares[i].addEventListener("click", function(){
			individualColor = this.style.backgroundColor;
			if(individualColor === colorArr[correctAnswer]){
				newGame.textContent = "PLAY AGAIN?"
				tryAgain.style.color = "black"
				tryAgain.textContent = "CORRECT"
				title.style.backgroundColor = colorArr[correctAnswer]
				changeColor(numberOfSquares, colorArr[correctAnswer])
				console.log("CORRECT")
			}else{
				this.style.backgroundColor = "#232323"
				tryAgain.style.color = "black";
				tryAgain.textContent = "INCORRECT"
				console.log("INCORRECT")
			}
		})
	}
	dynamicTitle.textContent = colorArr[correctAnswer];
	console.log(correctAnswer)
}

function clear(numberOfSquares){
	newGame.textContent = "NEW GAME"
	title.style.backgroundColor = "steelblue"
	tryAgain.style.color = "white";
	for(i = 0;i<numberOfSquares;i++){
		//squares[i].style.backgroundColor = "#232323"
		squares[i].style.visibility = "hidden"
	}
}

function changeColor(numberOfSquares, color){/*change all the square to correct color*/
	for(a=0;a<numberOfSquares;a++){
		squares[a].style.backgroundColor = color
	}
}








/*
var squares = document.getElementsByClassName("square");
var colorArr = [];
var colorNumber;
var numberOfSquares = 6;
var titleBackground = document.getElementsByClassName("title");

var dynamicTitle = document.querySelector("#dynamicTitle");

var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

easy.addEventListener("click", function(){
	numberOfSquares = 3;
	initializeSquares();
})

hard.addEventListener("click", function(){
	numberOfSquares =6;
	initializeSquares();
})

var correctAnswer = Math.floor(Math.random() * numberOfSquares);



function initializeSquares(){
	for(i=0;i<numberOfSquares;i++){
	colorNumber = "#"+((1<<24)*Math.random()|0).toString(16);
	colorArr[i] = colorNumber;
	squares[i].style.backgroundColor = colorNumber;

	if(i == correctAnswer){
		squares[correctAnswer].addEventListener("click", function(){
		console.log("YOU ARE CORRECT")
		titleBackground[0].style.backgroundColor = colorArr[correctAnswer];
		for(i=0;i<squares.length;i++){
			squares[i].style.backgroundColor = colorArr[correctAnswer];
		}
		})
	} 	
	else{
		squares[i].addEventListener("click" , function(){
			console.log("YOU ARE INCORRECT")
			this.style.backgroundColor = "#232323"
		})
	}
}

console.log(correctAnswer)
dynamicTitle.textContent = colorArr[correctAnswer];
}

*/