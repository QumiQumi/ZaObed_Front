//https://learn.javascript.ru/searching-elements-dom
//получаем различные элементы на страницы и записываем их в переменные
//получить можно по id, классу, тегу, внутри родителя всю коллекцию или первый элемент
var btn1 = document.getElementById("btn1"); //getElementById поисе документа оп id
var btn2 = document.getElementById("btn2");

var objOrder = {}; //будем хранить список заказа 
/*var main = document.getElementById("main");
var myList = document.getElementById("list");
var ul = document.getElementsByTagName("ul"); //поиск всех элементов по тегу
var story = myList.getElementsByClassName("item"); //поиск из содержания переменной myList элемента с классом item
var popup = document.getElementsByClassName("popup")[0]; //поиск элементов по классу popup, [0]-первый элемент из списка
var close = document.querySelector(".close"); //вернет первый элемент внутри документа с классом .close*/

//вывод данных в консоль
/*console.log(btn1);
console.log(btn2);
*/



/*//функция добавления элемента в список задач
function addItem(){
	var newLi = document.createElement("li");
	newLi.innerHTML = "Новая задача!"; //добавить в наш новый созданный пункт HTML код 
	newLi.className = "item"; //присвоить класс новому элементу такой же как и был у начального элемента
	myList.appendChild(newLi); //в наш список myList добавили дочерний элемент newLi
	popup.style.display = "none"; //скрыть окно popup при добавлении задачи
}

//функция удаления элемента из списка задач
function delItem(){
	myList.removeChild(story[0]); //удаление первого элемента из списка myList

	if(story.length == 0){ //story.length возвращает количество элементов списка
		//Свойство element.style возвращает объект, который дает доступ к стилю элемента на чтение и запись
		popup.style.display = "block"; //делаем элемент popup блочным
	}
}*/

//функция добавления (приема) заказа от клиента (ресторана)
function addOrder(){
	return fetch('https://swapi.co/api/starships/9/')
	  .then(function(response) {
	    /*alert(response.headers.get('Content-Type')); // application/json; charset=utf-8
	    alert(response.status); // 200*/

	    return response.json();
	   })
	  .then(function(user) {
	    alert(user.name); // iliakan
	    /*console.log(JSON.stringify(user));*/
	    console.log(JSON.parse(JSON.stringify(user)));
	  })
	  .catch(alert);
}

//Методы addEventListener и removeEventListener являются современным способом назначить или удалить обработчик
btn1.addEventListener("click", addOrder); // click - имя события (нажатие), addOrder - ссылка на функцию, кторую надо поставить обработчиком
/*btn2.addEventListener("click", delItem);*/
