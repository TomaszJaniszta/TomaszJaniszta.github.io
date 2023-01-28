let boardXO = [
   ['', '', ''],
   ['', '', ''],
   ['', '', ''],
  ];
 let boardXOcopy = JSON.parse(JSON.stringify(boardXO));
 
  let gameStatus = true;
  
class GameXO{
   constructor(boardXO, gameStatus) {
    this.boardXO = boardXO;
    this.gameStatus = gameStatus;
    this.moveStatus = true
   }
	checkFor3xO(){
    this.moveStatus = true;
    for (let row = 0; row < 3; row += 1) {
     let o = 0; // rows check
     let o2 = 0; // columns check
     let blank = 0;
     let blank2 = 0;
		//rows and column check
     for (let col = 0; col < 3; col += 1) {
	    //check rows
      if (boardXO[row][col] === 'o') {
       o++;
      } else if (boardXO[row][col] === '') {
       blank++;
      };
      //check columns
      if (boardXO[col][row] === 'o') {
       o2++;
      } else if (boardXO[col][row] === '') {
       blank2++;
      };
    	// Checking 3x O - win
      if (o === 2 && blank === 1 && this.gameStatus) {
    	// row check
    	boardXO[row].forEach((e, i) => { if(e===''){boardXO[row][i] = 'o'} });
	    	if(language === 'pl'){oxResult.innerHTML = 'O wygrywa, 3x O'};
	    	if(language === 'en'){oxResult.innerHTML = 'O won, 3x O'};
       	this.gameStatus = false;
       	this.moveStatus = false;
		return;
      };
      if (o2 === 2 && blank2 === 1 && this.gameStatus) {
       // column check
       boardXO.forEach((e, i) => {
        if (e[row] === '') {
         boardXO[i][row] = 'o';
        };
       });
	    	if(language === 'pl'){oxResult.innerHTML = 'O wygrywa, 3x O'};
	    	if(language === 'en'){oxResult.innerHTML = 'O won, 3x O'};
       	this.gameStatus = false;
       	this.moveStatus = false;
		return;
      };
     }
    };
		//diagonal 1 check
    if (this.moveStatus === true && this.gameStatus === true) {
			let y = 0;
    	let empty;
    	let O = 0;
	    for(let x = 0; x < 3; x++){
	     if (boardXO[y][x] === 'o'){
	      O++;
	     };
	     if (boardXO[y][x] === ''){
	      empty = [y, x];
	     };
	     y++;
	    };
	    if (empty && O === 2) {
	     	boardXO[empty[0]][empty[1]] = 'o';
	    		if(language === 'pl'){oxResult.innerHTML = 'O wygrywa, 3x O'};
	    		if(language === 'en'){oxResult.innerHTML = 'O won, 3x O'};
	     	this.gameStatus = false;
	     	this.moveStatus = false;
			return;
    	};
		};
		//diagonal 2 check
		if (this.moveStatus === true && this.gameStatus === true) {
    	let y = 2;
    	let empty;
    	let O = 0;
	    for (let x = 0; x < 3; x++) {
	     if (boardXO[y][x] === 'o') {
	      O++;
	     };
	     if (boardXO[y][x] === '') {
	      empty = [y, x];
	     };
	     y--;
	    };
	    if (empty && O === 2) {
	     	boardXO[empty[0]][empty[1]] = 'o';
	    		if(language === 'pl'){oxResult.innerHTML = 'O wygrywa, 3x O'};
	    		if(language === 'en'){oxResult.innerHTML = 'O won, 3x O'};
	      	this.gameStatus = false;
	      	this.moveStatus = false;
			return;
   		};
		};
	};

