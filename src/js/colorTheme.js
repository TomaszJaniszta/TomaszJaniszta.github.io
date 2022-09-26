//const lightTheme= document.getElementById('lightTheme');
//const darkTheme= document.getElementById('darkTheme');
let currentTheme = 'lightTheme';

lightTheme.addEventListener('click', () => {colorTheme('lightTheme')});
darkTheme.addEventListener('click', () => {colorTheme('darkTheme')});

const colorTheme = (theme) => {
	if(theme !== currentTheme){
	 //document.body.classList.toggle('light-theme');
	 //document.body.classList.toggle('dark-theme');
		 if(theme === 'lightTheme'){
			currentTheme = theme;
			let main = document.getElementById('main');
				main.style.background = 'linear-gradient(rgb(255, 255, 255), rgb(156, 156, 156), rgb(255, 255, 255))';
			
		 	let intro = document.getElementById('intro');
				intro.style.color = 'black';
				intro.style.background='linear-gradient(rgb(255, 255, 255), rgb(156, 156, 156), rgb(255, 255, 255))';

		 };

		 if(theme === 'darkTheme'){
			currentTheme = theme;
			let main = document.getElementById('main');
				main.style.background = 'black';
			 
			let intro = document.getElementById('intro');
				intro.style.color = 'white';
				intro.style.background='linear-gradient(black, gray, black)';
			
		 };
	};
}