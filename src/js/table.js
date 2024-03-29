//copy of data
let dataTable = JSON.parse(JSON.stringify(data.response.data));
const noTableData = document.getElementById('noTableData');
const tableFilters = document.getElementById('tableFilters');
const selectPriotity = document.getElementById('selectPriotity');
const searchByDesc = document.getElementById('searchByDesc');

const sortByIdBtn = document.getElementById('sortById');
const sortByDateBtn = document.getElementById('sortByDate');

let sortAscDsc = true;
		
let filterDescVal = '';
let filterPriorVal = '';

function sortById(){
	sortAscDsc = !sortAscDsc;
	
	function compr( obj1, obj2 ) {
	if ( obj1.work_order_id < obj2.work_order_id ){
		return -1;
	};
	if ( obj1.work_order_id > obj2.work_order_id ){
		return 1;
	};
	return 0;
	};
	
	if(sortAscDsc===true){
		dataTable.sort(compr);
	};
	if(sortAscDsc===false){
		dataTable.sort(compr).reverse();
	};
	//update view
	loadData();
}
	
function sortByDate(){
	sortAscDsc = !sortAscDsc;
	
	function compr( obj1, obj2 ) {
	if ( obj1.received_date < obj2.received_date ){
		return -1;
	};
	if ( obj1.received_date > obj2.received_date ){
		return 1;
	};
	return 0;
	};

	if(sortAscDsc===false){
		dataTable.sort(compr);
	};
	if(sortAscDsc===true){
		dataTable.sort(compr).reverse();
	};
	loadData();
}
	
function filterPriority(value){
	if(value !== 'All'){filterPriorVal = value} else {filterPriorVal = ''};
	//main filter function
	transformData(filterDescVal, filterPriorVal);
	//update html info
	updateDescForTable();
	//update html
	loadData();
};
	
function filterDesc(value){
	filterDescVal = value;
	transformData(filterDescVal, filterPriorVal);
	updateDescForTable();
	loadData();
};
	
function transformData(filterDescVal, filterPriorVal){
	let tempData = JSON.parse(JSON.stringify(data.response.data));
	if(filterDescVal == ''){
		dataTable = tempData ;
	}else{
		//without white spaces
		//console.log(filterDescVal.toLowerCase().replace(/^\s+/, '').replace(/\s+$/, ''));
	tempData = tempData .filter((row) =>
	row.description.toLowerCase().replaceAll(/\s/g,'').includes(filterDescVal.toLowerCase().replaceAll(/\s/g,'')));
		dataTable = tempData ;
	};
	if(filterPriorVal){
	tempData = tempData .filter((row) =>
	row.priority.toLowerCase().includes(filterPriorVal.toLowerCase()));
		dataTable = tempData ;
	};
};
	
function updateDescForTable(){
	if(!filterDescVal && !filterPriorVal){
		noTableData.innerHTML="";
	} else {
		if(language=='en'){		
			noTableData.innerHTML=
				(filterDescVal ? "Data filtered by decription containing: " + filterDescVal+". " : "") +
				(filterPriorVal ? "Data filtered by priority: " + filterPriorVal+"." : "");
		} else {
			noTableData.innerHTML=
				(filterDescVal ? "Dane filtrowane po opisie zawierającym: " + filterDescVal+". " : "") +
				(filterPriorVal ? "Dane filtrowane po priorytecie: " + filterPriorVal+"." : "");
		}
	};
};
		
const resetData = () => { 
	tableContainer.innerHTML = '';
	tableFilters.setAttribute("style", "display: none");
	dataTable = JSON.parse(JSON.stringify(data.response.data));
	
	selectPriotity.value='All';
	filterPriorVal = '';
	searchByDesc.value='';
	filerDescVal = '';
	
	sortByIdBtn.setAttribute("style", "display: none");
	sortByDateBtn.setAttribute("style", "display: none");
	document.getElementById('loadBtn').setAttribute("style", "display: visible");
	document.getElementById('loadReset').setAttribute("style", "display: none");
	//document.getElementById('loadBtn').removetAttribute("style", "disabled");
};
  
const loadData = () => {
	tableFilters.setAttribute("style", "display: visible");
	//let tableRow = 0;
	let tableContainer = document.getElementById('tableContainer');
	tableContainer.innerHTML = '';
	// headers
		let headers = [];
		let trTable = document.createElement("tr");
		dataTable.forEach((element) => {
			Object.entries(element).forEach((e) => {
				headers.push(e[0]);
			});
			//unique headers
			headers = [...new Set(headers)];
		});
		
		headers.forEach((h) => {
			let header = document.createElement("th");
			header.setAttribute("style","border:1px solid; padding-inline:3px; background:lightgray");
			header.innerHTML = h;
			trTable.appendChild(header);
		});
		//add headers
		tableContainer.appendChild(trTable);	
	// data rows
		dataTable.forEach((indexTable) => {
			//tableRow++;
			let trTable = document.createElement("tr");
			Object.entries(indexTable).map((element) => {
				// value parameter to take values without header
				let value = 0;
				element.forEach((e) => {
					//console.log(element);
					if( value > 0 ){ 
						let tableElement = document.createElement("td");

						if(element[0] == 'description'){
							//console.log(element[1]);
							tableElement.setAttribute("style", "width:auto; white-space:normal; text-align:left");
						};

						if(typeof(e) === 'object' && e.length > 0){
							let tableManyElements = document.createElement("tr");
							tableManyElements.setAttribute("style", "display:flex; flex-direction:column");

							e.forEach((x) => {
								//console.log(e);
								//console.log(x);
								let xManyElements = document.createElement("td");
								//xManyElements.setAttribute("style", "border-collapse:collapse; border-spacing:0; border: none; border-bottom: 1px solid black");
								xManyElements.innerHTML = JSON.stringify(x).replace('{', '').replace('}', '').replace(',', ', ').replaceAll(':', ': ').replaceAll('"', '');
								//xManyElements.innerHTML = x;
								tableManyElements.appendChild(xManyElements);
							});

							trTable.appendChild(tableManyElements);
							value--
						} else {
						//if(e == ""){ console.log("empty"); e = "empty";};
						tableElement.innerHTML = e;
						trTable.appendChild(tableElement);
						value--;}
					} else { value++ };
				});
				
				tableContainer.appendChild(trTable);
			});
		});
	
	
	sortByIdBtn.setAttribute("style", "display: visible");
	sortByDateBtn.setAttribute("style", "display: visible");
	document.getElementById('loadBtn').setAttribute("style", "display: none");
	document.getElementById('loadReset').setAttribute("style", "display: visible");
};

loadData();