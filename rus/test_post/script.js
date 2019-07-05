$("document").ready(function(){  //чтобы код выполнялся только после загрузки html страницы
	let time = new Date(); 
	let order = {
		id: "",
		price: "",
		status: "true",
		date: "21.06.2019",
	}

	let priceOrder = document.getElementById('price');

	year = String(time.getFullYear()),
	month = String((time.getMonth() + 1)), //только отсчет месяца начинается с нуля 
	day = String(time.getDate()),
	hour = String(time.getHours()),
	minute = String(time.getMinutes());
	var stringDate = year + '-'; 
	if(month.length < 2) //проверка на длину (чтобы добавить ноль вперед значения если что)
		stringDate = stringDate + '0' + month + '-';
	else 
		stringDate = stringDate + month + '-';

	if(day.length < 2) 
		stringDate = stringDate + '0' + day + ' ';
	else 
		stringDate = stringDate + day + ' ';

	if(hour.length < 2) 
		stringDate = stringDate + '0' + hour + ':';
	else 
		stringDate = stringDate + hour + ':';

	if(minute.length < 2) 
		stringDate = stringDate + '0' + minute;
	else 
		stringDate = stringDate + minute;

	//console.log(stringDate);
	order.date = stringDate;
	//order.price = priceOrder; 
	/*console.log(order.price);
	console.log(order.status);
	
	console.log(priceOrder); */

	$("#addPrice").submit(function(event) {
		event.preventDefault();
		var price = $(this).children("input[name='price']").val();
		console.log(price);
		order.price = price;
	});
	console.log(order); 
});
