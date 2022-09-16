let play,start=0,started=!1,time=0,boardCopy=JSON.parse(JSON.stringify(board));class BallGenerator{constructor(e){this.board=e}generateBall(){let t,s;for(let e=0;e<board.length;e++){var a=board[e].indexOf("1");-1<a&&(t=e,s=a)}return{y:t,x:s}}}class Vector{constructor(e,t){this.x=t*this.randomVector(),this.y=e*this.randomVector()}randomVector(){return Math.random()<.5?-1:1}}class Ball{constructor(e,t,s){this.x=t,this.y=e,this.vector=s}move(){this.x+=this.vector.x,this.y+=this.vector.y}}class Game{constructor(e,t){this.ball=e,this.board=t,this.startingX=Number(e.x),this.startingY=Number(e.y)}randomVector=()=>Math.random()<.5?this.ball.vector.x*=-1:this.ball.vector.y*=-1;checkForYCollision=()=>{this.moveBall(),this.randomVector()};checkForXCollision=()=>{"X"!==this.board[this.ball.y][this.ball.x+this.ball.vector.x]&&"X"!==this.board[this.ball.y+this.ball.vector.y][this.ball.x]&&this.randomVector(),"X"===this.board[this.ball.y][this.ball.x+this.ball.vector.x]&&(this.ball.vector.x*=-1),"X"===this.board[this.ball.y+this.ball.vector.y][this.ball.x]&&(this.ball.vector.y*=-1),this.moveBall()};moveBall=()=>{this.board[this.ball.y][this.ball.x]="0",this.board[this.ball.y+this.ball.vector.y][this.ball.x+this.ball.vector.x]="1",this.ball.move()};start(){play=setInterval(()=>{if("Y"===this.board[this.ball.y+this.ball.vector.y][this.ball.x+this.ball.vector.x]?this.checkForYCollision():"X"===this.board[this.ball.y+this.ball.vector.y][this.ball.x+this.ball.vector.x]?this.checkForXCollision():this.moveBall(),time++,updateBoard(),this.ball.x===this.startingX&&this.ball.y===this.startingY){clearInterval(play),alert("Game done!");let e=document.getElementById("ball");e.setAttribute("class","Ball")}},1e3)}}let startBall=new BallGenerator(board).generateBall(),myVector=new Vector(1,1),movingBall=new Ball(startBall.y,startBall.x,myVector),game=new Game(movingBall,board),timeBall2=document.getElementById("timeBall2");const updateBoard=()=>{timeBall2.innerHTML=time;let s=0,a=document.getElementById("boardContainer");a.innerHTML="",board.map(e=>{s++;let t=document.createElement("div");t.setAttribute("id","divRow"+s),t.setAttribute("style","display: flex; flex-direction: column;"),a.appendChild(t),e.map(e=>{if("X"===e){let e=document.createElement("span"),t=(e.innerHTML="C",e.setAttribute("class","Wall"),document.getElementById("divRow"+s));t.appendChild(e)}else if("1"===e){let e=document.createElement("span"),t=(e.innerHTML="y",e.setAttribute("id","ball"),started?e.setAttribute("class","BallRunning"):e.setAttribute("class","Ball"),document.getElementById("divRow"+s));t.appendChild(e)}else if("0"===e){let e=document.createElement("span"),t=(e.innerHTML="c",e.setAttribute("class","Air"),document.getElementById("divRow"+s));t.appendChild(e)}else if("Y"===e){let e=document.createElement("span"),t=(e.innerHTML="s",e.setAttribute("class","y"),document.getElementById("divRow"+s));t.appendChild(e)}}),a.appendChild(t)})};updateBoard();let ball2button=document.getElementById("ball2button"),resetBtnBall2=(ball2button.addEventListener("click",()=>{handleButtonDown()}),document.getElementById("resetBtnBall2")),gameReset=(resetBtnBall2.addEventListener("click",()=>{gameReset()}),()=>{clearInterval(play),alert("Game reset"),time=0,started=!1,start=0,board=JSON.parse(JSON.stringify(boardCopy)),startBall=new BallGenerator(board).generateBall(),myVector=new Vector(1,1),movingBall=new Ball(startBall.y,startBall.x,myVector),game=new Game(movingBall,board),updateBoard(),ball2button.innerHTML="Start"}),handleButtonDown=()=>{start<1?(game.start(),console.log("started"),start+=1,started=!started,"Start"===ball2button.innerHTML?ball2button.innerHTML="Stop":ball2button.innerHTML="Start"):(--start,started=!started,"Start"===ball2button.innerHTML?ball2button.innerHTML="Stop":ball2button.innerHTML="Start",clearInterval(play))},play,start=0,started=!1,time=0,boardCopy=JSON.parse(JSON.stringify(board));class BallGenerator{constructor(e){this.board=e}generateBall(){let t,s;for(let e=0;e<board.length;e++){var a=board[e].indexOf("1");-1<a&&(t=e,s=a)}return{y:t,x:s}}}class Vector{constructor(e,t){this.x=t*this.randomVector(),this.y=e*this.randomVector()}randomVector(){return Math.random()<.5?-1:1}}class Ball{constructor(e,t,s){this.x=t,this.y=e,this.vector=s}move(){this.x+=this.vector.x,this.y+=this.vector.y}}class Game{constructor(e,t){this.ball=e,this.board=t,this.startingX=Number(e.x),this.startingY=Number(e.y)}randomVector=()=>Math.random()<.5?this.ball.vector.x*=-1:this.ball.vector.y*=-1;checkForYCollision=()=>{this.moveBall(),this.randomVector()};checkForXCollision=()=>{"X"!==this.board[this.ball.y][this.ball.x+this.ball.vector.x]&&"X"!==this.board[this.ball.y+this.ball.vector.y][this.ball.x]&&this.randomVector(),"X"===this.board[this.ball.y][this.ball.x+this.ball.vector.x]&&(this.ball.vector.x*=-1),"X"===this.board[this.ball.y+this.ball.vector.y][this.ball.x]&&(this.ball.vector.y*=-1),this.moveBall()};moveBall=()=>{this.board[this.ball.y][this.ball.x]="0",this.board[this.ball.y+this.ball.vector.y][this.ball.x+this.ball.vector.x]="1",this.ball.move()};start(){play=setInterval(()=>{if("Y"===this.board[this.ball.y+this.ball.vector.y][this.ball.x+this.ball.vector.x]?this.checkForYCollision():"X"===this.board[this.ball.y+this.ball.vector.y][this.ball.x+this.ball.vector.x]?this.checkForXCollision():this.moveBall(),time++,updateBoard(),this.ball.x===this.startingX&&this.ball.y===this.startingY){clearInterval(play),alert("Game done!");let e=document.getElementById("ball");e.setAttribute("class","Ball")}},1e3)}}let startBall=new BallGenerator(board).generateBall(),myVector=new Vector(1,1),movingBall=new Ball(startBall.y,startBall.x,myVector),game=new Game(movingBall,board),timeBall2=document.getElementById("timeBall2");const updateBoard=()=>{timeBall2.innerHTML=time;let s=0,a=document.getElementById("boardContainer");a.innerHTML="",board.map(e=>{s++;let t=document.createElement("div");t.setAttribute("id","divRow"+s),t.setAttribute("style","display: flex; flex-direction: column;"),a.appendChild(t),e.map(e=>{if("X"===e){let e=document.createElement("span"),t=(e.innerHTML="C",e.setAttribute("class","Wall"),document.getElementById("divRow"+s));t.appendChild(e)}else if("1"===e){let e=document.createElement("span"),t=(e.innerHTML="y",e.setAttribute("id","ball"),started?e.setAttribute("class","BallRunning"):e.setAttribute("class","Ball"),document.getElementById("divRow"+s));t.appendChild(e)}else if("0"===e){let e=document.createElement("span"),t=(e.innerHTML="c",e.setAttribute("class","Air"),document.getElementById("divRow"+s));t.appendChild(e)}else if("Y"===e){let e=document.createElement("span"),t=(e.innerHTML="s",e.setAttribute("class","y"),document.getElementById("divRow"+s));t.appendChild(e)}}),a.appendChild(t)})};updateBoard();let ball2button=document.getElementById("ball2button"),resetBtnBall2=(ball2button.addEventListener("click",()=>{handleButtonDown()}),document.getElementById("resetBtnBall2")),gameReset=(resetBtnBall2.addEventListener("click",()=>{gameReset()}),()=>{clearInterval(play),alert("Game reset"),time=0,started=!1,start=0,board=JSON.parse(JSON.stringify(boardCopy)),startBall=new BallGenerator(board).generateBall(),myVector=new Vector(1,1),movingBall=new Ball(startBall.y,startBall.x,myVector),game=new Game(movingBall,board),updateBoard(),ball2button.innerHTML="Start"}),handleButtonDown=()=>{start<1?(game.start(),console.log("started"),start+=1,started=!started,"Start"===ball2button.innerHTML?ball2button.innerHTML="Stop":ball2button.innerHTML="Start"):(--start,started=!started,"Start"===ball2button.innerHTML?ball2button.innerHTML="Stop":ball2button.innerHTML="Start",clearInterval(play))},board=[["X","X","X","X","X","X","X","X","X","X","X","X"],["X","0","0","X","X","X","X","X","X","X","X","X"],["X","0","0","0","X","X","X","X","X","X","X","X"],["X","0","0","0","Y","X","X","X","X","X","X","X"],["X","0","0","0","0","0","X","X","X","X","X","X"],["X","0","0","0","0","0","0","X","X","X","X","X"],["X","0","0","X","0","0","0","0","X","X","X","X"],["X","0","0","0","0","0","0","0","Y","Y","1","X"],["X","0","0","0","0","0","0","0","Y","0","Y","X"],["X","0","0","0","X","0","Y","0","0","Y","Y","X"],["X","0","0","X","X","X","0","0","0","Y","Y","X"],["X","0","0","0","X","0","0","Y","0","0","Y","X"],["X","0","0","0","0","0","0","0","0","0","0","X"],["X","Y","0","Y","Y","0","0","0","0","0","0","X"],["X","0","0","0","0","0","Y","0","0","0","0","X"],["X","X","X","X","X","X","X","X","X","X","X","X"]],boardChess=[["W","B","W","B","W","B","W","B"],["B","W","B","W","B","W","B","W"],["W","B","W","B","W","B","W","B"],["B","W","B","W","B","W","B","W"],["W","B","W","B","W","B","W","B"],["B","W","B","W","B","W","B","W"],["W","B","W","B","W","B","W","B"],["B","W","B","W","B","W","B","W"]];const board1=[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0],[0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0],[0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0],[0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0],[0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];let gamePawns=["K","Q","T","H","L"],moves,chess,boardChessCopy=JSON.parse(JSON.stringify(boardChess));const updateBoardChess=()=>{let s=0,a=document.getElementById("chessBoardContainer");a.innerHTML="",boardChess.map(e=>{s++;let t=document.createElement("div");t.setAttribute("id","divRowChess"+s),t.setAttribute("style","display: flex; flex-direction: row;"),a.appendChild(t),e.map(e=>{if("B"===e){let e=document.createElement("span"),t=(e.innerHTML='<img src="./images/chess/black100.gif" alt="Black field" />',document.getElementById("divRowChess"+s));t.appendChild(e)}else if("W"===e){let e=document.createElement("span"),t=(e.innerHTML='<img src="./images/chess/white100.gif" alt="White field" />',document.getElementById("divRowChess"+s));t.appendChild(e)}else if("T"===e){let e=document.createElement("span"),t=(e.innerHTML='<img src="./images/chess/tower100.gif" alt="Tower" />',document.getElementById("divRowChess"+s));t.appendChild(e)}else if("H"===e){let e=document.createElement("span"),t=(e.innerHTML='<img src="./images/chess/horse.gif" alt="Horse" />',document.getElementById("divRowChess"+s));t.appendChild(e)}else if("L"===e){let e=document.createElement("span"),t=(e.innerHTML='<img src="./images/chess/laufer.gif" alt="Laufer" />',document.getElementById("divRowChess"+s));t.appendChild(e)}else if("K"===e){let e=document.createElement("span"),t=(e.innerHTML='<img src="./images/chess/king.gif" alt="King" />',document.getElementById("divRowChess"+s));t.appendChild(e)}else if("Q"===e){let e=document.createElement("span"),t=(e.innerHTML='<img src="./images/chess/queen.gif" alt="Queen" />',document.getElementById("divRowChess"+s));t.appendChild(e)}else if("X"===e){let e=document.createElement("span"),t=(e.innerHTML='<img src="./images/chess/red100.gif" alt="Red field" />',document.getElementById("divRowChess"+s));t.appendChild(e)}}),a.appendChild(t)})};class ChessOnBoardGenerator{constructor(e){this.boardChess=e}generateChess(){let e=(e,t)=>Math.floor(Math.random()*(t-e+1)+e);var t=gamePawns[e(0,gamePawns.length-1)],s=e(0,7),a=e(0,7);return{figureType:boardChess[a][s]=t,x:a,y:s}}}const movesGenerator=function(){class t{constructor(e){this.moves=this.move()}move(){let s=[];for(let t=-1;t<2;t+=1)for(let e=-1;e<2;e+=1)0===t&&0===e||s.push([t,e]);return s}}class s{constructor(e){this.moves=this.move()}move(){let s=[];for(let t=-2;t<3;t+=1)for(let e=-2;e<3;e+=1)t!==e&&-t!==e&&0!==e&&0!==t&&s.push([t,e]);return s}}class a{constructor(e){this.moves=this.move()}move(){let s=[];for(let t=-7;t<8;t+=1)for(let e=-7;e<8;e+=1)((0!==t||0!==e)&&t===e||(0!==t||0!==e)&&-t===e||0!==t&&0===e||0!==e&&0===t)&&s.push([t,e]);return s}}class n{constructor(e){this.moves=this.move()}move(){let s=[];for(let t=-7;t<8;t+=1)for(let e=-7;e<8;e+=1)(0===t&&0===e||t!==e)&&(0===t&&0===e||-t!==e)||s.push([t,e]);return s}}class l{constructor(e){this.moves=this.move()}move(){let s=[];for(let t=-7;t<8;t+=1)for(let e=-7;e<8;e+=1)(0!==t&&0===e||0!==e&&0===t)&&s.push([t,e]);return s}}return{createMoves:e=>"Q"===e.figureType?new a(e):"K"===e.figureType?new t(e):"L"===e.figureType?new n(e):"H"===e.figureType?new s(e):"T"===e.figureType?new l(e):void 0}}(),king=movesGenerator.createMoves({figureType:"K"}),queen=movesGenerator.createMoves({figureType:"Q"}),laufer=movesGenerator.createMoves({figureType:"L"}),horse=movesGenerator.createMoves({figureType:"H"}),tower=movesGenerator.createMoves({figureType:"T"});class GameChess{constructor(e,t,s,a){this.boardChess=e,this.pawnArray=t,this.chess=s,this.moves=a}gameStart(){chess=new ChessOnBoardGenerator(boardChess).generateChess(),console.log(chess);let e=document.createElement("p");var t=document.createTextNode(`${"K"==chess.figureType?"King":"Q"==chess.figureType?"Queen":"L"==chess.figureType?"Laufer":"H"==chess.figureType?"Horse":"Tower"} appear on x=${chess.x}, y=`+chess.y);e.appendChild(t);let s=document.getElementById("resultChess"),d=(s.appendChild(e),(t,s,a,n)=>{let l=!1;for(let e=0;e<n.length;e+=1){if(t<0||s<0||7<t||7<s)return!1;if(n[e]===a[t][s]){l=!0;break}}return l});var a=(n,l,o)=>{for(let a=0;a<moves.length;a+=1){var r=Number(n)+moves[a][0],i=Number(l)+moves[a][1];if(!(r<0||i<0||7<r||7<i))if(!0!==d(r,i,o,gamePawns))o[r][i]="X";else{let e=document.getElementById("chessButton"),t=(e.setAttribute("style","display: none"),document.createElement("p"));r="K"==o[n][l]?"King":"Q"==o[n][l]?"Queen":"L"==o[n][l]?"Laufer":"H"==o[n][l]?"Horse":"Tower",i="K"==o[n+moves[a][0]][l+moves[a][1]]?"King":"Q"==o[n+moves[a][0]][l+moves[a][1]]?"Queen":"L"==o[n+moves[a][0]][l+moves[a][1]]?"Laufer":"H"==o[n+moves[a][0]][l+moves[a][1]]?"Horse":"Tower",r=(console.log(r+", "+i),document.createTextNode(`Checkmate! The ${r} on ${n}, ${l} beating ${i} on x=${n+moves[a][0]}, y=`+(l+moves[a][1])));t.appendChild(r);let s=document.getElementById("resultChess");s.appendChild(t)}}};for(let s=0;s<8;s+=1)for(let t=0;t<8;t+=1)if(!0===d(s,t,boardChess,gamePawns)){"Q"==boardChess[s][t]&&(moves=queen.move(),a(s,t,boardChess)),"T"==boardChess[s][t]&&(moves=tower.move(),a(s,t,boardChess)),"L"==boardChess[s][t]&&(moves=laufer.move(),a(s,t,boardChess)),"K"==boardChess[s][t]&&(moves=king.move(),a(s,t,boardChess)),"H"==boardChess[s][t]&&(moves=horse.move(),a(s,t,boardChess));for(let e=0;e<moves.length;e+=1)if(!0===d(s+moves[e][0],t+moves[e][1],boardChess,gamePawns))return console.log(`The ${boardChess[s][t]} on ${s}, ${t} beating ${boardChess[s+moves[e][0]][t+moves[e][1]]} on ${s+moves[e][0]}, `+(t+moves[e][1]))}}}let gameChess=new GameChess,gameStartChess=()=>{gameChess.gameStart(),updateBoardChess()},gameResetChess=()=>{alert("Game reset"),boardChess=JSON.parse(JSON.stringify(boardChessCopy)),updateBoardChess();let e=document.getElementById("chessButton"),t=(e.setAttribute("style","display: visible"),document.getElementById("resultChess"));t.innerHTML=""},chessButton=document.getElementById("chessButton"),resetBtnChess=(chessButton.addEventListener("click",()=>{gameStartChess()}),document.getElementById("resetBtnChess"));resetBtnChess.addEventListener("click",()=>{gameResetChess()}),updateBoardChess();const popup=document.getElementById("popup"),xButton=document.getElementById("btnX"),overlay=document.getElementById("overlay"),resetBtn=document.getElementById("reset"),countBtn=document.getElementById("buttonCnt"),spanCounter=document.getElementById("counter"),show1=document.getElementById("show1"),show2=document.getElementById("show2"),show3=document.getElementById("show3"),show4=document.getElementById("show4"),show5=document.getElementById("show5"),imgMe=(xButton.addEventListener("click",()=>{popupOnOff()}),overlay.addEventListener("click",()=>{popupOnOff()}),resetBtn.addEventListener("click",()=>{resetCounter()}),countBtn.addEventListener("click",()=>{counterButtonClick()}),show1.addEventListener("click",()=>{showHide("part1")}),show2.addEventListener("click",()=>{showHide("part2")}),show3.addEventListener("click",()=>{showHide("part3")}),show4.addEventListener("click",()=>{showHide("part4")}),show5.addEventListener("click",()=>{showHide("part5")}),document.getElementById("imgMe"));imgMe.addEventListener("click",()=>{counterButtonClick()});let counter=0;function initFunction(){counter=localStorage.getItem("count"),isNaN(counter)?(spanCounter.innerText=0,counter=0):spanCounter.innerText=counter}const popupOnOff=()=>{popup.classList.toggle("active"),overlay.classList.toggle("o-active"),spanCounter.innerText=counter},resetCounter=()=>{counter=0,spanCounter.innerText=counter,localStorage.clear(),resetBtn.classList.toggle("r-active")},counterButtonClick=()=>{counter++,localStorage.setItem("count",counter),5<counter&&1===resetBtn.classList.length&&resetBtn.classList.toggle("r-active"),popupOnOff()},showHide=e=>{let t=document.getElementById(e);"none"==t.style.display?t.style.display="block":t.style.display="none"};let language="en";function changeLanguage(e){e!==language&&("pl"===(language=e)&&(document.getElementById("lightTheme").innerHTML="Jasny motyw",document.getElementById("darkTheme").innerHTML="Ciemny motyw",document.getElementById("introTitle").innerHTML="Wstęp",document.getElementById("introText").innerHTML="Witam, nazywam się Tomasz Janiszta. Programuję w JavaScript.\t\t\tFront-end: React, Angular. Back-end: Node.js. Strona zawiera przykłady kodu, które zrobiłem w formie krótkiej prezentacji.\t\t\tMożesz zapoznać się z widocznymi tutaj warstwami końcowymi/użytkowymi kodu.\t\t\tMiłego oglądania, ale... zapraszam też do obejrzenia plików js :)",document.getElementById("show1").innerHTML="Pokaż \\ Ukryj",document.getElementById("show2").innerHTML="Pokaż \\ Ukryj",document.getElementById("show3").innerHTML="Pokaż \\ Ukryj",document.getElementById("show4").innerHTML="Pokaż \\ Ukryj"),"en"===e&&(document.getElementById("lightTheme").innerHTML="Ligh theme",document.getElementById("darkTheme").innerHTML="Dark theme",document.getElementById("introTitle").innerHTML="Intro",document.getElementById("introText").innerHTML="Hello, my name is Tomasz Janiszta. I program in JavaScript.\t\t\tFront-end: React, Angular. Back-end: Node.js. The page contains examples of code I made as a quick presentation.\t\t\tYou can familiarize yourself with the end/usage layers of the code visible here.            Enjoy watching, but... I also invite you to take a look at the js files :)",document.getElementById("show1").innerHTML="Show \\ Hide",document.getElementById("show2").innerHTML="Show \\ Hide",document.getElementById("show3").innerHTML="Show \\ Hide",document.getElementById("show4").innerHTML="Show \\ Hide"))}export{board1};