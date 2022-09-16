let gamePawns = ['K', 'Q', 'T', 'H', 'L'];
let moves;
let chess;
let boardChessCopy = JSON.parse(JSON.stringify(boardChess));

const updateBoardChess = () => {
	let divRow = 0;
	let chessBoardContainer = document.getElementById('chessBoardContainer');
	chessBoardContainer.innerHTML = '';

    boardChess.map((indexTable) => {
      divRow++;
      let boardRow = document.createElement("div");
      boardRow.setAttribute("id", "divRowChess"+divRow);
	  boardRow.setAttribute("style", "display: flex; flex-direction: row;");
      chessBoardContainer.appendChild(boardRow);

      indexTable.map((element) => {
        if (element === 'B') {
        let boardElement = document.createElement("span");
          boardElement.innerHTML = '<img src="./images/chess/black100.gif" alt="Black field" />'
        let divContainer = document.getElementById("divRowChess"+divRow);
          divContainer.appendChild(boardElement);
        } else if (element === 'W') {
        let boardElement = document.createElement("span");
          boardElement.innerHTML = '<img src="./images/chess/white100.gif" alt="White field" />'
        let divContainer = document.getElementById("divRowChess"+divRow);
          divContainer.appendChild(boardElement);
        } else if (element === 'T') {
        let boardElement = document.createElement("span");
          boardElement.innerHTML = '<img src="./images/chess/tower100.gif" alt="Tower" />'
        let divContainer = document.getElementById("divRowChess"+divRow);
          divContainer.appendChild(boardElement);
        } else if (element === 'H') {
        let boardElement = document.createElement("span");
          boardElement.innerHTML = '<img src="./images/chess/horse.gif" alt="Horse" />'
        let divContainer = document.getElementById("divRowChess"+divRow);
          divContainer.appendChild(boardElement);
        } else if (element === 'L') {
        let boardElement = document.createElement("span");
          boardElement.innerHTML = '<img src="./images/chess/laufer.gif" alt="Laufer" />'
        let divContainer = document.getElementById("divRowChess"+divRow);
          divContainer.appendChild(boardElement);
        } else if (element === 'K') {
        let boardElement = document.createElement("span");
          boardElement.innerHTML = '<img src="./images/chess/king.gif" alt="King" />'
        let divContainer = document.getElementById("divRowChess"+divRow);
          divContainer.appendChild(boardElement);
        } else if (element === 'Q') {
        let boardElement = document.createElement("span");
          boardElement.innerHTML = '<img src="./images/chess/queen.gif" alt="Queen" />'
        let divContainer = document.getElementById("divRowChess"+divRow);
          divContainer.appendChild(boardElement);
        } else if (element === 'X') {
        let boardElement = document.createElement("span");
          boardElement.innerHTML = '<img src="./images/chess/red100.gif" alt="Red field" />'
        let divContainer = document.getElementById("divRowChess"+divRow);
          divContainer.appendChild(boardElement);
        }
      });

      chessBoardContainer.appendChild(boardRow);
    });
};

    class ChessOnBoardGenerator {
        constructor(boardChess) {
            this.boardChess = boardChess;
        };
        generateChess() {
            let randomNumber = (min, max) => {
                return Math.floor(Math.random() * (max - min + 1) + min);
            };
            let randomPawn = gamePawns[randomNumber(0, gamePawns.length - 1)];
            let y = randomNumber(0, 7);
            let x = randomNumber(0, 7);
			
            let checkBoardForNewPawn = (value, gamePawns) => {
                let status = false;
                for (let i = 0; i < gamePawns.length; i++) {
                    let pawn = gamePawns[i];
                    if (pawn == value) {
                        status = true;
                        break
                    };
                } return status;
            };
			
            let chessOnBoard = (x, y, gamePawns) => {
                let pawnExist = checkBoardForNewPawn(boardChess[x][y], gamePawns);
                if (pawnExist !== true) {
                } else {
                    y = randomNumber(0, 7);
                    x = randomNumber(0, 7);
                    chessOnBoard();
                };
            };
            boardChess[x][y] = randomPawn;
            return { figureType: randomPawn, x: x, y: y }
        };
    };

    // factory
    const movesGenerator = (function () {
        class King {
            constructor(options) {
                this.moves = this.move();
            }
            move() {
                let moves = [];
                for (let x = -1; x < 2; x += 1) {
                    for (let y = -1; y < 2; y += 1) {
                        if (!(x === 0 && y === 0)) {
                            moves.push([x, y]);
                        };
                    };
                };
                return moves;
            };
        };
        class Horse {
            constructor(options) {
                this.moves = this.move();
            }
            move() {
                let moves = [];
                for (let x = -2; x < 3; x += 1) {
                    for (let y = -2; y < 3; y += 1) {
                        if (x !== y && -x !== y && y !== 0 && x !== 0) {
                            moves.push([x, y]);
                        };
                    };
                };
                return moves;
            };
        };
        class Queen {
            constructor(options) {
                this.moves = this.move();
            }
            move() {
                let moves = [];
                for (let x = -7; x < 8; x += 1) {
                    for (let y = -7; y < 8; y += 1) {
                        // slants
                        if (!(x === 0 && y === 0) && (x === y) || !(x === 0 && y === 0) && (-x === y)
                            // vertical and horizontal
                            || x !== 0 && y === 0 || y !== 0 && x === 0) {
                            moves.push([x, y]);
                        };
                    };
                };
                return moves;
            };
        };
        class Laufer {
            constructor(options) {
                this.moves = this.move();
            }
            move() {
                let moves = [];
                for (let x = -7; x < 8; x += 1) {
                    for (let y = -7; y < 8; y += 1) {
                        if (!(x === 0 && y === 0) && (x === y) || !(x === 0 && y === 0) && (-x === y)) {
                            moves.push([x, y]);
                        };
                    };
                };
                return moves;
            };
        };
        class Tower {
            constructor(options) {
                this.moves = this.move();
            }
            move() {
                let moves = [];
                for (let x = -7; x < 8; x += 1) {
                    for (let y = -7; y < 8; y += 1) {
                        if (x !== 0 && y === 0 || y !== 0 && x === 0) {
                            moves.push([x, y]);
                        };
                    };
                };
                return moves;
            };
        };
        return {
            createMoves: options => {
                if (options.figureType === "Q") { return new Queen(options) };
                if (options.figureType === "K") { return new King(options) };
                if (options.figureType === "L") { return new Laufer(options) };
                if (options.figureType === "H") { return new Horse(options) };
                if (options.figureType === "T") { return new Tower(options) };
            }
        };
    })();

    const king = movesGenerator.createMoves({ figureType: "K" });
    const queen = movesGenerator.createMoves({ figureType: "Q" });
    const laufer = movesGenerator.createMoves({ figureType: "L" });
    const horse = movesGenerator.createMoves({ figureType: "H" });
    const tower = movesGenerator.createMoves({ figureType: "T" });

    class GameChess {
        constructor(boardChess, pawnArray, chess, moves){
            this.boardChess = boardChess;
            this.pawnArray = pawnArray;
            this.chess = chess;
            this.moves = moves;
        };
		
        gameStart() {
            chess = new ChessOnBoardGenerator(boardChess).generateChess();
			console.log(chess);
            // add information on site
            let tag = document.createElement("p");
            let text = document.createTextNode(
                `${chess.figureType == 'K' ? 'King' :
                    chess.figureType == 'Q' ? 'Queen' :
                        chess.figureType == 'L' ? 'Laufer' :
                            chess.figureType == 'H' ? 'Horse' :
                                'Tower'
                } appear on x=${chess.x}, y=${chess.y}`);
            tag.appendChild(text);
            let element = document.getElementById("resultChess");
            element.appendChild(tag);
			
            // checking whole board for figures and their moves, if figure can be beaten than sending the result
            let checkBoardForExistingPawn = (x, y, boardChess, pawnArray) => {
                let status = false;
                for (let i = 0; i < pawnArray.length; i += 1) {
                    // if move beside of the board than false 
                    if (x < 0 || y < 0 || x > 7 || y > 7) { return false };
                    let pawn = pawnArray[i];
                    if (pawn === boardChess[x][y]) {
                        status = true;
                        break;
                    }
                }
                return status;
            };
			
            let markMovesOnBoard = (x, y, boardChess) => {
                for (let i = 0; i < moves.length; i += 1) {
                    let j = Number(x) + moves[i][0];
                    let k = Number(y) + moves[i][1];
                    // if move beside the board return nothing 
                    if (j < 0 || k < 0 || j > 7 || k > 7) { } else {
                        // checking for figure to be beaten
                        let mate = checkBoardForExistingPawn(j, k, boardChess, gamePawns);
                        if (mate !== true) {
                            boardChess[j][k] = 'X';
                        } else {
                            let btn = document.getElementById('chessButton');
							btn.setAttribute("style", "display: none");

                            let tag = document.createElement("p");
							let figure1 = boardChess[x][y] == 'K' ? 'King' : 
											boardChess[x][y] == 'Q' ? 'Queen' :
												boardChess[x][y] == 'L' ? 'Laufer' : 
													boardChess[x][y] == 'H' ? 'Horse' : 'Tower';
							let figure2 = boardChess[x + moves[i][0]][y + moves[i][1]] == 'K' ? 'King' : 
											boardChess[x + moves[i][0]][y + moves[i][1]] == 'Q' ? 'Queen' : 
												boardChess[x + moves[i][0]][y + moves[i][1]] == 'L' ? 'Laufer' : 
													boardChess[x + moves[i][0]][y + moves[i][1]] == 'H' ? 'Horse' : 'Tower';
							console.log(figure1 + ", " + figure2);
                            let text = document.createTextNode(`Checkmate! The ${figure1} on ${x}, ${y} beating ${figure2} on x=${x + moves[i][0]}, y=${y + moves[i][1]}`);
                            tag.appendChild(text);
                            let element = document.getElementById("resultChess");
                            element.appendChild(tag);
                        };
                    };
                };
            };
            for (let x = 0; x < 8; x += 1) {
                for (let y = 0; y < 8; y += 1) {
                    // check for figure exist
                    if (checkBoardForExistingPawn(x, y, boardChess, gamePawns) === true) {
                        // taking range of moves
                        if (boardChess[x][y] == 'Q') { moves = queen.move(); markMovesOnBoard(x, y, boardChess) };
                        if (boardChess[x][y] == 'T') { moves = tower.move(); markMovesOnBoard(x, y, boardChess) };
                        if (boardChess[x][y] == 'L') { moves = laufer.move(); markMovesOnBoard(x, y, boardChess) };
                        if (boardChess[x][y] == 'K') { moves = king.move(); markMovesOnBoard(x, y, boardChess) };
                        if (boardChess[x][y] == 'H') { moves = horse.move(); markMovesOnBoard(x, y, boardChess) };

                        for (let i = 0; i < moves.length; i += 1) {
                            let mate = checkBoardForExistingPawn(x + moves[i][0], y + moves[i][1], boardChess, gamePawns);
                            if (mate === true) {
                                return (console.log(`The ${boardChess[x][y]} on ${x}, ${y} beating ${boardChess[x + moves[i][0]][y + moves[i][1]]} on ${x + moves[i][0]}, ${y + moves[i][1]}`))
                            };
                        };
                    };
                };
            };
        };
    };

    let gameChess = new GameChess();

    let gameStartChess = () => {
        gameChess.gameStart();
        updateBoardChess();
    };

    let gameResetChess = () => {
		alert('Game reset');
		boardChess = JSON.parse(JSON.stringify(boardChessCopy));
		
		updateBoardChess();
		let btn = document.getElementById('chessButton');
		btn.setAttribute("style", "display: visible");
		
		let element = document.getElementById("resultChess");
		element.innerHTML = '';
        //window.location.reload();
    };

let chessButton = document.getElementById('chessButton');
chessButton.addEventListener('click', () => {gameStartChess()});

let resetBtnChess = document.getElementById('resetBtnChess');
resetBtnChess.addEventListener('click', () => {gameResetChess()});

updateBoardChess();
// <div className={styles.board}>
// <div className={styles.content}>

// <button id="myBtnChess" onClick={gameStart} className={styles.button}> Add figure </button>
// <button id="myBtnReset" onClick={gameReset} className={styles.button}> Reset game </button>