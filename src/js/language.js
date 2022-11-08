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
		document.getElementById("tableHeaderH").innerHTML = "<b>Praca z tabelą danych</b>";
		document.getElementById("tableP").innerHTML = "Przykładowa tabela danych wykorzystująca moc JavaScript. \
			Imitacja pobierania danych poprzez przycisk „Załaduj”, a następnie możliwość sortowania, filtrowania. \
			Możesz zmienić plik z danymi (data.js) i odświeżyć, aby pracować z danymi.";
		document.getElementById("loadBtn").innerHTML = "Załaduj";
		document.getElementById("loadReset").innerHTML = "Resetuj";
		document.getElementById("sortById").innerHTML = "Sortuj po ID";
		document.getElementById("sortByDate").innerHTML = "Sortuj po dacie";
		document.getElementById("searchByDescLabel").innerHTML = "Wyszukaj po opisie:";
		document.getElementById("searchByDesc").placeholder = "Wprowadź szukaną frazę";
		document.getElementById("searchByPriorLabel").innerHTML = "Wybierz priorytet:";
		document.getElementById("selectAll").innerHTML = "Wszystko";
		document.getElementById("selectLow").innerHTML = "Niski";
		document.getElementById("selectNormal").innerHTML = "Normalny";
		document.getElementById("selectHigh").innerHTML = "Wysoki";
		//inv part
		document.getElementById("show7").innerHTML = "Pokaż \\ Ukryj";	
		document.getElementById("invHeader").innerHTML = "<b>Generator faktur</b>";
		document.getElementById("invHeaderH").innerHTML = "Generator faktur";
		document.getElementById("invP").innerHTML = 
						'Aplikacja imitująca wprowadzanie pozycji na fakturę. \
						Możesz dodawać przedmioty i je kasować. Dodana walidacja danych. \
						Nazwa - pole wymagane, minimalna liczba znaków to 3, maksymalna liczba znaków to 30. Pole akceptuje dowolne znaki. \
						Ilość - pole wymagane, minimum 1, maximum 100. Pole akceptuje tylko liczby całkowite. \
						Cena - pole wymagane, minimum 1, maximum 1000000. Pole akceptuje tylko liczby całkowite. \
						Na dole jest przycisk "Dodaj pozycję", który kliknięty: \
						jeżeli formularz zawiera błędy - wyświetli je, \
						w przypadku pustego formularza - wyświetli komunikat "Proszę dodać dane", \
						jeżeli formularz jest bez błędów - skalkuluje sumę pozycji.';
		document.getElementById("invNameInputLabel").innerHTML = "<b>Wprowadź lub wybierz nazwę pozycji: </b>";
		document.getElementById("invQtyInputLabel").innerHTML = "<b>Wprowadź lub wybierz ilość pozycji: </b>";
		document.getElementById("invPriceInputLabel").innerHTML = "<b>Wprowadź cenę pozycji: </b>";
		document.getElementById("invoiceVatDsc").innerHTML = "Wybierz VAT % ";
		document.getElementById("submitForm").value = "Dodaj pozycję";
		//chess part
		document.getElementById("show3").innerHTML = "Pokaż \\ Ukryj";
		document.getElementById("chessHeader").innerHTML = "<b>Szachy (proste)</b>";
		document.getElementById("chessHeaderH").innerHTML = "Szachy (proste)";
		document.getElementById("chessP").innerHTML = 
			"To nie jest klasyczna gra w szachy. Program polega na losowym wybraniu jednej figury szachowej (oprócz pionka) i umieszczeniu jej w losowym miejscu na planszy.\
			Po umieszczeniu dowolnego pionka (oprócz pierwszego) sprawdza wszystkie obecne zakresy ruchów bierek i patrzy, czy któryś z nich może pobić innego pionka.\
			Jeśli tak to podaje pozycję elementów i zakończa działanie. Aplikacja stworzona z użyciem FACTORY (z hierarchią klas) + wzór SINGLETON w kodzie."
		document.getElementById("chessButton").innerHTML = "Dodaj figurę";
		document.getElementById("resetBtnChess").innerHTML = "Restartuj";
		//ball_1 part
		document.getElementById("show4").innerHTML = "Pokaż \\ Ukryj";
		document.getElementById("ball_1Header").innerHTML = "<b>Symulator odbijania się piłki v.1.</b>";
		document.getElementById("ball_1HeaderH").innerHTML = "Symulator odbijania się piłki v.1.";
		document.getElementById("ball_1P").innerHTML = 
			'Program ma pokazać, jak piłka będzie się przemieszczać i odbijać od ścian. \
			"?" klocki zmieniają kierunek piłki na losowy. \
			Program ma się zakończyć, gdy obiekt wróci do pierwotnej pozycji. \
			Ball v.1 wersja oparta na obrazkach.'
		// start, reset, time
			
		//ball_2 part
		document.getElementById("show5").innerHTML = "Pokaż \\ Ukryj";
		document.getElementById("ball_2Header").innerHTML = "<b>Symulator odbijania się piłki v.2.</b>";
		document.getElementById("ball_2HeaderH").innerHTML = "Symulator odbijania się piłki v.2.";
		document.getElementById("ball_2P").innerHTML = 
			'Podobnie jak w wersji v.1 program ma pokazać, jak piłka będzie się przemieszczać i odbijać od ścian. \
			"?" klocki zmieniają kierunek piłki na losowy. \
			Program ma się zakończyć, gdy obiekt wróci do pierwotnej pozycji. \
			Ball v.2 wersja oparta na czcionce Webdings.'
		// start, reset, time	

		//GOL part
		document.getElementById("show6").innerHTML = "Pokaż \\ Ukryj";
		document.getElementById("golHeader").innerHTML = "<b>Gra w życie</b>";
		document.getElementById("golHeaderH").innerHTML = "Gra w życie";
		document.getElementById("golP").innerHTML = "Gra w życie - jeden z pierwszych i najbardziej znanych przykładów automatu komórkowego, wynalezionego w 1970 roku przez brytyjskiego matematyka Johna Conwaya. \
					Gra toczy się na planszy podzielonej na kwadratowe komórki. Każda komórka ma osiem" + ' "sąsiadów" ' + "(tak zwane sąsiedztwo Moore'a), \
					tj. komórki przylegające do niego bokami i narożnikami. Każda komórka może znajdować się w jednym z dwóch stanów: może być albo" + ' "żywa" (włączona) lub "martwa". \
					Stany komórek zmieniają się w czasie. Stan wszystkich komórek w jednej jednostce czasu służy do obliczania stanu wszystkich komórek w następnej jednostce. \
					Po obliczeniu wszystkie komórki zmieniają swój stan dokładnie w tym samym czasie. Stan komórki zależy tylko od liczby jej żyjących sąsiadów. \
					W grze nie ma graczy w dosłownym tego słowa znaczeniu. Udział człowieka sprowadza się do ustalenia początkowego stanu komórek. \
					Martwa komórka, która ma dokładnie 3 żywych sąsiadów, ożywa w następnej jednostce czasu (rodzi się). Żywa komórka z 2 lub 3 żywymi sąsiadami pozostaje żywa,\
					a przy innej liczbie sąsiadów umiera (z „samotności” lub „stłoczenia”). Więcej informacji:<a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank">wikipedia.org</a>'
		document.getElementById("p_red").innerHTML = "Możesz edytować planszę przez klikanie w pola, by następnie sprawdzić nowy rezultat.";
		document.getElementById("resetGolBtn").innerHTML = "Restart";
		document.getElementById("randomGol").innerHTML = "Losowe komórki";
		document.getElementById("clearGol").innerHTML = "Czyść komórki";
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
		document.getElementById("tableHeaderH").innerHTML = "<b>Work with data table</b>";
		document.getElementById("tableP").innerHTML = 'Sample data table using the power of JavaScript. \
			Imitation of data download via the "Load" button, and then the possibility of sorting, filtering. \
			You can change file with data (data.js) and refresh to work with your data.';
		document.getElementById("loadBtn").innerHTML = "Load";
		document.getElementById("loadReset").innerHTML = "Reset";
		document.getElementById("sortById").innerHTML = "Sort by ID";
		document.getElementById("sortByDate").innerHTML = "Sort by date";
		document.getElementById("searchByDescLabel").innerHTML = "Search by description:";
		document.getElementById("searchByDesc").placeholder = "Enter searched phrase";
		document.getElementById("searchByPriorLabel").innerHTML = "Select priority:";
		document.getElementById("selectAll").innerHTML = "All";
		document.getElementById("selectLow").innerHTML = "Low";
		document.getElementById("selectNormal").innerHTML = "Normal";
		document.getElementById("selectHigh").innerHTML = "High";
		//inv part
		document.getElementById("show7").innerHTML = "Show \\ Hide";	
		document.getElementById("invHeader").innerHTML = "<b>Invoice generator</b>";
		document.getElementById("invHeaderH").innerHTML = "Invoice generator";
		document.getElementById("invP").innerHTML = 
						'An application that imitates entering items on an invoice. \
						You can add items and delete items. Data validation added. \
						Name - required field, the minimum number of characters is 3, the maximum number of characters is 30. The field accepts any characters. \
						Count - required field, minimum 1, maximum 100. The field accepts only integers. \
						Price - required field, minimum 1, maximum 1000000. The field accepts only integers. \
						At the bottom there is a "Add item" button, which when clicked: \
						if the form contains errors - displays them, \
						in the case of an empty form - it will show the message "Please add data", \
						if the form is without errors - it will calculate sum of items.';
		document.getElementById("invNameInputLabel").innerHTML = "<b>Enter or select item name: </b>";
		document.getElementById("invQtyInputLabel").innerHTML = "<b>Enter or choose item quantity: </b>";
		document.getElementById("invPriceInputLabel").innerHTML = "<b>Enter item price: </b>";
		document.getElementById("invoiceVatDsc").innerHTML = "Select VAT % ";
		document.getElementById("submitForm").value = "Add item";
		//chess part
		document.getElementById("show3").innerHTML = "Show \\ Hide";	
		document.getElementById("chessHeader").innerHTML = "<b>Chess (simple)</b>";
		document.getElementById("chessHeaderH").innerHTML = "Chess (simple)";
		document.getElementById("chessP").innerHTML = "It's not a classic chess game. Program is to choose at random one of the chess piece (except the pawn) and place it at the random spot on the board.\
					After placing any piece (except first one) check all present pieces move ranges and see if any can reach other piece.\
					If so Give that pieces position and quit program. App made for use FACTORY (with class hierarhy) + SINGLETON pattern in code.";
		document.getElementById("chessButton").innerHTML = "Add figure";
		document.getElementById("resetBtnChess").innerHTML = "Reset";		
		//ball_1 part
		document.getElementById("show4").innerHTML = "Show \\ Hide";
		document.getElementById("ball_1Header").innerHTML = "<b>Ball bouncy simulator v.1.</b>";
		document.getElementById("ball_1HeaderH").innerHTML = "Ball bouncy simulator v.1.";
		document.getElementById("ball_1P").innerHTML = 
			'The program is to show how the ball would travel and bounce against the walls. \
			"?" blocks change the direction of the ball to random. \
			The program is to end when object comes back to original position. \
			Ball v.1 version based on images.'
		// start, reset, time
		
		//ball_2 part
		document.getElementById("show5").innerHTML = "Show \\ Hide";
		document.getElementById("ball_2Header").innerHTML = "<b>Ball bouncy simulator v.2.</b>";
		document.getElementById("ball_2HeaderH").innerHTML = "Ball bouncy simulator v.2.";
		document.getElementById("ball_2P").innerHTML = 
			'Like a v.1 the program is to show how the ball would travel and bounce against the walls. \
			"?" blocks change the direction of the ball to random. \
			The program is to end when object comes back to original position. \
			Ball v.2 version based on Webdings font.'
		// start, reset, time		  
				 
		//GOL part
		document.getElementById("show6").innerHTML = "Show \\ Hide";
		document.getElementById("golHeader").innerHTML = "<b>Game of life</b>";
		document.getElementById("golHeaderH").innerHTML = "Game of life";
		document.getElementById("golP").innerHTML = "The game of life - one of the first and most famous examples of a cellular automaton, invented in 1970 by the British mathematician John Conway. \
					The game is played on a board divided into square cells. Each cell has eight" + ' "neighbors" ' + "(the so-called Moore's neighborhood), \
					i.e. cells adjacent to it with sides and corners. Each cell can be in one of two states: it can be either" + ' "alive" (on) or "dead". \
					Cell states change over time. The state of all cells in one unit of time is used to calculate the state of all cells in the next unit. \
					After the calculation, all cells change their state at exactly the same time. The state of a cell depends only on the number of its living neighbors. \
					There are no players in the game in the literal sense of the word. Human participation comes down to establishing the initial state of cells. \
					A dead cell that has exactly 3 living neighbors becomes alive in the next unit of time (is born). A living cell with 2 or 3 living neighbors remains alive, \
					and with a different number of neighbors it dies (from "loneliness" or "crowding"). More information: <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank">wikipedia.org</a>'
		document.getElementById("p_red").innerHTML = "You can edit the board by clicking on the fields and than check the new result.";
		document.getElementById("resetGolBtn").innerHTML = "Reset";
		document.getElementById("randomGol").innerHTML = "Random cells";
		document.getElementById("clearGol").innerHTML = "Clear cells";
	};
  };
};