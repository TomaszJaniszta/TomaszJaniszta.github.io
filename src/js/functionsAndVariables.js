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

const showHide = (obj) => {
    let x=document.getElementById(obj);
    if(x.style.display == "none"){x.style.display = "block"} else {x.style.display = "none"};
};