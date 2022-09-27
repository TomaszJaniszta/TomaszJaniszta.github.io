let play1,start1=0,started1=!1,time1=0,timeBall_1=document.getElementById("timeBall_1"),board1=JSON.parse(JSON.stringify(board));class BallGenerator1{constructor(e){this.board=e}generateBall(){let t,n;for(let e=0;e<board.length;e++){var a=board[e].indexOf("1");-1<a&&(t=e,n=a)}return{y:t,x:n}}}class Vector1{constructor(e,t){this.x=t*this.randomVector(),this.y=e*this.randomVector()}randomVector(){return Math.random()<.5?-1:1}}class Ball1{constructor(e,t,n){this.x=t,this.y=e,this.vector=n}move(){this.x+=this.vector.x,this.y+=this.vector.y}}class Game1{constructor(e,t){this.ball=e,this.board=t,this.startingX=Number(e.x),this.startingY=Number(e.y)}randomVector=()=>Math.random()<.5?this.ball.vector.x*=-1:this.ball.vector.y*=-1;checkForYCollision=()=>{this.moveBall(),this.randomVector()};checkForXCollision=()=>{"X"!==this.board[this.ball.y][this.ball.x+this.ball.vector.x]&&"X"!==this.board[this.ball.y+this.ball.vector.y][this.ball.x]&&this.randomVector(),"X"===this.board[this.ball.y][this.ball.x+this.ball.vector.x]&&(this.ball.vector.x*=-1),"X"===this.board[this.ball.y+this.ball.vector.y][this.ball.x]&&(this.ball.vector.y*=-1),this.moveBall()};moveBall=()=>{this.board[this.ball.y][this.ball.x]="0",this.board[this.ball.y+this.ball.vector.y][this.ball.x+this.ball.vector.x]="1",this.ball.move()};start(){let e=()=>{"Y"===this.board[this.ball.y+this.ball.vector.y][this.ball.x+this.ball.vector.x]?this.checkForYCollision():"X"===this.board[this.ball.y+this.ball.vector.y][this.ball.x+this.ball.vector.x]?this.checkForXCollision():this.moveBall()};play1=setInterval(()=>{if(e(),0<start1&&(time1++,updateBoard1()),this.ball.x===this.startingX&&this.ball.y===this.startingY){clearInterval(play1),alert("Game done!");let e=document.getElementById("ball_1");e.setAttribute("class","Ball1")}},1e3)}}const updateBoard1=()=>{let n=0,a=(timeBall_1.innerHTML=time1,document.getElementById("boardContainer1"));a.innerHTML="",board1.map(e=>{n++;let t=document.createElement("div");t.setAttribute("id","divRow1"+n),t.setAttribute("style","display: flex; flex-direction: column;"),a.appendChild(t),e.map(e=>{if("X"===e){let e=document.createElement("span"),t=(e.innerHTML='<img src="./images/ball1/wall.jpg" alt="wall" width="100%" height:auto/>',e.setAttribute("class","Wall1"),document.getElementById("divRow1"+n));t.appendChild(e)}else if("1"===e){let e=document.createElement("span"),t=(e.innerHTML='<img src="./images/ball1/ball.jpg" alt="ball" width="100%" height:auto/>',e.setAttribute("id","ball_1"),started1?e.setAttribute("class","BallRunning1"):e.setAttribute("class","Ball1"),document.getElementById("divRow1"+n));t.appendChild(e)}else if("0"===e){let e=document.createElement("span"),t=(e.innerHTML='<img src="./images/ball1/air.gif" alt="air" width="100%" height:auto/>',e.setAttribute("class","Air"),document.getElementById("divRow1"+n));t.appendChild(e)}else if("Y"===e){let e=document.createElement("span"),t=(e.innerHTML='<img src="./images/ball1/y.jpg" alt="random" width="100%" height:auto/>',e.setAttribute("class","y1"),document.getElementById("divRow1"+n));t.appendChild(e)}}),a.appendChild(t)})};let startBall_1=new BallGenerator1(board).generateBall(),myVector_1=new Vector1(1,1),movingBall_1=new Ball1(startBall_1.y,startBall_1.x,myVector_1),game1=new Game1(movingBall_1,board1),ball1button=(updateBoard1(),document.getElementById("ball1button")),resetBtnBall1=(ball1button.addEventListener("click",()=>{handleButtonDown1()}),document.getElementById("resetBtnBall1")),handleButtonDown1=(resetBtnBall1.addEventListener("click",()=>{gameReset1()}),()=>{start1<1?(game1.start(),start1+=1,started1=!started1,"Start"===ball1button.innerHTML?ball1button.innerHTML="Stop":ball1button.innerHTML="Start"):(--start1,started1=!started1,"Start"===ball1button.innerHTML?ball1button.innerHTML="Stop":ball1button.innerHTML="Start",clearInterval(play1))}),gameReset1=()=>{alert("Game reset"),clearInterval(play1),board1=JSON.parse(JSON.stringify(board)),myVector_1=new Vector1(1,1),startBall_1=new BallGenerator1(board).generateBall(),movingBall_1=new Ball1(startBall_1.y,startBall_1.x,myVector_1),time1=0,started1=!1,start1=0,game1=new Game1(movingBall_1,board1),updateBoard1(),ball1button.innerHTML="Start"},play2,start2=0,started2=!1,time2=0,timeBall_2=document.getElementById("timeBall_2"),board2=JSON.parse(JSON.stringify(board));class BallGenerator2{constructor(e){this.board=e}generateBall(){let t,n;for(let e=0;e<board.length;e++){var a=board[e].indexOf("1");-1<a&&(t=e,n=a)}return{y:t,x:n}}}class Vector2{constructor(e,t){this.x=t*this.randomVector(),this.y=e*this.randomVector()}randomVector(){return Math.random()<.5?-1:1}}class Ball2{constructor(e,t,n){this.x=t,this.y=e,this.vector=n}move(){this.x+=this.vector.x,this.y+=this.vector.y}}class Game2{constructor(e,t){this.ball=e,this.board=t,this.startingX=Number(e.x),this.startingY=Number(e.y)}randomVector=()=>Math.random()<.5?this.ball.vector.x*=-1:this.ball.vector.y*=-1;checkForYCollision=()=>{this.moveBall(),this.randomVector()};checkForXCollision=()=>{"X"!==this.board[this.ball.y][this.ball.x+this.ball.vector.x]&&"X"!==this.board[this.ball.y+this.ball.vector.y][this.ball.x]&&this.randomVector(),"X"===this.board[this.ball.y][this.ball.x+this.ball.vector.x]&&(this.ball.vector.x*=-1),"X"===this.board[this.ball.y+this.ball.vector.y][this.ball.x]&&(this.ball.vector.y*=-1),this.moveBall()};moveBall=()=>{this.board[this.ball.y][this.ball.x]="0",this.board[this.ball.y+this.ball.vector.y][this.ball.x+this.ball.vector.x]="1",this.ball.move()};start(){let e=()=>{"Y"===this.board[this.ball.y+this.ball.vector.y][this.ball.x+this.ball.vector.x]?this.checkForYCollision():"X"===this.board[this.ball.y+this.ball.vector.y][this.ball.x+this.ball.vector.x]?this.checkForXCollision():this.moveBall()};play2=setInterval(()=>{if(e(),0<start2&&(time2++,updateBoard2()),this.ball.x===this.startingX&&this.ball.y===this.startingY){clearInterval(play2),alert("Game done!");let e=document.getElementById("ball_2");e.setAttribute("class","Ball")}},1e3)}}const updateBoard2=()=>{let n=0,a=(timeBall_2.innerHTML=time2,document.getElementById("boardContainer2"));a.innerHTML="",board2.map(e=>{n++;let t=document.createElement("div");t.setAttribute("id","divRow2"+n),t.setAttribute("style","display: flex; flex-direction: column;"),a.appendChild(t),e.map(e=>{if("X"===e){let e=document.createElement("span"),t=(e.innerHTML="C",e.setAttribute("class","Wall"),document.getElementById("divRow2"+n));t.appendChild(e)}else if("1"===e){let e=document.createElement("span"),t=(e.innerHTML="y",e.setAttribute("id","ball_2"),started2?e.setAttribute("class","BallRunning"):e.setAttribute("class","Ball"),document.getElementById("divRow2"+n));t.appendChild(e)}else if("0"===e){let e=document.createElement("span"),t=(e.innerHTML="c",e.setAttribute("class","Air"),document.getElementById("divRow2"+n));t.appendChild(e)}else if("Y"===e){let e=document.createElement("span"),t=(e.innerHTML="s",e.setAttribute("class","y"),document.getElementById("divRow2"+n));t.appendChild(e)}}),a.appendChild(t)})};let startBall_2=new BallGenerator2(board).generateBall(),myVector_2=new Vector2(1,1),movingBall_2=new Ball2(startBall_2.y,startBall_2.x,myVector_2),game2=new Game2(movingBall_2,board2),ball2button=(updateBoard2(),document.getElementById("ball2button")),resetBtnBall2=(ball2button.addEventListener("click",()=>{handleButtonDown2()}),document.getElementById("resetBtnBall2")),handleButtonDown2=(resetBtnBall2.addEventListener("click",()=>{gameReset2()}),()=>{start2<1?(game2.start(),start2+=1,started2=!started2,"Start"===ball2button.innerHTML?ball2button.innerHTML="Stop":ball2button.innerHTML="Start"):(--start2,started2=!started2,"Start"===ball2button.innerHTML?ball2button.innerHTML="Stop":ball2button.innerHTML="Start",clearInterval(play2))}),gameReset2=()=>{alert("Game reset"),clearInterval(play2),board2=JSON.parse(JSON.stringify(board)),myVector_2=new Vector2(1,1),startBall_2=new BallGenerator2(board).generateBall(),movingBall_2=new Ball2(startBall_2.y,startBall_2.x,myVector_2),time2=0,started2=!1,start2=0,game2=new Game2(movingBall_2,board2),updateBoard2(),ball2button.innerHTML="Start"},board=[["X","X","X","X","X","X","X","X","X","X","X","X"],["X","0","0","X","X","X","X","X","X","X","X","X"],["X","0","0","0","X","X","X","X","X","X","X","X"],["X","0","0","0","Y","X","X","X","X","X","X","X"],["X","0","0","0","0","0","X","X","X","X","X","X"],["X","0","0","0","0","0","0","X","X","X","X","X"],["X","0","0","X","0","0","0","0","X","X","X","X"],["X","0","0","0","0","0","0","0","Y","Y","1","X"],["X","0","0","0","0","0","0","0","Y","0","Y","X"],["X","0","0","0","X","0","Y","0","0","Y","Y","X"],["X","0","0","X","X","X","0","0","0","Y","Y","X"],["X","0","0","0","X","0","0","Y","0","0","Y","X"],["X","0","0","0","0","0","0","0","0","0","0","X"],["X","Y","0","Y","Y","0","0","0","0","0","0","X"],["X","0","0","0","0","0","Y","0","0","0","0","X"],["X","X","X","X","X","X","X","X","X","X","X","X"]],boardChess=[["W","B","W","B","W","B","W","B"],["B","W","B","W","B","W","B","W"],["W","B","W","B","W","B","W","B"],["B","W","B","W","B","W","B","W"],["W","B","W","B","W","B","W","B"],["B","W","B","W","B","W","B","W"],["W","B","W","B","W","B","W","B"],["B","W","B","W","B","W","B","W"]],boardGOL=[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0],[0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0],[0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0],[0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0],[0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],gamePawns=["K","Q","T","H","L"],moves,chess,boardChessCopy=JSON.parse(JSON.stringify(boardChess));const updateBoardChess=()=>{let n=0,a=document.getElementById("chessBoardContainer");a.innerHTML="",boardChess.map(e=>{n++;let t=document.createElement("div");t.setAttribute("id","divRowChess"+n),t.setAttribute("style","display: flex; flex-direction: row;"),a.appendChild(t),e.map(e=>{if("B"===e){let e=document.createElement("span"),t=(e.innerHTML='<img src="./images/chess/black100.gif" alt="Black field" width="100%" height:auto/>',document.getElementById("divRowChess"+n));t.appendChild(e)}else if("W"===e){let e=document.createElement("span"),t=(e.innerHTML='<img src="./images/chess/white100.gif" alt="White field" width="100%" height:auto/>',document.getElementById("divRowChess"+n));t.appendChild(e)}else if("T"===e){let e=document.createElement("span"),t=(e.innerHTML='<img src="./images/chess/tower100.gif" alt="Tower" width="100%" height:auto/>',document.getElementById("divRowChess"+n));t.appendChild(e)}else if("H"===e){let e=document.createElement("span"),t=(e.innerHTML='<img src="./images/chess/horse.gif" alt="Horse" width="100%" height:auto/>',document.getElementById("divRowChess"+n));t.appendChild(e)}else if("L"===e){let e=document.createElement("span"),t=(e.innerHTML='<img src="./images/chess/laufer.gif" alt="Laufer" width="100%" height:auto/>',document.getElementById("divRowChess"+n));t.appendChild(e)}else if("K"===e){let e=document.createElement("span"),t=(e.innerHTML='<img src="./images/chess/king.gif" alt="King" width="100%" height:auto/>',document.getElementById("divRowChess"+n));t.appendChild(e)}else if("Q"===e){let e=document.createElement("span"),t=(e.innerHTML='<img src="./images/chess/queen.gif" alt="Queen" width="100%" height:auto/>',document.getElementById("divRowChess"+n));t.appendChild(e)}else if("X"===e){let e=document.createElement("span"),t=(e.innerHTML='<img src="./images/chess/red100.gif" alt="Red field" width="100%" height:auto/>',document.getElementById("divRowChess"+n));t.appendChild(e)}}),a.appendChild(t)})};class ChessOnBoardGenerator{constructor(e){this.boardChess=e}generateChess(){let e=(e,t)=>Math.floor(Math.random()*(t-e+1)+e);var t=gamePawns[e(0,gamePawns.length-1)],n=e(0,7),a=e(0,7);return{figureType:boardChess[a][n]=t,x:a,y:n}}}const movesGenerator=function(){class t{constructor(e){this.moves=this.move()}move(){let n=[];for(let t=-1;t<2;t+=1)for(let e=-1;e<2;e+=1)0===t&&0===e||n.push([t,e]);return n}}class n{constructor(e){this.moves=this.move()}move(){let n=[];for(let t=-2;t<3;t+=1)for(let e=-2;e<3;e+=1)t!==e&&-t!==e&&0!==e&&0!==t&&n.push([t,e]);return n}}class a{constructor(e){this.moves=this.move()}move(){let n=[];for(let t=-7;t<8;t+=1)for(let e=-7;e<8;e+=1)((0!==t||0!==e)&&t===e||(0!==t||0!==e)&&-t===e||0!==t&&0===e||0!==e&&0===t)&&n.push([t,e]);return n}}class r{constructor(e){this.moves=this.move()}move(){let n=[];for(let t=-7;t<8;t+=1)for(let e=-7;e<8;e+=1)(0===t&&0===e||t!==e)&&(0===t&&0===e||-t!==e)||n.push([t,e]);return n}}class l{constructor(e){this.moves=this.move()}move(){let n=[];for(let t=-7;t<8;t+=1)for(let e=-7;e<8;e+=1)(0!==t&&0===e||0!==e&&0===t)&&n.push([t,e]);return n}}return{createMoves:e=>"Q"===e.figureType?new a(e):"K"===e.figureType?new t(e):"L"===e.figureType?new r(e):"H"===e.figureType?new n(e):"T"===e.figureType?new l(e):void 0}}(),king=movesGenerator.createMoves({figureType:"K"}),queen=movesGenerator.createMoves({figureType:"Q"}),laufer=movesGenerator.createMoves({figureType:"L"}),horse=movesGenerator.createMoves({figureType:"H"}),tower=movesGenerator.createMoves({figureType:"T"});class GameChess{constructor(e,t,n,a){this.boardChess=e,this.pawnArray=t,this.chess=n,this.moves=a}gameStart(){chess=new ChessOnBoardGenerator(boardChess).generateChess(),console.log(chess);let e=document.createElement("p");var t=document.createTextNode(`${"K"==chess.figureType?"King":"Q"==chess.figureType?"Queen":"L"==chess.figureType?"Laufer":"H"==chess.figureType?"Horse":"Tower"} appear on x=${chess.x}, y=`+chess.y);e.appendChild(t);let n=document.getElementById("resultChess"),d=(n.appendChild(e),(t,n,a,r)=>{let l=!1;for(let e=0;e<r.length;e+=1){if(t<0||n<0||7<t||7<n)return!1;if(r[e]===a[t][n]){l=!0;break}}return l});var a=(r,l,o)=>{for(let a=0;a<moves.length;a+=1){var s=Number(r)+moves[a][0],i=Number(l)+moves[a][1];if(!(s<0||i<0||7<s||7<i))if(!0!==d(s,i,o,gamePawns))o[s][i]="X";else{let e=document.getElementById("chessButton"),t=(e.setAttribute("style","display: none"),document.createElement("p"));s="K"==o[r][l]?"King":"Q"==o[r][l]?"Queen":"L"==o[r][l]?"Laufer":"H"==o[r][l]?"Horse":"Tower",i="K"==o[r+moves[a][0]][l+moves[a][1]]?"King":"Q"==o[r+moves[a][0]][l+moves[a][1]]?"Queen":"L"==o[r+moves[a][0]][l+moves[a][1]]?"Laufer":"H"==o[r+moves[a][0]][l+moves[a][1]]?"Horse":"Tower",s=(console.log(s+", "+i),document.createTextNode(`Checkmate! The ${s} on ${r}, ${l} beating ${i} on x=${r+moves[a][0]}, y=`+(l+moves[a][1])));t.appendChild(s);let n=document.getElementById("resultChess");n.appendChild(t)}}};for(let n=0;n<8;n+=1)for(let t=0;t<8;t+=1)if(!0===d(n,t,boardChess,gamePawns)){"Q"==boardChess[n][t]&&(moves=queen.move(),a(n,t,boardChess)),"T"==boardChess[n][t]&&(moves=tower.move(),a(n,t,boardChess)),"L"==boardChess[n][t]&&(moves=laufer.move(),a(n,t,boardChess)),"K"==boardChess[n][t]&&(moves=king.move(),a(n,t,boardChess)),"H"==boardChess[n][t]&&(moves=horse.move(),a(n,t,boardChess));for(let e=0;e<moves.length;e+=1)if(!0===d(n+moves[e][0],t+moves[e][1],boardChess,gamePawns))return console.log(`The ${boardChess[n][t]} on ${n}, ${t} beating ${boardChess[n+moves[e][0]][t+moves[e][1]]} on ${n+moves[e][0]}, `+(t+moves[e][1]))}}}let gameChess=new GameChess,gameStartChess=()=>{gameChess.gameStart(),updateBoardChess()},gameResetChess=()=>{alert("Game reset"),boardChess=JSON.parse(JSON.stringify(boardChessCopy)),updateBoardChess();let e=document.getElementById("chessButton"),t=(e.setAttribute("style","display: visible"),document.getElementById("resultChess"));t.innerHTML=""},chessButton=document.getElementById("chessButton"),resetBtnChess=(chessButton.addEventListener("click",()=>{gameStartChess()}),document.getElementById("resetBtnChess")),currentTheme=(resetBtnChess.addEventListener("click",()=>{gameResetChess()}),updateBoardChess(),"lightTheme");lightTheme.addEventListener("click",()=>{colorTheme("lightTheme")}),darkTheme.addEventListener("click",()=>{colorTheme("darkTheme")});const colorTheme=n=>{if(n!==currentTheme){if("lightTheme"===n){currentTheme=n;let e=document.getElementById("main"),t=(e.style.background="linear-gradient(rgb(255, 255, 255), rgb(156, 156, 156), rgb(255, 255, 255))",document.getElementById("intro"));t.style.color="black",t.style.background="linear-gradient(rgb(255, 255, 255), rgb(156, 156, 156), rgb(255, 255, 255))"}if("darkTheme"===n){currentTheme=n;let e=document.getElementById("main"),t=(e.style.background="black",document.getElementById("intro"));t.style.color="white",t.style.background="linear-gradient(black, gray, black)"}}},popup=(data={exec_time:.11,response:{current_page:1,from:1,last_page:1,per_page:10,to:10,total:8,data:[{work_order_id:1,description:"Create a connection to SQL database using Excel",received_date:"2021-07-21 00:23:03",assigned_to:[{person_name:"Technician One",status:"Assigned"}],status:"New",priority:"Low"},{work_order_id:2,description:"Need to make update for laptop 11",received_date:"2021-07-20 15:23:03",assigned_to:[{person_name:"Technician Two",status:"Assigned"}],status:"New",priority:"Low"},{work_order_id:3,description:"Setup station 2",received_date:"2021-07-20 14:23:03",assigned_to:[{person_name:"Technician One",status:"In progress"}],status:"Confirmed",priority:"High"},{work_order_id:4,description:"Setup station 3",received_date:"2021-07-19 12:23:03",assigned_to:[{person_name:"Technician Two",status:"Assigned"},{person_name:"Technician One",status:"In progress"}],status:"Confirmed",priority:"High"},{work_order_id:5,description:"Mailbox issues",received_date:"2021-07-19 11:23:03",assigned_to:[{person_name:"Technician Two",status:"Confirmed"}],status:"Confirmed",priority:"Normal"},{work_order_id:6,description:"Subject: We sent you issue last Friday",received_date:"2021-07-17 11:23:03",assigned_to:[],status:"New",priority:"Low"},{work_order_id:7,description:"Internal work",received_date:"2021-07-17 10:23:03",assigned_to:[],status:"Canceled",priority:"Low"},{work_order_id:8,description:"Set up station for new user",received_date:"2021-07-16 09:23:03",assigned_to:[{person_name:"Technician Two",status:"Completed"}],status:"Completed",priority:"Low"}]}},document.getElementById("popup")),xButton=document.getElementById("btnX"),overlay=document.getElementById("overlay"),resetBtn=document.getElementById("reset"),countBtn=document.getElementById("buttonCnt"),spanCounter=document.getElementById("counter"),show1=document.getElementById("show1"),show2=document.getElementById("show2"),show3=document.getElementById("show3"),show4=document.getElementById("show4"),show5=document.getElementById("show5"),show6=document.getElementById("show6"),show7=document.getElementById("show7"),imgMountain=(xButton.addEventListener("click",()=>{popupOnOff()}),overlay.addEventListener("click",()=>{popupOnOff()}),resetBtn.addEventListener("click",()=>{resetCounter()}),countBtn.addEventListener("click",()=>{counterButtonClick()}),show1.addEventListener("click",()=>{showHide("part1")}),show2.addEventListener("click",()=>{showHide("part2")}),show3.addEventListener("click",()=>{showHide("part3")}),show4.addEventListener("click",()=>{showHide("part4")}),show5.addEventListener("click",()=>{showHide("part5")}),show6.addEventListener("click",()=>{showHide("part6")}),show7.addEventListener("click",()=>{showHide("part7")}),document.getElementById("imgMountain"));imgMountain.addEventListener("click",()=>{counterButtonClick()});let counter=0;function initFunction(){counter=localStorage.getItem("count"),isNaN(counter)?(spanCounter.innerText=0,counter=0):spanCounter.innerText=counter}const popupOnOff=()=>{popup.classList.toggle("active"),overlay.classList.toggle("o-active"),spanCounter.innerText=counter},resetCounter=()=>{counter=0,spanCounter.innerText=counter,localStorage.clear(),resetBtn.classList.toggle("r-active")},counterButtonClick=()=>{counter++,localStorage.setItem("count",counter),5<counter&&1===resetBtn.classList.length&&resetBtn.classList.toggle("r-active"),popupOnOff()},showHide=e=>{let t=document.getElementById(e);"none"==t.style.display?t.style.display="block":t.style.display="none"};let boardGOLtemp=JSON.parse(JSON.stringify(boardGOL)),timeGol=0,timeGolHtml=document.getElementById("timeGol"),playGol,boardGolContainer=document.getElementById("boardGolContainer");const updateBoardGol=()=>{boardGolContainer.innerHTML="";let a=-1;boardGOLtemp.forEach(e=>{a++;let t=document.createElement("div"),n=(t.setAttribute("id","col"+a),t.setAttribute("style","display:   "),boardGolContainer.appendChild(t),-1);e.forEach(e=>{if(n++,1===e){let e=document.createElement("span");e.setAttribute("id",n+"."+a),e.innerHTML='<img src="./images/gol/cell2.gif" alt="Cell field" width="100%" height:auto class="cell"/>',t.appendChild(e),e.addEventListener("click",()=>{changeCell(e.id)})}else{let e=document.createElement("span");e.setAttribute("id",n+"."+a),e.innerHTML='<img src="./images/gol/air3.jpg" alt="Air field" width="100%" height:auto class="air">',t.appendChild(e),e.addEventListener("click",()=>{changeCell(e.id)})}}),boardGolContainer.appendChild(t)})},changeCell=e=>{var t=e.split(".")[0],e=e.split(".")[1];console.log(e,t),1===boardGOLtemp[e][t]?boardGOLtemp[e][t]=0:boardGOLtemp[e][t]=1,updateBoardGol()};class LifeCounter{constructor(e,t,n){this.board=e,this.x=t,this.y=n,this.range=this.cellRange(),this.count=this.count()}cellRange(){let n=[];for(let t=-1;t<2;t+=1)for(let e=-1;e<2;e+=1)0===t&&0===e||n.push([t,e]);return n}count(){let t=0;for(let e=0;e<this.range.length;e+=1)!0===(()=>!(this.x+this.range[e][0]<0||this.y+this.range[e][1]<0||this.x+this.range[e][0]>this.board.length-1||this.y+this.range[e][1]>this.board.length-1)&&0<this.board[this.x+this.range[e][0]][this.y+this.range[e][1]])()&&t++;return t}}class GameGOL{constructor(e){this.board=e}start(){let n=[];for(let t=0;t<board.length+1;t+=1){n.push([0]);for(let e=0;e<board.length+1;e+=1){var a=new LifeCounter(this.board,t,e).count;3===a||1===this.board[t][e]&&2===a?n[t][e]=1:n[t][e]=0}}boardGOLtemp=JSON.parse(JSON.stringify(n)),updateBoardGol()}}updateBoardGol();let golButton=document.getElementById("golButton"),resetGolBtn=(golButton.addEventListener("click",()=>{gameGolStart()}),document.getElementById("resetGolBtn")),randomGolBtn=(resetGolBtn.addEventListener("click",()=>{gameGolReset()}),document.getElementById("randomGol")),clearGolBtn=(randomGolBtn.addEventListener("click",()=>{randomGol()}),document.getElementById("clearGol"));clearGolBtn.addEventListener("click",()=>{clearGol()});const randomGol=()=>{let n=[];boardGOLtemp.forEach(e=>{let t=[];e.forEach(e=>{t.push(Math.random()<.5?0:1)}),n.push(t)}),boardGOLtemp=n,updateBoardGol()},clearGol=()=>{let n=[];boardGOLtemp.forEach(e=>{let t=[];e.forEach(e=>{t.push(0)}),n.push(t)}),boardGOLtemp=n,updateBoardGol()};function gameGolStart(){golButton.setAttribute("disabled",null),resetGolBtn.removeAttribute("disabled"),playGol=setInterval(()=>{new GameGOL(boardGOLtemp).start();timeGol++,timeGolHtml.innerHTML=timeGol},1e3)}function gameGolReset(){clearInterval(playGol),alert("Game reset"),timeGol=0,timeGolHtml.innerHTML=timeGol,boardGOLtemp=JSON.parse(JSON.stringify(boardGOL)),updateBoardGol(),golButton.removeAttribute("disabled"),resetGolBtn.setAttribute("disabled",null)}let language="en";function changeLanguage(e){e!==language&&("pl"===(language=e)&&(document.getElementById("menuIntro").innerHTML="Wstęp",document.getElementById("menuDataApps").innerHTML="Apki danych",document.getElementById("menuDataTable").innerHTML="Tabela danych",document.getElementById("menuBallApps").innerHTML="Apki piłka",document.getElementById("menuBallApps").innerHTML="Apki piłka",document.getElementById("menuBall_1").innerHTML="Piłka 1",document.getElementById("menuBall_2").innerHTML="Piłka 2",document.getElementById("menuOtherApps").innerHTML="Inne apki",document.getElementById("menuChess").innerHTML="Szachy",document.getElementById("menuGOL").innerHTML="G.W.Ż",document.getElementById("lightTheme").innerHTML="Jasny motyw",document.getElementById("darkTheme").innerHTML="Ciemny motyw",document.getElementById("introTitle").innerHTML="Wstęp",document.getElementById("introText").innerHTML="Witam, nazywam się Tomasz Janiszta. Programuję w JavaScript.\t\t\tFront-end: React, Angular. Back-end: Node.js. Strona zawiera przykłady kodu, które zrobiłem w formie krótkiej prezentacji.\t\t\tMożesz zapoznać się z widocznymi tutaj warstwami końcowymi/użytkowymi kodu.\t\t\tMiłego oglądania, ale... zapraszam też do obejrzenia plików js :)",document.getElementById("show1").innerHTML="Pokaż \\ Ukryj",document.getElementById("popupHeader").innerHTML="<b>Przykładowy licznik pop-up</b>",document.getElementById("popupHeader2").innerHTML="<b>Przykładowy licznik pop-up</b>",document.getElementById("popupP").innerHTML="Przykładowy licznik pop-up. Wykonane podczas jednego z małych projektów. Kliknij przycisk lub mój obraz.\t\t\tPo szóstym kliknięciu licznik można zresetować.",document.getElementById("buttonCnt").innerHTML="Przycisk",document.getElementById("alert").innerHTML="Alarm!",document.getElementById("popupText").innerHTML="Kliknąłeś przycisk ",document.getElementById("popupTimes").innerHTML=" raz(y)",document.getElementById("reset").innerHTML="Kasuj licznik",document.getElementById("show2").innerHTML="Pokaż \\ Ukryj",document.getElementById("tableHeader").innerHTML="<b>Praca z tabelą danych</b>",document.getElementById("show3").innerHTML="Pokaż \\ Ukryj",document.getElementById("chessHeader").innerHTML="<b>Szachy (proste)</b>",document.getElementById("show4").innerHTML="Pokaż \\ Ukryj",document.getElementById("ball_1Header").innerHTML="<b>Symulator odbijania się piłki v.1.</b>",document.getElementById("show5").innerHTML="Pokaż \\ Ukryj",document.getElementById("ball_2Header").innerHTML="<b>Symulator odbijania się piłki v.2.</b>",document.getElementById("show6").innerHTML="Pokaż \\ Ukryj",document.getElementById("golHeader").innerHTML="<b>Gra w życie</b>"),"en"===e&&(document.getElementById("menuIntro").innerHTML="Intro",document.getElementById("menuDataApps").innerHTML="Data apps",document.getElementById("menuDataTable").innerHTML="Data table",document.getElementById("menuBallApps").innerHTML="Ball apps",document.getElementById("menuBall_1").innerHTML="Ball v.1",document.getElementById("menuBall_2").innerHTML="Ball v.2",document.getElementById("menuOtherApps").innerHTML="Other apps",document.getElementById("menuChess").innerHTML="Chess",document.getElementById("menuGOL").innerHTML="G.O.L.",document.getElementById("lightTheme").innerHTML="Ligh theme",document.getElementById("darkTheme").innerHTML="Dark theme",document.getElementById("introTitle").innerHTML="Intro",document.getElementById("introText").innerHTML="Hello, my name is Tomasz Janiszta. I program in JavaScript.\t\t\tFront-end: React, Angular. Back-end: Node.js. The page contains examples of code I made as a quick presentation.\t\t\tYou can familiarize yourself with the end/usage layers of the code visible here.            Enjoy watching, but... I also invite you to take a look at the js files :)",document.getElementById("show1").innerHTML="Show \\ Hide",document.getElementById("popupHeader").innerHTML="<b>Example pop-up counter</b>",document.getElementById("popupHeader2").innerHTML="<b>Example pop-up counter</b>",text="Example pop-up counter. Made during one of the small projects. Click on the button or my image.\t\t\tAfter the 6th click, the counter can be reset.",document.getElementById("popupP").innerHTML=text,document.getElementById("buttonCnt").innerHTML="Button",document.getElementById("alert").innerHTML="Alert!",document.getElementById("popupText").innerHTML="You have clicked this button ",document.getElementById("popupTimes").innerHTML=" time(s).",document.getElementById("reset").innerHTML="Reset counter",document.getElementById("show2").innerHTML="Show \\ Hide",document.getElementById("tableHeader").innerHTML="<b>Work with data table</b>",document.getElementById("show3").innerHTML="Show \\ Hide",document.getElementById("chessHeader").innerHTML="<b>Chess (simple)</b>",document.getElementById("show4").innerHTML="Show \\ Hide",document.getElementById("ball_1Header").innerHTML="<b>Ball bouncy simulator v.1.</b>",document.getElementById("show5").innerHTML="Show \\ Hide",document.getElementById("ball_2Header").innerHTML="<b>Ball bouncy simulator v.2.</b>",document.getElementById("show6").innerHTML="Show \\ Hide",document.getElementById("golHeader").innerHTML="<b>Game of life</b>"))}let dataTable=JSON.parse(JSON.stringify(data.response.data));const noTableData=document.getElementById("noTableData"),tableFilters=document.getElementById("tableFilters"),selectPriotity=document.getElementById("selectPriotity"),searchByDesc=document.getElementById("searchByDesc"),sortByIdBtn=document.getElementById("sortById"),sortByDateBtn=document.getElementById("sortByDate");let sortAscDsc=!0,filterDescVal="",filterPriorVal="";function sortById(){function e(e,t){return e.work_order_id<t.work_order_id?-1:e.work_order_id>t.work_order_id?1:0}!0===(sortAscDsc=!sortAscDsc)&&dataTable.sort(e),!1===sortAscDsc&&dataTable.sort(e).reverse(),loadData()}function sortByDate(){function e(e,t){return e.received_date<t.received_date?-1:e.received_date>t.received_date?1:0}!1===(sortAscDsc=!sortAscDsc)&&dataTable.sort(e),!0===sortAscDsc&&dataTable.sort(e).reverse(),loadData()}function filterPriority(e){filterPriorVal="All"!==e?e:"",transformData(filterDescVal,filterPriorVal),updateDescForTable(),loadData()}function filterDesc(e){transformData(filterDescVal=e,filterPriorVal),updateDescForTable(),loadData()}function transformData(t,n){let e=JSON.parse(JSON.stringify(data.response.data));dataTable=e=""==t?e:e.filter(e=>e.description.toLowerCase().replaceAll(/\s/g,"").includes(t.toLowerCase().replaceAll(/\s/g,""))),n&&(e=e.filter(e=>e.priority.toLowerCase().includes(n.toLowerCase())),dataTable=e)}function updateDescForTable(){filterDescVal||filterPriorVal?noTableData.innerHTML=(filterDescVal?"Data filtered by decription containing: "+filterDescVal+". ":"")+(filterPriorVal?"Data filtered by priority: "+filterPriorVal+".":""):noTableData.innerHTML=""}const resetData=()=>{tableContainer.innerHTML="",tableFilters.setAttribute("style","display: none"),dataTable=JSON.parse(JSON.stringify(data.response.data)),selectPriotity.value="All",filterPriorVal="",searchByDesc.value="",filerDescVal="",document.getElementById("noTableData").innerHTML="Data reset. Please press load button.",sortByIdBtn.setAttribute("style","display: none"),sortByDateBtn.setAttribute("style","display: none"),document.getElementById("loadBtn").setAttribute("style","display: visible"),document.getElementById("loadReset").setAttribute("style","display: none")},loadData=()=>{document.getElementById("noTableData").innerHTML="",tableFilters.setAttribute("style","display: visible");let t=document.getElementById("tableContainer"),n=(t.innerHTML="",[]),a=document.createElement("tr");dataTable.forEach(e=>{Object.entries(e).forEach(e=>{n.push(e[0])}),n=[...new Set(n)]}),n.forEach(e=>{let t=document.createElement("th");t.setAttribute("style","border:1px solid; padding-inline:3px; background:gray;"),t.innerHTML=e,a.appendChild(t)}),t.appendChild(a),dataTable.forEach(e=>{let a=document.createElement("tr");Object.entries(e).map(e=>{let n=0;e.forEach(t=>{if(0<n){let e=document.createElement("td");if(e.setAttribute("style","border: 1px solid; border-collapse:collapse; white-space:normal;"),"object"==typeof t&&0<t.length){let n=document.createElement("td");n.setAttribute("style","display:flex; flex-direction:column; border-collapse:collapse;"),t.forEach(e=>{let t=document.createElement("td");t.setAttribute("style","border: 1px solid; border-collapse:collapse;"),t.innerHTML=JSON.stringify(e).replace("{","").replace("}","").replace(",",", ").replaceAll(":",": ").replaceAll('"',""),n.appendChild(t)}),a.appendChild(n)}else e.innerHTML=t,a.appendChild(e);n--}else n++}),t.appendChild(a)})}),sortByIdBtn.setAttribute("style","display: visible"),sortByDateBtn.setAttribute("style","display: visible"),document.getElementById("loadBtn").setAttribute("style","display: none"),document.getElementById("loadReset").setAttribute("style","display: visible")};