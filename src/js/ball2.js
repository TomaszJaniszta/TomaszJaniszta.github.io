  let play;
  let start = 0;
  let started = false;
  let time = 0;

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

    start() {
      // interval
      play = setInterval(() => {
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
        }
        setTime(time += 1);

        updateBoard(); // update board

        if (this.ball.x === this.startingX && this.ball.y === this.startingY) {
          clearInterval(play);
          alert('Game done!');
          console.log('Game over');
          window.location.reload();
        }
      }, 1000);
    }
  }

  let startBall = new BallGenerator(board).generateBall();
  let myVector = new Vector(1, 1);
  let movingBall = new Ball(startBall.y, startBall.x, myVector);
  let game = new Game(movingBall, board);

  let timeBall2 = document.getElementById('timeBall2');

  gameReset = () => {
    clearInterval(play);
    window.location.reload();
  };

  handleButtonDown = () => {
    console.log('Button pressed');
    if (start < 1) {
      game.start();
      console.log("started");
      start += 1;
      started = !started;
      ball2button.innerHTML === "Start" ? ball2button.innerHTML = "Stop" : ball2button.innerHTML = "Start";
    } else {
      start -= 1;
      started = !started;
      ball2button.innerHTML === "Start" ? ball2button.innerHTML = "Stop" : ball2button.innerHTML = "Start";
      clearInterval(play);
    }
  };

  // cleanup this component
  // ??
  // clearInterval(play);
  // element.removeEventListener('click', handleButtonDown);

const updateBoard = () => {
  timeBall2.innerHTML = time;
		let divRow = 0;
		let boardContainer = document.getElementById('boardContainer');
	  // boardContainer.remove(); 

    board.map((indexTable) => {
      divRow++;
      let boardRow = document.createElement("div");
      boardRow.setAttribute("id", "divRow"+divRow);
      boardContainer.appendChild(boardRow);

      indexTable.map((element) => {
        if (element === 'X') {
        let boardElement = document.createElement("span");
          boardElement.innerHTML ='C'; // g, C
          boardElement.setAttribute("class", "Wall");
        let divContainer = document.getElementById("divRow"+divRow);
          divContainer.appendChild(boardElement);
        } else if (element === '1') {
        let boardElement = document.createElement("span");
          boardElement.innerHTML ='y';
          boardElement.setAttribute("id", "ball");
          if(started){boardElement.setAttribute("class", "BallRunning")}else{boardElement.setAttribute("class", "Ball")}; // do zamiany
        let divContainer = document.getElementById("divRow"+divRow);
          divContainer.appendChild(boardElement);
        } else if (element === '0') {
        let boardElement = document.createElement("span");
          boardElement.innerHTML ='c';
          boardElement.setAttribute("class", "Air");
        let divContainer = document.getElementById("divRow"+divRow);
          divContainer.appendChild(boardElement);
        } else if (element === 'Y') {
        let boardElement = document.createElement("span");
          boardElement.innerHTML ='s';
          boardElement.setAttribute("class", "y");
        let divContainer = document.getElementById("divRow"+divRow);
          divContainer.appendChild(boardElement);
        }
      });

      boardContainer.appendChild(boardRow);
    });

};