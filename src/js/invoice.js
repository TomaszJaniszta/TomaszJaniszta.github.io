const invoiceQty = document.getElementById('invoiceQty');

let invoiceItemsArray = [
	{id: 1, name:'Bananas', quantity:1, price:4.00, vat:0.23},
	{id: 2, name:'Tomatoes', quantity:5, price:4.85, vat:0.23},
	{id: 3, name:'Cherries', quantity:10, price:10.01, vat:0.23},
];

document.getElementById("submitForm").addEventListener("click", function(event){
  event.preventDefault()
});

const updateInvoiceView = () => {
	let invoiceItems = document.getElementById("invoiceItems");
	invoiceItems.innerHTML = '';
	let counter = 0;
	invoiceItemsArray.forEach( e => {
		let invPosition = document.createElement('tr');
		let description = document.createElement('td');
		description.setAttribute("align", "left");
		description.innerHTML = `Name: ${e.name} (id: ${e.id}), quantity: ${e.quantity} , price: ${e.price}, VAT: ${e.vat*100}%`;
		invPosition.appendChild(description);
		
		let positionValue = document.createElement('td');
		positionValue.setAttribute("align", "right");
		positionValue.innerHTML = `Value net: ${(e.quantity*e.price).toFixed(2)} + VAT: ${(e.quantity*e.price*e.vat).toFixed(2)} = ${(e.quantity*e.price*e.vat+e.quantity*e.price).toFixed(2)}`;
		invPosition.appendChild(positionValue);
				
		let buttonX = document.createElement('button');
		buttonX.innerHTML = 'X';
		buttonX.addEventListener('click', () => {removeInvItem(invPosition, e.id)});
		invPosition.appendChild(buttonX);
		
		invoiceItems.appendChild(invPosition);
	});
	//TOTALS
	let totalValue = document.createElement('tr');
		totalValue.appendChild(document.createElement('td'));
		
		let sumNet=0;
		let sumVat=0;

		invoiceItemsArray.forEach(i => {
			let value = i.quantity*i.price;
			sumNet = sumNet + value;
		});
		sumNet = sumNet.toFixed(2);
	
		invoiceItemsArray.forEach(i => {
			let value = i.quantity*i.price*i.vat;
			sumVat = sumVat + value;
		});
		sumVat = sumVat.toFixed(2);

		let totalNetVat = document.createElement('td');
		totalNetVat.setAttribute("align", "right");
		
		let sum=(Number(sumNet)+Number(sumVat)).toFixed(2);
		
		totalNetVat.innerHTML = `<b>Total: net=${sumNet}, VAT=${sumVat}, value=${sum}</b>`;
	totalValue.appendChild(totalNetVat);
	invoiceItems.appendChild(totalValue);
};

const addItem = (name, quantity, price, vat) => {
	let errorName;
	let errorQuantity;
	let errorPrice;
	
	if (name.length < 3 || name.length > 30){
		errorName = 'Invalid name length (3-30 characters allowed). '
	};
	
	quantity=Number(quantity);
	if (!(quantity > 0 && quantity < 101 && Number.isInteger(quantity))){
		errorQuantity = 'Invalid quantity (only integers 1-100 allowed). '
	};
	
	price=Number(price);
	if (!(price > 0 && price < 1000001 && Number.isInteger(price))){
		errorPrice = 'Invalid price (only integers 1-1000000 allowed). '
	};
	
	const popUpInvoiceOn = (text) => {
		let popUpInvoice = document.getElementById('popupInvoice');
		let buttonPopUpInvoice = document.createElement("button");
			buttonPopUpInvoice.setAttribute("type", "button");
			buttonPopUpInvoice.setAttribute("class", "btnX");
			buttonPopUpInvoice.setAttribute("id", "btnPopupInvoice");
			buttonPopUpInvoice.innerHTML = '&#10005';
			
			popUpInvoice.appendChild(buttonPopUpInvoice);
			popUpInvoice.appendChild(document.createElement("br"));
			popUpInvoice.appendChild(document.createElement("br"));
			
		let spanPopUp = document.createElement("div");
			spanPopUp.setAttribute("id", "spanPopup");
			spanPopUp.innerHTML = text;
			popUpInvoice.appendChild(spanPopUp);
			popUpInvoice.classList.toggle('active');
			
		btnPopupInvoice.onclick = function(){
			popUpInvoice.innerHTML = '';
			popUpInvoice.classList.remove('active');
		};
	};
	
	if(errorName || errorQuantity || errorPrice){
		let text = (errorName + " " + errorQuantity + " " + errorPrice).replaceAll('undefined','');
		popUpInvoiceOn(text);
	} else {
		//next id
		const newId = () => {
			if(invoiceItemsArray.length > 0){
				let itemIds = invoiceItemsArray.map(i => i.id);	
		    	let maxId = Math.max(...itemIds);
		    	let newId = maxId + 1;
				return newId } 
			else {
				return 1
			}
		};
		
		let object = {id: newId(), name:name, quantity:quantity, price:price, vat:vat};
		invoiceItemsArray.push(object);
	};
	
	updateInvoiceView();
	selectUpdate();
};

const removeInvItem = (item, id) => {
	//delete element in item array
	invoiceItemsArray = invoiceItemsArray.filter(item => item.id !== id);	
	//delete element html
	item.remove();
	updateInvoiceView();
	selectUpdate();
};

const selectUpdate = () => {
	let select = document.getElementById('invoiceNameSelect');
	select.innerHTML = '';
	
	const firstOption = () => {
		let option = document.createElement('option');
		option.innerHTML='Select item name: ';
		option.setAttribute('value', 'Select item name');
		option.setAttribute('selected', 'selected');
		select.appendChild(option);
	};

	if(invoiceItemsArray.length > 0){
		firstOption();
		let selectNames = invoiceItemsArray.map(i => i.name);
		//unique values
		selectNames = [...new Set(selectNames)];
		selectNames.forEach( e => {
			let option = document.createElement('option');
			option.innerHTML=e;
			option.value=e;
			select.appendChild(option);
		});
	} else {
		firstOption();
	};
};

const invSelectName = (value) => {
	//change name text field
	if(value !== 'Select item name'){
		document.getElementById("invoiceName").value = value;
	};
	//return to default value
	selectUpdate();
};

//first view
updateInvoiceView();