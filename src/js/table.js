  //copy of data
  let testData = JSON.parse(JSON.stringify(data.response.data));
  
  	//console.log(testData[0]);
	//console.log(Object.entries(testData[0])[0][0]); // (array[array_element])[object_element_number][0=key, 1=value]
	//console.log(Object.entries(testData[0])[0][1]);
	
	//console.log(Object.entries(testData[0]).length); //6
	//console.log(Object.entries(testData[0])); // //Object.entries(testData[0])[0-5]); array 6 elements
		//0 ['work_order_id', 1]
		//1 ['description', 'Create a connection to SQL database using Excel']
		//2 ['received_date', '2021-07-21 00:23:03']
		//3 ['assigned_to', Array(1)]
		//4 ['status', 'New']
		//5 ['priority', 'Low']
		
  let tableContainer = document.getElementById('tableContainer');
  
  const loadData = () => { 
	loadDataTest();
	//tableContainer.innerHTML = testData;
  };
  
  const resetData = () => { 
	console.log("reset data");
	tableContainer.innerHTML = '';
  };
  
  let tableElement;
  
  const loadDataTest = () => {
	let tableRow = 0;
	tableContainer.innerHTML = '';
		
		testData.map((indexTable) => {
		  tableRow++;
		  let trTable = document.createElement("tr");
		  //trTable.setAttribute("id", "tableRow"+tableRow);
		  //trTable.innerHTML = indexTable;
		  //trTable.setAttribute("style", "display: flex; flex-direction: row;"); // row/column
		  tableContainer.appendChild(trTable);
		  tableElement = '';
			//Object.entries(indexTable).forEach((e)=> {console.log(e)});
	
			Object.entries(indexTable).map((element) => {
			    
				let value = 0;
			
				//if (tableRow === 1 && value < 1) {
				  //tableElement = document.createElement("th");
				  //tableElement.innerHTML = element;
				  //trTable.appendChild(tableElement);
				//};
					
			    element.forEach((element) => {
					if( value > 0 ){ 
				      tableElement = document.createElement("td"); // table headers th, td
				      tableElement.innerHTML = element;
				      trTable.appendChild(tableElement);
					  value--;
				  } else { value++ };
			    });
			});
			
			    //element.forEach((element) => {
			      //let tableElement = document.createElement("td");
			      //tableElement.innerHTML = Object.entries(element)[0][1];
			      //let trTable = document.getElementById("tableRow"+tableRow);
			      //trTable.appendChild(tableElement);
			    //});
			  //};
		});
	};