   checkFor3xX(){
    for(let row = 0; row < 3; row += 1){
     let x = 0;
     let x2 = 0;
     let blank = 0;
     let blank2 = 0;
     for (let col = 0; col < 3; col += 1) {
      //check rows
      if (boardXO[row][col] === 'x') {
       x++;
      } else if (boardXO[row][col] === '') {
       blank++;
      };
      //check columns
      if (boardXO[col][row] === 'x') {
       x2++;
      } else if (boardXO[col][row] === '') {
       blank2++;
      };
      if (x === 2 && blank === 1 && this.gameStatus && this.moveStatus) {
	    	//adding O in row, preventing 3x X
	      boardXO[row][boardXO[row].indexOf('')] = 'o';
	      this.moveStatus = false;
				return;
      };
      if (x2 === 2 && blank2 === 1 && this.gameStatus && this.moveStatus) {
      //adding O in column, preventing 3x X
       boardXO.forEach((e, i) => {
        if (e[row] === '') {boardXO[i][row] = 'o'};
        this.moveStatus = false;
				return;
       });
      };
     };
    };

	//diagonal 1 check
    if (this.moveStatus === true && this.gameStatus === true) {
    	let y = 0;
    	let empty;
    	let X = 0;
	    for (let x = 0; x < 3; x++) {
	     if (boardXO[y][x] === 'x') {
	      X++;
	     }
	     if (boardXO[y][x] === '') {
	      empty = [y, x];
	     }
	     y++;
	    };
	    if (empty && X === 2) {
			// Prevent X win
	     boardXO[empty[0]][empty[1]] = 'o';
	      this.moveStatus = false;
				return;
	    };
    };
		//diagonal 2 check
    	if (this.moveStatus === true && this.gameStatus === true) {
	    let y = 2;
	    let empty;
	    let X = 0;
	    for (let x = 0; x < 3; x++) {
	     if (boardXO[y][x] === 'x') {
	      X++;
	     }
	     if (boardXO[y][x] === '') {
	      empty = [y, x];
	     }
	     y--;
	    };
	    if (empty && X === 2) {
			// Prevent X win
	     	boardXO[empty[0]][empty[1]] = 'o';
	    	this.moveStatus = false;
			return;
	   };
		};
   }

	checkXwinAfterMove(){
		//diagonal 1
	  if (this.gameStatus){
	    let y = 0;
	    let X = 0;

	    for (let x = 0; x < 3; x++) {
	     if (boardXO[y][x] === 'x') {
	      X++;
	     };
	     y++;
	    }

	    if (X === 3) {
	     // alert('X win. Congratulations!');
	    		if(language === 'pl'){oxResult.innerHTML = 'X wygrywa. Gratulacje!'};
	    		if(language === 'en'){oxResult.innerHTML = 'X win. Congratulations!'};
	     	this.gameStatus = false;
			return;
	    }
		};
		//diagonal 2
	  if (this.gameStatus){
	    let y = 2;
	    let X = 0;

	    for (let x = 0; x < 3; x++) {
	     if (boardXO[y][x] === 'x') {
	      X++;
	     };
	     y--;
	    }

	    if (X === 3) {
	     // alert('X win. Congratulations!');
	    		if(language === 'pl'){oxResult.innerHTML = 'X wygrywa. Gratulacje!'};
	    		if(language === 'en'){oxResult.innerHTML = 'X win. Congratulations!'};
	     	this.gameStatus = false;
			return;
	    }
	  };
		//check rows and columns
		if (this.gameStatus){
			for (let row = 0; row < 3; row += 1) {
	     let x = 0;
	     let x2 = 0;
	     let blank = 0;
	     let blank2 = 0;

	     for (let col = 0; col < 3; col += 1) {
	      //check rows
	      if (boardXO[row][col] === 'x') {
	       x++;
	      } else if (boardXO[row][col] === '') {
	       blank++;
	      };
	      if (boardXO[col][row] === 'x') {
	      //check columns
	       x2++;
	      } else if (boardXO[col][row] === '') {
	       blank2++;
	      };
	      if (x === 3 || x2 === 3) {
	    		if(language === 'pl'){oxResult.innerHTML = 'X wygrywa. Gratulacje!'};
	    		if(language === 'en'){oxResult.innerHTML = 'X win. Congratulations!'};
	       	this.gameStatus = false;
			return;
	      }
	     }
	    };
		};
	  };

  checkDraw(){
    let blankFieldsNr = 0;
    boardXO.forEach((row) => {
      row.forEach((field, i) => {
       if (field === '') {
        blankFieldsNr++;
       }
      });
     });
  
    if (blankFieldsNr < 1) {
      this.gameStatus = false;
	    if(language === 'pl'){oxResult.innerHTML = 'Remis, puste pola = ' + blankFieldsNr};
	    if(language === 'en'){oxResult.innerHTML = 'Draw, empty fields = ' + blankFieldsNr};
    };
   };

