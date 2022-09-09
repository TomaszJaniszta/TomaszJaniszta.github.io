const popup = document.getElementById('popup');
const xButton = document.getElementById('btnX');
const overlay = document.getElementById('overlay');
const resetBtn = document.getElementById('reset');
const countBtn = document.getElementById('button');
const spanCounter = document.getElementById('counter');

xButton.addEventListener('click', () => {popupOnOff()});
overlay.addEventListener('click', () => {popupOnOff()});
resetBtn.addEventListener("click", () => {resetCounter()});
countBtn.addEventListener('click', () => {counterButtonClick()});

const imgMe = document.getElementById('imgMe');
imgMe.addEventListener('click', () => {counterButtonClick()});