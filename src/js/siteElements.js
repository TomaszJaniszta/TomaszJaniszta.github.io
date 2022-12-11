const show1 = document.getElementById('show1');
const show2 = document.getElementById('show2');
const show3 = document.getElementById('show3');
const show4 = document.getElementById('show4');
const show5 = document.getElementById('show5');
const show6 = document.getElementById('show6');
const show7 = document.getElementById('show7');

show1.addEventListener('click', () => {showHide('part1')});
show2.addEventListener('click', () => {showHide('part2')});
show3.addEventListener('click', () => {showHide('part3')});
show4.addEventListener('click', () => {showHide('part4')});
show5.addEventListener('click', () => {showHide('part5')});
show6.addEventListener('click', () => {showHide('part6')});
show7.addEventListener('click', () => {showHide('part7')});

const menu = document.getElementsByClassName("menu")[0];

//const sliderM = (value) => {
// 	if(value < 0){value = value * 1.1}
// 	//console.log(value);
// 	menu.setAttribute("style", `left:${value}%`);
//};

const showHide = (obj) => {
    let x=document.getElementById(obj);
	// console.log(x.style.maxHeight);
    if(x.style.maxHeight === "0px"){
		x.style.maxHeight="1000px";
		x.style.transform="scaleY(1)";
		x.style.opacity="1.0";
			} else {
				x.style.maxHeight="0px";
				x.style.transform="scaleY(0)";
				x.style.opacity="0.0";
	}
};

//intro popup
imgMeSmall.addEventListener('click', () => {popUpMeFunc("click")});

const popUpMeClose = () => {
	popUpMe.innerHTML = '';
	popUpMe.classList.remove('active');
	overlay1.classList.remove('o-active');
};

const popUpMeFunc = (text) => {
	console.log(text);
	
	const popUpMe = document.getElementById('popupMe');
	const overlay1 = document.getElementById('overlay1');
	overlay1.addEventListener('click', () => {popUpMeClose()});
	//popUpMe.setAttribute("background", "red");
	
	const popUpMeClose = () => {
		popUpMe.innerHTML = '';
		popUpMe.classList.remove('active');
		overlay1.classList.remove('o-active');
	};
	
	let buttonPopUpMe = document.createElement("button");
		buttonPopUpMe.setAttribute("type", "button");
		buttonPopUpMe.setAttribute("class", "btnX");
		buttonPopUpMe.setAttribute("id", "btnPopupMe");
		buttonPopUpMe.innerHTML = '&#10005';
		buttonPopUpMe.addEventListener('click', () => {popUpMeClose()});
	popUpMe.appendChild(buttonPopUpMe);
	
	let imgMe = document.createElement("img");
		imgMe.setAttribute("src", "./images/me.jpg");
		imgMe.setAttribute("alt", "Tomasz Janiszta photo");
		imgMe.setAttribute("style", "object-fit: contain; width: 100%; height: 100%; box-shadow: $introShadow; border-radius: 10px");
	popUpMe.appendChild(imgMe);
		
	popUpMe.classList.toggle('active');
	overlay1.classList.toggle('o-active');
};