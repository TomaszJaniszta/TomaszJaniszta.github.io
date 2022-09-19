  let play1;
  let play2;
  // ball_1
  let start1 = 0;
  let started1 = false;
  let time1 = 0;
  let timeBall_1 = document.getElementById('timeBall_1');
  
  // ball_2
  let start2 = 0;
  let started2 = false;
  let time2 = 0;
  let timeBall_2 = document.getElementById('timeBall_2');
  
  // board for ball_1 = board1
  let board1 = JSON.parse(JSON.stringify(board));
  // board for ball_2 = board
  let board2 = JSON.parse(JSON.stringify(board));
    
  
  class BallGenerator {
    constructor(board) {
      this.board = board;
    }
    generateBall() {
      let y;
      let x;
      for (let i = 0; i < board.length; i++) {
        let tempX = board[i].indexOf('1');
        if (tempX > -1) {
          y = i;
          x = tempX;
        }
      }
      return { y: y, x: x };
    }
  }

  class Vector {
    constructor(y, x) {
      this.x = x * this.randomVector();
      this.y = y * this.randomVector();
    }
    randomVector() {
      if (Math.random() < 0.5) {
        return -1;
      } else {
        return 1;
      }
    }
  }

  class Ball {
    constructor(y, x, vector) {
      this.x = x;
      this.y = y;
      this.vector = vector;
    }
    move() {
      this.x += this.vector.x;
      this.y += this.vector.y;
    }
  }

  class Game {
    constructor(ball, board) {
      this.ball = ball;
      this.board = board;
      this.startingX = Number(ball.x);
      this.startingY = Number(ball.y);
    }

    randomVector = () => {
      if (Math.random() < 0.5) {
        return (this.ball.vector.x *= -1);
      } else {
        return (this.ball.vector.y *= -1);
      }
    };

    checkForYCollision = () => {
      this.moveBall();
      this.randomVector();
    };

    checkForXCollision = () => {
      // corner X collision
      if (
        this.board[this.ball.y][this.ball.x + this.ball.vector.x] !== 'X' &&
        this.board[this.ball.y + this.ball.vector.y][this.ball.x] !== 'X'
      ) {
        this.randomVector();
      }
      // horizontal and vertical X collision
      if (this.board[this.ball.y][this.ball.x + this.ball.vector.x] === 'X') {
        this.ball.vector.x *= -1;
      }
      if (this.board[this.ball.y + this.ball.vector.y][this.ball.x] === 'X') {
        this.ball.vector.y *= -1;
      }
      this.moveBall();
    };

    moveBall = () => {
      this.board[this.ball.y][this.ball.x] = '0';
      this.board[this.ball.y + this.ball.vector.y][
        this.ball.x + this.ball.vector.x
      ] = '1';
      this.ball.move();
    };

    start(game_number) {
	    let common = () => { 
			if (
			  this.board[this.ball.y + this.ball.vector.y][
			  this.ball.x + this.ball.vector.x
			  ] === 'Y'
			) {
			  this.checkForYCollision();
			} else if (
			  this.board[this.ball.y + this.ball.vector.y][
			  this.ball.x + this.ball.vector.x
			  ] === 'X'
			) {
			  this.checkForXCollision();
			} else {
			  this.moveBall();
			};
		};
        // interval_1
		if(game_number === 1){
			  play1 = setInterval(() => {
				common();
				if(start1>0){
					time1++;
					updateBoard(board1, board2, start1, 0);
				};

				if (this.ball.x === this.startingX && this.ball.y === this.startingY) {
				  clearInterval(play1);
				  alert('Game done!');
				  // window.location.reload();
				  let ball = document.getElementById('ball_1');
				  ball.setAttribute("class", "Ball1");
				}
			  }, 1000);
		};
		// interval_2
		if(game_number === 2){
			  play2 = setInterval(() => {
				common();
				if(start2>0){
					time2++;
					updateBoard(board1, board2, 0, start2);
				};

				if (this.ball.x === this.startingX && this.ball.y === this.startingY) {
				  clearInterval(play2);
				  alert('Game done!');
				  // window.location.reload();
				  let ball = document.getElementById('ball_2');
				  ball.setAttribute("class", "Ball");
				}
			  }, 1000);
		};
    }
  }

  const updateBoard = (board1, board2, start1, start2) => {
	let divRow = 0;
		
	if(start1 > 0){ 
		timeBall_1.innerHTML = time1;
		let boardContainer1 = document.getElementById('boardContainer1');
		boardContainer1.innerHTML = '';
		
		board1.map((indexTable) => {
		  divRow++;
		  let boardRow = document.createElement("div");
		  boardRow.setAttribute("id", "divRow1"+divRow);
		  boardRow.setAttribute("style", "display: flex; flex-direction: column;"); // row/column
		  boardContainer1.appendChild(boardRow);

		  indexTable.map((element) => {
			if (element === 'X') {
				let boardElement = document.createElement("span"); // span/div
				boardElement.innerHTML ='<img src="./images/ball1/wall.jpg" alt="wall" width="100%" height:auto/>';
				boardElement.setAttribute("class", "Wall1");
				let divContainer = document.getElementById("divRow1"+divRow);
				divContainer.appendChild(boardElement);
			} else if (element === '1') {
				let boardElement = document.createElement("span");
				boardElement.innerHTML ='<img src="./images/ball1/ball.jpg" alt="ball" width="100%" height:auto/>';
				boardElement.setAttribute("id", "ball_1");
				if(started1){boardElement.setAttribute("class", "BallRunning1")}else{boardElement.setAttribute("class", "Ball1")};
				let divContainer = document.getElementById("divRow1"+divRow);
				divContainer.appendChild(boardElement);
			} else if (element === '0') {
				let boardElement = document.createElement("span");
				boardElement.innerHTML ='<img src="./images/ball1/air.gif" alt="air" width="100%" height:auto/>';
				boardElement.setAttribute("class", "Air");
				let divContainer = document.getElementById("divRow1"+divRow);
				divContainer.appendChild(boardElement);
			} else if (element === 'Y') {
				let boardElement = document.createElement("span");
				boardElement.innerHTML ='<img src="./images/ball1/y.jpg" alt="random" width="100%" height:auto/>';
				boardElement.setAttribute("class", "y1");
				let divContainer = document.getElementById("divRow1"+divRow);
				divContainer.appendChild(boardElement);
			}
		  });

		  boardContainer1.appendChild(boardRow);
		});
	};
	
	if(start2 > 0){
		timeBall_2.innerHTML = time2;
		let boardContainer2 = document.getElementById('boardContainer2');
		boardContainer2.innerHTML = '';
		
		board2.map((indexTable) => {
		  divRow++;
		  let boardRow = document.createElement("div");
		  boardRow.setAttribute("id", "divRow2"+divRow);
		  boardRow.setAttribute("style", "display: flex; flex-direction: column;"); // row/column
		  boardContainer2.appendChild(boardRow);

		  indexTable.map((element) => {
			if (element === 'X') {
				let boardElement = document.createElement("span"); // span/div
				boardElement.innerHTML ='C'; // g, C
				boardElement.setAttribute("class", "Wall");
				let divContainer = document.getElementById("divRow2"+divRow);
				divContainer.appendChild(boardElement);
			} else if (element === '1') {
				let boardElement = document.createElement("span");
				boardElement.innerHTML ='y';
				boardElement.setAttribute("id", "ball_2");
				if(started2){boardElement.setAttribute("class", "BallRunning")}else{boardElement.setAttribute("class", "Ball")};
				let divContainer = document.getElementById("divRow2"+divRow);
				divContainer.appendChild(boardElement);
			} else if (element === '0') {
				let boardElement = document.createElement("span");
				boardElement.innerHTML ='c';
				boardElement.setAttribute("class", "Air");
				let divContainer = document.getElementById("divRow2"+divRow);
				divContainer.appendChild(boardElement);
			} else if (element === 'Y') {
				let boardElement = document.createElement("span");
				boardElement.innerHTML ='s';
				boardElement.setAttribute("class", "y");
				let divContainer = document.getElementById("divRow2"+divRow);
				divContainer.appendChild(boardElement);
			}
		  });

		  boardContainer2.appendChild(boardRow);
		});
	};
};

 let startBall = new BallGenerator(board).generateBall();
 
 let myVector_1 = new Vector(1, 1);
 let myVector_2 = new Vector(1, 1);
 
 let movingBall_1 = new Ball(startBall.y, startBall.x, myVector_1);
 let movingBall_2 = new Ball(startBall.y, startBall.x, myVector_2);
  
 let game1 = new Game(movingBall_1, board1);
 let game2 = new Game(movingBall_2, board2);

