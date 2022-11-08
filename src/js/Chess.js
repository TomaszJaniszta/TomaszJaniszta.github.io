let gamePawns = ['K', 'Q', 'T', 'H', 'L'];
let moves;
let chess;
let boardChessCopy = JSON.parse(JSON.stringify(boardChess));

const updateBoardChess = () => {
	let x = 0;
	let chessBoardContainer = document.getElementById('chessBoardContainer');
	chessBoardContainer.innerHTML = '';

    boardChess.forEach((indexTable) => {
      let boardRow = document.createElement("div");
      boardRow.setAttribute("id", "divRowChess"+x);
	  //boardRow.setAttribute("style", "display: flex; flex-direction: row;justify-content:center;");
	  boardRow.setAttribute("style", "display: inline-table");
      chessBoardContainer.appendChild(boardRow);
	  
	  let y = -1;
	  x++;
      indexTable.forEach((element) => {
		y++;
        if (element === 'B') {
        let boardElement = document.createElement("span");
          boardElement.innerHTML = '<img src="./images/chess/black100.gif" alt="Black field" width="100%" height:auto/>';
		let boardCoords = document.createElement("div");
		  boardCoords.innerHTML = "x="+(x-1)+" y="+y;
		  boardCoords.setAttribute("style", "position:relative;top:10px;left:3px;color:white;width:0%;height:0%;white-space:nowrap;");
		  boardRow.appendChild(boardCoords);
		  boardRow.appendChild(boardElement);
        } else if (element === 'W') {
        let boardElement = document.createElement("span");
          boardElement.innerHTML = '<img src="./images/chess/white100.gif" alt="White field" width="100%" height:auto/>';
		let boardCoords = document.createElement("div");
		  boardCoords.innerHTML = "x="+(x-1)+" y="+y;
          boardCoords.setAttribute("style", "position:relative;top:10px;left:3px;color:black;width:0%;height:0%;white-space:nowrap;");
		  boardRow.appendChild(boardCoords);
		  boardRow.appendChild(boardElement);
		} else if (element === 'X') {
        let boardElement = document.createElement("span");
          boardElement.innerHTML = '<img src="./images/chess/red100.gif" alt="Red field" width="100%" height:auto/>';
		let boardCoords = document.createElement("div");
		  boardCoords.innerHTML = "x="+(x-1)+" y="+y;
          boardCoords.setAttribute("style", "position:relative;top:10px;left:3px;color:black;width:0%;height:0%;white-space:nowrap;");
		  boardRow.appendChild(boardCoords);
		  boardRow.appendChild(boardElement);
        } else if (element === 'T') {
        let boardElement = document.createElement("span");
          boardElement.innerHTML = '<img src="./images/chess/tower100.gif" alt="Tower" width="100%" height:auto style="background-color:yellow;"/>';
		let boardCoords = document.createElement("div");
		  boardCoords.innerHTML = "x="+(x-1)+" y="+y;
		  boardCoords.setAttribute("style", "position:relative;top:10px;left:3px;color:black;width:0%;height:0%;white-space:nowrap;opacity:0.5;");
		  boardRow.appendChild(boardCoords);
		  boardRow.appendChild(boardElement);
        } else if (element === 'H') {
        let boardElement = document.createElement("span");
          boardElement.innerHTML = '<img src="./images/chess/horse.gif" alt="Horse" width="100%" height:auto style="background-color:yellow;"/>';
		let boardCoords = document.createElement("div");
		  boardCoords.innerHTML = "x="+(x-1)+" y="+y;
		  boardCoords.setAttribute("style", "position:relative;top:10px;left:3px;color:black;width:0%;height:0%;white-space:nowrap;opacity:0.5;");
		  boardRow.appendChild(boardCoords);
		  boardRow.appendChild(boardElement);
        } else if (element === 'L') {
        let boardElement = document.createElement("span");
          boardElement.innerHTML = '<img src="./images/chess/laufer.gif" alt="Laufer" width="100%" height:auto style="background-color:yellow;"/>';
		let boardCoords = document.createElement("div");
		  boardCoords.innerHTML = "x="+(x-1)+" y="+y;
		  boardCoords.setAttribute("style", "position:relative;top:10px;left:3px;color:black;width:0%;height:0%;white-space:nowrap;opacity:0.5;");
		  boardRow.appendChild(boardCoords);
		  boardRow.appendChild(boardElement);
        } else if (element === 'K') {
        let boardElement = document.createElement("span");
          boardElement.innerHTML = '<img src="./images/chess/king.gif" alt="King" width="100%" height:auto style="background-color:yellow;"/>';
		let boardCoords = document.createElement("div");
		  boardCoords.innerHTML = "x="+(x-1)+" y="+y;
		  boardCoords.setAttribute("style", "position:relative;top:10px;left:3px;color:black;width:0%;height:0%;white-space:nowrap;opacity:0.5;");
		  boardRow.appendChild(boardCoords);
		  boardRow.appendChild(boardElement);
        } else if (element === 'Q') {
        let boardElement = document.createElement("span");
          boardElement.innerHTML = '<img src="./images/chess/queen.gif" alt="Queen" width="100%" height:auto style="background-color:yellow;"/>';
		let boardCoords = document.createElement("div");
		  boardCoords.innerHTML = "x="+(x-1)+" y="+y;
		  boardCoords.setAttribute("style", "position:relative;top:10px;left:3px;color:black;width:0%;height:0%;white-space:nowrap;opacity:0.5;");
		  boardRow.appendChild(boardCoords);
		  boardRow.appendChild(boardElement);
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
            const randomNumber = (min, max) => {return Math.floor(Math.random() * (max - min + 1) + min)};
            let randomPawn = gamePawns[randomNumber(0, gamePawns.length - 1)];
            let y = randomNumber(0, 7);
            let x = randomNumber(0, 7);
			
			const checkForBusyField = () => {
				if( boardChess[x][y] !== 'W' && boardChess[x][y] !== 'B' ) {
					x = randomNumber(0, 7);
					y = randomNumber(0, 7);
					checkForBusyField();
				};
			};
			
			checkForBusyField();
			boardChess[x][y] = randomPawn;
			let chess = {figureType:randomPawn, x:x, y:y};
			return chess;
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
			//console.log(chess);
            //checking whole board for figures and their moves, if figure can be beaten than sending the result
            let checkBoardForExistingPawn = (x, y, boardChess, pawnArray) => {
                let status = false;
                for (let i = 0; i < pawnArray.length; i += 1) {
                    // if move beside of the board than false 
                    if (x < 0 || y < 0 || x > 7 || y > 7) { return false };
                    let pawn = pawnArray[i];
                    if (pawn === boardChess[x][y]) {
                        status = true;
                        break;
                    };
                }
                return status;
            };
			
			//add information on site
            let tag = document.createElement("div");
			let text;
			if(language === 'en'){
				text = `${chess.figureType == 'K' ? 'King' : chess.figureType == 'Q' ? 'Queen' :  chess.figureType == 'L' ? 'Laufer' : chess.figureType == 'H' ? 'Horse' : 'Tower' }
					appear on x=${chess.x}, y=${chess.y}`;
			};
			if(language === 'pl'){
				text = `${chess.figureType == 'K' ? 'Król' : chess.figureType == 'Q' ? 'Królowa' :  chess.figureType == 'L' ? 'Laufer' : chess.figureType == 'H' ? 'Konik' : 'Wieża' }
					pojawił(a) się na x=${chess.x}, y=${chess.y}`;
			};
				
            tag.innerHTML=text;
            document.getElementById("resultChess").appendChild(tag);
			
            let markMovesOnBoard = (x, y, boardChess, ) => {
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
							
							// let figure1 = boardChess[x][y] == 'K' ? 'King' : 
											// boardChess[x][y] == 'Q' ? 'Queen' :
												// boardChess[x][y] == 'L' ? 'Laufer' : 
													// boardChess[x][y] == 'H' ? 'Horse' : 'Tower';
							// let figure2 = boardChess[x + moves[i][0]][y + moves[i][1]] == 'K' ? 'King' : 
											// boardChess[x + moves[i][0]][y + moves[i][1]] == 'Q' ? 'Queen' : 
												// boardChess[x + moves[i][0]][y + moves[i][1]] == 'L' ? 'Laufer' : 
													// boardChess[x + moves[i][0]][y + moves[i][1]] == 'H' ? 'Horse' : 'Tower';

							let text;
							if(language === 'en'){
								let figure1 = boardChess[x][y] == 'K' ? 'King' : 
									boardChess[x][y] == 'Q' ? 'Queen' :
										boardChess[x][y] == 'L' ? 'Laufer' : 
											boardChess[x][y] == 'H' ? 'Horse' : 'Tower';
								let figure2 = boardChess[x + moves[i][0]][y + moves[i][1]] == 'K' ? 'King' : 
									boardChess[x + moves[i][0]][y + moves[i][1]] == 'Q' ? 'Queen' : 
										boardChess[x + moves[i][0]][y + moves[i][1]] == 'L' ? 'Laufer' : 
											boardChess[x + moves[i][0]][y + moves[i][1]] == 'H' ? 'Horse' : 'Tower';
								text = `Checkmate! The ${figure1} on x=${x}, y=${y} beating ${figure2} on x=${x + moves[i][0]}, y=${y + moves[i][1]}`;
							};
							if(language === 'pl'){
								let figure1 = boardChess[x][y] == 'K' ? 'Król' : 
									boardChess[x][y] == 'Q' ? 'Królowa' :
										boardChess[x][y] == 'L' ? 'Laufer' : 
											boardChess[x][y] == 'H' ? 'Konik' : 'Wieża';
								let figure2 = boardChess[x + moves[i][0]][y + moves[i][1]] == 'K' ? 'Król' : 
									boardChess[x + moves[i][0]][y + moves[i][1]] == 'Q' ? 'Królowa' : 
										boardChess[x + moves[i][0]][y + moves[i][1]] == 'L' ? 'Laufer' : 
											boardChess[x + moves[i][0]][y + moves[i][1]] == 'H' ? 'Konik' : 'Wieża';
								text = `Szach mat! ${figure1} na x=${x}, y=${y} bije ${figure2} na x=${x + moves[i][0]}, y=${y + moves[i][1]}`;
							};
                            document.getElementById("gameOverChess").innerHTML = text;
							//add popup
							popUpChessOn(text);
                        };
                    };
                };
            };

			const popUpChessOn = (text) => {
				let popUpChess = document.getElementById('popupChess');
				let buttonPopUpChess = document.createElement("button");
					buttonPopUpChess.setAttribute("type", "button");
					buttonPopUpChess.setAttribute("class", "btnX");
					buttonPopUpChess.setAttribute("id", "btnPopupChess");
					buttonPopUpChess.innerHTML = '&#10005';
					popUpChess.appendChild(buttonPopUpChess);
					popUpChess.appendChild(document.createElement("br"));
					popUpChess.appendChild(document.createElement("br"));
				let spanPopUpChess = document.createElement("div");
					spanPopUpChess.setAttribute("id", "spanPopupChess");
					spanPopUpChess.innerHTML = text;
					popUpChess.appendChild(spanPopUpChess);
					popUpChess.classList.toggle('active');
				btnPopupChess.onclick = function(){
					popUpChess.innerHTML = '';
					popUpChess.classList.remove('active');
					//popUpChess.removeAttribute("class", "active");
					//document.getElementById('popupChess').classList.toggle('active');
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
                        };
                    };
                };
            };
		updateBoardChess();
        };
    };

    let gameChess = new GameChess();

    let gameStartChess = () => {
        gameChess.gameStart();
    };

    let gameResetChess = () => {
		//alert('Game reset');
		boardChess = JSON.parse(JSON.stringify(boardChessCopy));
		document.getElementById('chessButton').setAttribute("style", "display: visible");
		document.getElementById("resultChess").innerHTML = '';
        document.getElementById("gameOverChess").innerHTML = '';
		document.getElementById('popupChess').innerHTML = '';
		if(document.getElementById('popupChess').classList.length > 1){document.getElementById('popupChess').classList.remove('active')};
        //window.location.reload();
		updateBoardChess();
    };

let chessButton = document.getElementById('chessButton');
chessButton.addEventListener('click', () => {gameStartChess()});

let resetBtnChess = document.getElementById('resetBtnChess');
resetBtnChess.addEventListener('click', () => {gameResetChess()});

updateBoardChess();