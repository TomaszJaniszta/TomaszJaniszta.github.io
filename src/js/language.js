let language = 'en';

function changeLanguage(newLanguage) {
  if(newLanguage !== language){
	language = newLanguage;
	// ... zmiana elementów
	if(newLanguage === 'pl'){
		document.getElementById("lightTheme").innerHTML = "Jasny motyw";
		document.getElementById("darkTheme").innerHTML = "Ciemny motyw";
		document.getElementById("introTitle").innerHTML = "Wstęp";
		
		let introText = "Witam, nazywam się Tomasz Janiszta. Programuję w JavaScript.\
			Front-end: React, Angular. Back-end: Node.js. Strona zawiera przykłady kodu, które zrobiłem w formie krótkiej prezentacji.\
			Możesz zapoznać się z widocznymi tutaj warstwami końcowymi/użytkowymi kodu.\
			Miłego oglądania, ale... zapraszam też do obejrzenia plików js :)";
		document.getElementById("introText").innerHTML = introText;
		
		document.getElementById("show1").innerHTML = "Pokaż \\ Ukryj";
		document.getElementById("show2").innerHTML = "Pokaż \\ Ukryj";
		document.getElementById("show3").innerHTML = "Pokaż \\ Ukryj";
		document.getElementById("show4").innerHTML = "Pokaż \\ Ukryj";
		
		// kolejne elementy
	};
	if(newLanguage === 'en'){
		document.getElementById("lightTheme").innerHTML = "Ligh theme";
		document.getElementById("darkTheme").innerHTML = "Dark theme";
		document.getElementById("introTitle").innerHTML = "Intro";
		
		let introText = "Hello, my name is Tomasz Janiszta. I program in JavaScript.\
			Front-end: React, Angular. Back-end: Node.js. The page contains examples of code I made as a quick presentation.\
			You can familiarize yourself with the end/usage layers of the code visible here.\
            Enjoy watching, but... I also invite you to take a look at the js files :)";
		document.getElementById("introText").innerHTML = introText;
		
		document.getElementById("show1").innerHTML = "Show \\ Hide";
		document.getElementById("show2").innerHTML = "Show \\ Hide";
		document.getElementById("show3").innerHTML = "Show \\ Hide";
		document.getElementById("show4").innerHTML = "Show \\ Hide";
		
		// kolejne elementy
	};
	
  };
};