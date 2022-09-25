// copy orginal board
// let boardGOLtemp = [].concat(boardGOL); 
let boardGOLtemp = JSON.parse(JSON.stringify(boardGOL));
let timeGol = 0;
let timeGolHtml = document.getElementById('timeGol');
let playGol;
let boardGolContainer = document.getElementById('boardGolContainer');

const updateBoardGol = () => {
	boardGolContainer.innerHTML = '';

	let col = -1;
    boardGOLtemp.forEach(indexTable => {
	  //number array
	  col++;  
      let boardRow = document.createElement("div");
      boardRow.setAttribute("id", ("col"+col));
	  boardRow.setAttribute("style", "display:   ");

      boardGolContainer.appendChild(boardRow);

	  let elementNr = -1;
      indexTable.forEach(element => {
			elementNr++;  
			if (element === 1) {
				let boardElement = document.createElement("span");
				boardElement.setAttribute("id", (elementNr)+"."+(col));
				boardElement.innerHTML = '<img src="./images/gol/cell2.gif" alt="Cell field" width="100%" height:auto class="cell">';
				boardRow.appendChild(boardElement);
				
				boardElement.addEventListener('click', () => {
					changeCell(
						boardElement.id
					);
				});
			} else {
				let boardElement = document.createElement("span");
				boardElement.setAttribute("id", (elementNr)+"."+(col));
				boardElement.innerHTML = '<img src="./images/gol/air3.jpg" alt="Air field" width="100%" height:auto class="air">';
				boardRow.appendChild(boardElement);

				boardElement.addEventListener('click', () => {
					changeCell(
						boardElement.id
					);
				});
			}
      });
	  
    });
};

const changeCell =(id) => {
	let y=id.split(".")[0];
	let x=id.split(".")[1];
	console.log(x, y);
	if(boardGOLtemp[x][y]===1){boardGOLtemp[x][y]=0}else{boardGOLtemp[x][y]=1};
	updateBoardGol();
};

class LifeCounter {
	constructor(board, x, y) {
		this.board = board;
		this.x = x;
		this.y = y;
		this.range = this.cellRange();
		this.count = this.count();
	};
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
		for (let x = 0; x < board.length+1; x += 1) {
			tempBoard.push([0]);
			for (let y = 0; y < board.length+1; y += 1) {
				let lifeConditionCount = new LifeCounter(this.board, x, y).count;
				// life conditions for cells
				if (lifeConditionCount === 3) { tempBoard[x][y] = 1 }
				else if (this.board[x][y] === 1 && lifeConditionCount === 2) { tempBoard[x][y] = 1 }
				else { tempBoard[x][y] = 0 };
			};
		};
		boardGOLtemp = JSON.parse(JSON.stringify(tempBoard));
		updateBoardGol();
	};
};

updateBoardGol();

let golButton = document.getElementById('golButton');
golButton.addEventListener('click', () => {gameGolStart()});

let resetGolBtn = document.getElementById('resetGolBtn');
resetGolBtn.addEventListener('click', () => {gameGolReset()});

let fillAll = document.getElementById('fillAllBtn');
fillAll.addEventListener('click', () => {fillAllBoard()});

function fillAllBoard(){
	boardGOLtemp = [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	  ];
	updateBoardGol();
};

function gameGolStart(){
	golButton.setAttribute("disabled", null);
	resetGolBtn.removeAttribute('disabled');
    
	playGol = setInterval(() => {
		let game = new GameGOL(boardGOLtemp).start();
		timeGol++;
		timeGolHtml.innerHTML = timeGol;
    }, 1000);
};

function gameGolReset(){
	clearInterval(playGol);
	alert('Game reset');
	timeGol = 0;
	timeGolHtml.innerHTML = timeGol;
	boardGOLtemp = JSON.parse(JSON.stringify(boardGOL));
	updateBoardGol();
	
	golButton.removeAttribute('disabled');
	resetGolBtn.setAttribute("disabled", null);
};