const popup = document.getElementById('popup');
const xButton = document.getElementById('btnX');
const overlay = document.getElementById('overlay');
const resetBtn = document.getElementById('reset');
const countBtn = document.getElementById('button');
const spanCounter = document.getElementById('counter');
const resetBall = document.getElementById('resetBall');
const show1 = document.getElementById('show1');
const show2 = document.getElementById('show2');

xButton.addEventListener('click', () => {popupOnOff()});
overlay.addEventListener('click', () => {popupOnOff()});
resetBtn.addEventListener("click", () => {resetCounter()});
countBtn.addEventListener('click', () => {counterButtonClick()});
resetBall.addEventListener('click', () => {resetBallClick()});
show1.addEventListener('click', () => {showHide('part1')});
show2.addEventListener('click', () => {showHide('part2')});

const imgMe = document.getElementById('imgMe');
imgMe.addEventListener('click', () => {counterButtonClick()});