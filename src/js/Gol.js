// copy orginal board
let boardGOLtemp = [].concat(boardGOL); 
let timeGol = 0;
let timeGolHtml = document.getElementById('timeGol');
	
// <img src={cell} alt="" className={styles.Ball} />
// <img src={air} alt="" className={styles.Air} />

const updateBoardGol = () => {
	let divRow = 0;
	let boardGolContainer = document.getElementById('boardGolContainer');
	boardGolContainer.innerHTML = '';
	
    boardGOLtemp.map((indexTable) => {	
      divRow++;
      let boardRow = document.createElement("div");
      boardRow.setAttribute("id", "divRowGOL"+divRow);
	  boardRow.setAttribute("style", "display: flex; flex-direction: column;");
      boardGolContainer.appendChild(boardRow);

      indexTable.map((element) => {
			if (element === 1) {
				let boardElement = document.createElement("span");
				boardElement.innerHTML = '<img src="./images/gol/cell2.gif" alt="Cell field" width="100%" height:auto/>';
				let divContainer = document.getElementById("divRowGOL"+divRow);
				divContainer.appendChild(boardElement);
			} else {
				let boardElement = document.createElement("span");
				boardElement.innerHTML = '<img src="./images/gol/air3.jpg" alt="Air field" width="100%" height:auto/>';
				let divContainer = document.getElementById("divRowGOL"+divRow);
				divContainer.appendChild(boardElement);
			}
      });
	  
      boardGolContainer.appendChild(boardRow);
    });
};
	//-------------------------------------

class LifeCounter {
	constructor(board, x, y) {
		this.board = board;
		this.x = x;
		this.y = y;
		this.range = this.cellRange();
		this.count = this.count();
	}
	cellRange() {
		let range = [];
		for (let x = -1; x < 2; x += 1) {
			for (let y = -1; y < 2; y += 1) {
				if (!(x === 0 && y === 0)) {
					range.push([x, y]);
				}
			}
		}
		return range;
	};
	count() {
		let lifeConditionCount = 0;
		for (let i = 0; i < this.range.length; i += 1) {
			let result = () => {
				// if beside the board or 0 return false
				if ((this.x + this.range[i][0]) < 0 ||
					(this.y + this.range[i][1]) < 0 ||
					(this.x + this.range[i][0]) > (this.board.length - 1) ||
					(this.y + this.range[i][1]) > (this.board.length - 1)) {
					return false;
				} else if (this.board[this.x + this.range[i][0]][this.y + this.range[i][1]] > 0) {
					return true;
				} else { return false };
			};
			if (result() === true) { lifeConditionCount++ };
		};
		return lifeConditionCount
	};
};

class GameGOL {
	constructor(board) {
		this.board = board;
	};
	start() {
		let tempBoard = [];
		for (let x = 0; x < board.length; x += 1) {
			tempBoard.push([0]);
			for (let y = 0; y < board.length; y += 1) {
				let lifeConditionCount = new LifeCounter(this.board, x, y).count;
				// life conditions for cells
				if (lifeConditionCount === 3) { tempBoard[x][y] = 1 }
				else if (this.board[x][y] === 1 && lifeConditionCount === 2) { tempBoard[x][y] = 1 }
				else { tempBoard[x][y] = 0 };
			};
		};
		boardGOLtemp = [].concat(tempBoard);
		updateBoardGol();
	};
};

let playGol;
let gameGolStart = () => {
	playGol = setInterval(() => {
		let game = new GameGOL(boardGOLtemp).start();
		timeGol++;
		timeGolHtml.innerHTML = timeGol;
	}, 1000)
	document.getElementById("golButton").disabled = true;
};

let gameGolReset = () => {
	clearInterval(playGol);
	alert('Game reset');
	timeGol = 0;
	boardGOLtemp = JSON.parse(JSON.stringify(boardGOL));
	updateBoardGol();
	document.getElementById("golButton").disabled = false;
	timeGolHtml.innerHTML = timeGol;
};

let golButton = document.getElementById('golButton');
golButton.addEventListener('click', () => {gameGolStart()});

let resetGolBtn = document.getElementById('resetGolBtn');
resetGolBtn.addEventListener('click', () => {gameGolReset()});

updateBoardGol();

// <div className={styles.board} >
// <button id="Btn1" disabled={false} onClick={gameStart} > Start life! </button>
// <div className={styles.board1}>