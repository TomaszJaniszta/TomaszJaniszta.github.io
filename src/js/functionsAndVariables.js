let counter = 0;
function initFunction() {
	counter = localStorage.getItem('count');
	isNaN(counter) ? (spanCounter.innerText = 0, counter = 0) : spanCounter.innerText = counter;
};

const popupOnOff = () => { 
	popup.classList.toggle('active');
	overlay.classList.toggle('o-active');
	spanCounter.innerText = counter;
};

const resetCounter = () => {
	counter = 0;
	spanCounter.innerText = counter;
	localStorage.clear();
	resetBtn.classList.toggle('r-active');
};

const counterButtonClick = () => { 
	counter++;
	localStorage.setItem('count',counter);
	if(counter > 5 && resetBtn.classList.length === 1){resetBtn.classList.toggle('r-active')};
	popupOnOff();
};

let boardUpdate = false;

const resetBallClick = () => {
	//if(boardUpdate){
		let divRow = 0;
		let boardContainer = document.getElementById('boardContainer');
	board.map((indexTable) => {
		divRow++;
		let boardRow = document.createElement("div");
		boardRow.setAttribute("id", "divRow"+divRow);
		boardContainer.appendChild(boardRow);
		indexTable.map((element) => {
		  if (element === 'X') {
			let boardElement = document.createElement("span");
				boardElement.innerHTML ='C';
			let divContainer = document.getElementById("divRow"+divRow);
				divContainer.appendChild(boardElement);
			// return <
				//	div className={styles.Wall}>C</div>; // g, C
		  } else if (element === '1') {
			let boardElement = document.createElement("span");
				boardElement.innerHTML ='y';
				boardElement.setAttribute("id", "ball");
				// if(started){boardElement.setAttribute("class", "BallRunning")}else{boardElement.setAttribute("class", "Ball")}; // do zamiany
				// <div id="ball" className={started ? styles.BallRunning : styles.Ball}>y</div> // orginał
			let divContainer = document.getElementById("divRow"+divRow);
				divContainer.appendChild(boardElement);
		  } else if (element === '0') {
			let boardElement = document.createElement("span");
				boardElement.innerHTML ='c';
			let divContainer = document.getElementById("divRow"+divRow);
				divContainer.appendChild(boardElement);
			// return <div className={styles.Air}>c</div>;
		  } else if (element === 'Y') {
			let boardElement = document.createElement("span");
				boardElement.innerHTML ='s';
			let divContainer = document.getElementById("divRow"+divRow);
				divContainer.appendChild(boardElement);
			// return <div className={styles.y}>s</div>;
		  }
		});
		
		boardContainer.appendChild(boardRow);
		boardUpdate = !boardUpdate;
	  //</div>
	});
};
	
  //} else {
	// document.getElementById("board").remove(); 
  //};
  
const showHide = (obj) => {
    let x=document.getElementById(obj);
    if(x.style.display == "none"){x.style.display = "block"} else {x.style.display = "none"};
};