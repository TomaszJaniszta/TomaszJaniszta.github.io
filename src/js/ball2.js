  // ball_2
  let play2;
  let start2 = 0;
  let started2 = false;
  let time2 = 0;
  let timeBall_2 = document.getElementById('timeBall_2');
  
  // board for ball_2 = board
  let board2 = JSON.parse(JSON.stringify(board));
    
  class BallGenerator2 {
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

  class Vector2 {
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

  class Ball2 {
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

  class Game2 {
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

    start() {
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
		// interval_2
			  play2 = setInterval(() => {
				common();
				if(start2>0){
					time2++;
					updateBoard2();
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
  };

  const updateBoard2 = () => {
	let divRow = 0;
	
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

 let startBall_2 = new BallGenerator2(board).generateBall();
 let myVector_2 = new Vector2(1, 1);
 let movingBall_2 = new Ball2(startBall_2.y, startBall_2.x, myVector_2);
  
 let game2 = new Game2(movingBall_2, board2);

// start board view
  updateBoard2();
  
  let ball2button = document.getElementById('ball2button');
  ball2button.addEventListener('click', () => {handleButtonDown2()});
  
  let resetBtnBall2 = document.getElementById('resetBtnBall2');
  resetBtnBall2.addEventListener('click', () => {gameReset2()});

let handleButtonDown2 = () => { 
		if (start2 < 1) {
		  game2.start();
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
  
let gameReset2 = () => {
	alert('Game reset');
	clearInterval(play2);
	board2 = JSON.parse(JSON.stringify(board));
	myVector_2 = new Vector2(1, 1);
	startBall_2 = new BallGenerator2(board).generateBall();
	movingBall_2 = new Ball2(startBall_2.y, startBall_2.x, myVector_2);
	time2 = 0;
	started2 = false;
	start2 = 0;
	game2 = new Game2(movingBall_2, board2);
	updateBoard2();
	ball2button.innerHTML = "Start";
};