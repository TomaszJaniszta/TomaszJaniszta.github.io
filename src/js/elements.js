const popup = document.getElementById('popup');
const xButton = document.getElementById('btnX');
const overlay = document.getElementById('overlay');
const resetBtn = document.getElementById('reset');
const countBtn = document.getElementById('buttonCnt');
const spanCounter = document.getElementById('counter');

const show1 = document.getElementById('show1');
const show2 = document.getElementById('show2');
const show3 = document.getElementById('show3');
const show4 = document.getElementById('show4');
const show5 = document.getElementById('show5');
const show6 = document.getElementById('show6');
const show7 = document.getElementById('show7');

xButton.addEventListener('click', () => {popupOnOff()});
overlay.addEventListener('click', () => {popupOnOff()});
resetBtn.addEventListener("click", () => {resetCounter()});
countBtn.addEventListener('click', () => {counterButtonClick()});

show1.addEventListener('click', () => {showHide('part1')});
show2.addEventListener('click', () => {showHide('part2')});
show3.addEventListener('click', () => {showHide('part3')});
show4.addEventListener('click', () => {showHide('part4')});
show5.addEventListener('click', () => {showHide('part5')});
show6.addEventListener('click', () => {showHide('part6')});
show7.addEventListener('click', () => {showHide('part7')});

const imgMountain = document.getElementById('imgMountain');
imgMountain.addEventListener('click', () => {counterButtonClick()});