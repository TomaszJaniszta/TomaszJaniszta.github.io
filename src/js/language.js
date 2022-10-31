let language = 'en';

function changeLanguage(newLanguage){
  if(newLanguage !== language){
	language = newLanguage;

	if(newLanguage === 'pl'){
		//menu
		document.getElementById("menuIntro").innerHTML = "Wstęp";
		document.getElementById("menuDataApps").innerHTML = "Apki danych";
		document.getElementById("menuDataTable").innerHTML = "Tabela danych";	
		document.getElementById('menuBallApps').innerHTML = "Apki piłka";
		document.getElementById('menuBallApps').innerHTML = "Apki piłka";
		document.getElementById('menuBall_1').innerHTML = "Piłka 1";
		document.getElementById('menuBall_2').innerHTML = "Piłka 2";
		document.getElementById('menuOtherApps').innerHTML = "Inne apki";
		document.getElementById('menuChess').innerHTML = "Szachy";
		document.getElementById('menuGOL').innerHTML = "G.W.Ż";	
		document.getElementById("lightTheme").innerHTML = "Jasny motyw";
		document.getElementById("darkTheme").innerHTML = "Ciemny motyw";
		document.getElementById("introTitle").innerHTML = "Wstęp";
		//intro
		let text = "Witam, nazywam się Tomasz Janiszta. Programuję w JavaScript.\
			Front-end: React, Angular. Back-end: Node.js. Strona zawiera przykłady kodu, które zrobiłem w formie krótkiej prezentacji.\
			Możesz zapoznać się z widocznymi tutaj warstwami końcowymi/użytkowymi kodu.\
			Miłego oglądania, ale... zapraszam też do obejrzenia plików js :)";
		document.getElementById("introText").innerHTML = text;
		//pop-up part
		document.getElementById("show1").innerHTML = "Pokaż \\ Ukryj";
		document.getElementById("popupHeader").innerHTML = "<b>Przykładowy licznik pop-up</b>";
		document.getElementById("popupHeader2").innerHTML = "<b>Przykładowy licznik pop-up</b>";
		text = "Przykładowy licznik pop-up. Wykonane podczas jednego z małych projektów. Kliknij przycisk lub mój obraz.\
			Po szóstym kliknięciu licznik można zresetować.";
		document.getElementById("popupP").innerHTML = text;
		document.getElementById("buttonCnt").innerHTML = "Przycisk";
		document.getElementById("alert").innerHTML = "Alarm!";
		document.getElementById("popupText").innerHTML = "Kliknąłeś przycisk ";
		document.getElementById("popupTimes").innerHTML = " raz(y)";
		document.getElementById("reset").innerHTML = "Kasuj licznik";
		//table part

		document.getElementById("show2").innerHTML = "Pokaż \\ Ukryj";
		document.getElementById("tableHeader").innerHTML = "<b>Praca z tabelą danych</b>";
		document.getElementById("show3").innerHTML = "Pokaż \\ Ukryj";
		document.getElementById("chessHeader").innerHTML = "<b>Szachy (proste)</b>";
		document.getElementById("show4").innerHTML = "Pokaż \\ Ukryj";
		document.getElementById("ball_1Header").innerHTML = "<b>Symulator odbijania się piłki v.1.</b>";
		document.getElementById("show5").innerHTML = "Pokaż \\ Ukryj";
		document.getElementById("ball_2Header").innerHTML = "<b>Symulator odbijania się piłki v.2.</b>";
		document.getElementById("show6").innerHTML = "Pokaż \\ Ukryj";
		document.getElementById("golHeader").innerHTML = "<b>Gra w życie</b>";
		
		// kolejne elementy
	};
	if(newLanguage === 'en'){
		//menu
		document.getElementById("menuIntro").innerHTML = "Intro";	
		document.getElementById("menuDataApps").innerHTML = "Data apps";
		document.getElementById("menuDataTable").innerHTML = "Data table";
		document.getElementById('menuBallApps').innerHTML = "Ball apps";
		document.getElementById('menuBall_1').innerHTML = "Ball v.1";
		document.getElementById('menuBall_2').innerHTML = "Ball v.2";
		document.getElementById('menuOtherApps').innerHTML = "Other apps";
		document.getElementById('menuChess').innerHTML = "Chess";
		document.getElementById('menuGOL').innerHTML = "G.O.L.";					
		document.getElementById("lightTheme").innerHTML = "Ligh theme";
		document.getElementById("darkTheme").innerHTML = "Dark theme";
		document.getElementById("introTitle").innerHTML = "Intro";
		//intro
		let introText = "Hello, my name is Tomasz Janiszta. I program in JavaScript.\
			Front-end: React, Angular. Back-end: Node.js. The page contains examples of code I made as a quick presentation.\
			You can familiarize yourself with the end/usage layers of the code visible here.\
            Enjoy watching, but... I also invite you to take a look at the js files :)";
		document.getElementById("introText").innerHTML = introText;
		//pop-up part
		document.getElementById("show1").innerHTML = "Show \\ Hide";
		document.getElementById("popupHeader").innerHTML = "<b>Example pop-up counter</b>";
		document.getElementById("popupHeader2").innerHTML = "<b>Example pop-up counter</b>";
		text = "Example pop-up counter. Made during one of the small projects. Click on the button or my image.\
			After the 6th click, the counter can be reset.";
		document.getElementById("popupP").innerHTML = text;
		document.getElementById("buttonCnt").innerHTML = "Button";
		document.getElementById("alert").innerHTML = "Alert!";
		document.getElementById("popupText").innerHTML = "You have clicked this button ";
		document.getElementById("popupTimes").innerHTML = " time(s).";
		document.getElementById("reset").innerHTML = "Reset counter";
		//table part
		
		document.getElementById("show2").innerHTML = "Show \\ Hide";
		document.getElementById("tableHeader").innerHTML = "<b>Work with data table</b>";
		document.getElementById("show3").innerHTML = "Show \\ Hide";	
		document.getElementById("chessHeader").innerHTML = "<b>Chess (simple)</b>";
		document.getElementById("show4").innerHTML = "Show \\ Hide";
		document.getElementById("ball_1Header").innerHTML = "<b>Ball bouncy simulator v.1.</b>";
		document.getElementById("show5").innerHTML = "Show \\ Hide";
		document.getElementById("ball_2Header").innerHTML = "<b>Ball bouncy simulator v.2.</b>";
		document.getElementById("show6").innerHTML = "Show \\ Hide";
		document.getElementById("golHeader").innerHTML = "<b>Game of life</b>";
		
		// kolejne elementy
	};
  };
};