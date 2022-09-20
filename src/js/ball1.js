  // ball_1
  let play1;
  let start1 = 0;
  let started1 = false;
  let time1 = 0;
  let timeBall_1 = document.getElementById('timeBall_1');
  
  // board for ball_1 = board1
  let board1 = JSON.parse(JSON.stringify(board));

  class BallGenerator1 {
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

  class Vector1 {
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

  class Ball1 {
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

  class Game1 {
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
        // interval_1
			  play1 = setInterval(() => {
				common();
				if(start1>0){
					time1++;
					updateBoard1();
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
  };

  const updateBoard1 = () => {
	let divRow = 0;
		
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

 let startBall_1 = new BallGenerator1(board).generateBall();
 let myVector_1 = new Vector1(1, 1);
 let movingBall_1 = new Ball1(startBall_1.y, startBall_1.x, myVector_1);
  
 let game1 = new Game1(movingBall_1, board1);

// start board view
  updateBoard1();
  
  let ball1button = document.getElementById('ball1button');
  ball1button.addEventListener('click', () => {handleButtonDown1()});
  
  let resetBtnBall1 = document.getElementById('resetBtnBall1');
  resetBtnBall1.addEventListener('click', () => {gameReset1()});

let handleButtonDown1 = () => { 
	if (start1 < 1) {
	  game1.start();
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
  
let gameReset1 = () => {
	alert('Game reset');
	clearInterval(play1);
	board1 = JSON.parse(JSON.stringify(board))
	myVector_1 = new Vector1(1, 1);
	startBall_1 = new BallGenerator1(board).generateBall();
	movingBall_1 = new Ball1(startBall_1.y, startBall_1.x, myVector_1);
	time1 = 0;
	started1 = false;
	start1 = 0;
	game1 = new Game1(movingBall_1, board1);
	updateBoard1();
	ball1button.innerHTML = "Start";
};