  markRandomField(){
	let marked = false;
    // mark center
		if (boardXO[1][1] === '') {
		 	boardXO[1][1] = 'o';
			marked = true;
		};
		
		function randomIntFromInterval(min, max) {
			return Math.floor(Math.random() * (max - min + 1) + min);
		};
		
		const random=(range)=>{
			if(range.length>0){
				const temp = range[randomIntFromInterval(0, range.length-1)];
				
				if(boardXO[temp[0]][temp[1]]===''){
					boardXO[temp[0]][temp[1]]='o';
					marked = true;
					return;
					} else {
						range.splice(temp, 1);
						random(range);
					};
			} else {
				return
			}
		};
		
		if (!marked){
	 	// or mark diagonal next
			let range=[[0,0],[0,2],[2,0],[2,2]];
			random(range);
		};
		
		if (!marked){
		// or mark row/column next
			let range=[[0,1],[1,0],[1,1],[1,2],[2,1]];
			random(range);
    };
   };

   play(){
    if (this.gameStatus === true){
	
     if (this.gameStatus === true){ this.checkXwinAfterMove() };

      if (this.gameStatus === true){ this.checkDraw() };
  
     if (this.gameStatus === true){ this.checkFor3xO() };
     if (this.gameStatus === true){ this.checkFor3xX() };

     if (this.moveStatus === true && this.gameStatus === true){
      this.markRandomField();
     };

      if (this.gameStatus === true){ this.checkDraw() };
    }
   }
  };
  
 let gameXO = new GameXO(boardXO, gameStatus);
 let boardOxContainer = document.getElementById('boardOxContainer');
  let oxResult = document.getElementById('OxResult');
 
 const updateBoardOx = () => {
  boardOxContainer.innerHTML = '';
   let col = -1;
   boardXO.forEach(indexTable => { 
   //number array
    col++;
    let boardRow = document.createElement("div");
    boardRow.setAttribute("id", ("col"+col));
    boardOxContainer.appendChild(boardRow);
    let elementNr = -1;
    indexTable.forEach(element => {
    elementNr++; 
    if (element === '') {
     let boardElement = document.createElement("span");
     boardElement.setAttribute("id", (elementNr)+"."+(col));
     // boardElement.innerHTML = '<img src="./images/gol/cell2.gif" alt="Cell field" width="100%" height:auto class="cell"/>';
     boardElement.innerHTML = 'c';
		  boardElement.setAttribute("style", "background:none;border:solid 3px darkred");
     boardRow.appendChild(boardElement);
     boardElement.addEventListener('click', () => {
      changeCellXO(
       boardElement.id
      );
     });
   } else if (element === 'x') {
     let boardElement = document.createElement("span");
     boardElement.setAttribute("id", (elementNr)+"."+(col));
     // boardElement.innerHTML = '<img src="./images/gol/air3.jpg" alt="Air field" width="100%" height:auto class="air">';
     boardElement.innerHTML = 'r';
		  boardElement.setAttribute("style", "background:lightgreen;border:solid 3px darkred");
     boardRow.appendChild(boardElement);
     boardElement.addEventListener('click', () => {
      changeCellXO(
       boardElement.id
      );
     });
   } else if (element === 'o') {
     let boardElement = document.createElement("span");
     boardElement.setAttribute("id", (elementNr)+"."+(col));
     // boardElement.innerHTML = '<img src="./images/gol/air3.jpg" alt="Air field" width="100%" height:auto class="air">';
     boardElement.innerHTML = '#';
		  boardElement.setAttribute("style", "background:yellow;border:solid 3px darkred");
     boardRow.appendChild(boardElement);
     boardElement.addEventListener('click', () => {
      changeCellXO(
       boardElement.id
      );
     });
     }
    });
    boardOxContainer.appendChild(boardRow);
   });
 };
 
 const changeCellXO =(id) => {
  let y=id.split(".")[0];
  let x=id.split(".")[1];
  if(boardXO[x][y]==='' && gameXO.gameStatus === true){
  boardXO[x][y]='x';
  gameXO.play(); 
  updateBoardOx();
  XObutton.removeAttribute('disabled');
 };
 };
 
 function gameXOreset(){
    if(language === 'pl'){alert('Gra restartowana')};
    if(language === 'en'){alert('Game reset')};
  boardXO = JSON.parse(JSON.stringify(boardXOcopy));
  gameXO.gameStatus = true;
  gameXO.moveStatus = true;
  updateBoardOx();
  XObutton.setAttribute("disabled", null);
	oxResult.innerHTML = '';
 };
 
 let XObutton = document.getElementById('resetXO');
  XObutton.setAttribute("disabled", null);
  XObutton.addEventListener('click', () => {gameXOreset()});
 
 updateBoardOx();