// start board view
  updateBoard(board1,board2,1,1);
  
  let ball1button = document.getElementById('ball1button');
  ball1button.addEventListener('click', () => {handleButtonDown(1)});
  let ball2button = document.getElementById('ball2button');
  ball2button.addEventListener('click', () => {handleButtonDown(2)});
  
  let resetBtnBall1 = document.getElementById('resetBtnBall1');
  resetBtnBall1.addEventListener('click', () => {gameReset(1)});
  let resetBtnBall2 = document.getElementById('resetBtnBall2');
  resetBtnBall2.addEventListener('click', () => {gameReset(2)});

let handleButtonDown = (ball_game) => {
	if (ball_game === 1) {	  
		if (start1 < 1) {
		  game1.start(1);
		  start1 += 1;
		  started1 = !started1;
		  ball1button.innerHTML === "Start" ? ball1button.innerHTML = "Stop" : ball1button.innerHTML = "Start";
		} else {
		  start1 -= 1;
		  started1 = !started1;
		  ball1button.innerHTML === "Start" ? ball1button.innerHTML = "Stop" : ball1button.innerHTML = "Start";
		  clearInterval(play1);
		};
	};
	if (ball_game === 2) {	  
		if (start2 < 1) {
		  game2.start(2);
		  start2 += 1;
		  started2 = !started2;
		  ball2button.innerHTML === "Start" ? ball2button.innerHTML = "Stop" : ball2button.innerHTML = "Start";
		} else {
		  start2 -= 1;
		  started2 = !started2;
		  ball2button.innerHTML === "Start" ? ball2button.innerHTML = "Stop" : ball2button.innerHTML = "Start";
		  clearInterval(play2);
		};
	};
};
  
let gameReset = (game_number) => {
	alert('Game reset');
	
	if(game_number == 1){
		clearInterval(play1);
		myVector_1 = new Vector(1, 1);
		startBall = new BallGenerator(board).generateBall();
		movingBall_1 = new Ball(startBall.y, startBall.x, myVector_1);
		time1 = 0;
		started1 = false;
		start1 = 0;
		board1 = JSON.parse(JSON.stringify(board));
		game1 = new Game(movingBall, board1);
		updateBoard(board1, board2, 1, 0);
		ball1button.innerHTML = "Start";
	};
		
	if(game_number == 2){
		clearInterval(play2);
		myVector_2 = new Vector(1, 1);
		startBall = new BallGenerator(board).generateBall();
		movingBall_2 = new Ball(startBall.y, startBall.x, myVector_2);
		time2 = 0;
		started2 = false;
		start2 = 0;
		board2 = JSON.parse(JSON.stringify(board));
		game2 = new Game(movingBall, board2);
		updateBoard(board1, board2, 0, 1);
		ball2button.innerHTML = "Start";
	};
};