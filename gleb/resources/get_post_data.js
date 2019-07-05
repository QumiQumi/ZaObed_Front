const url = "http://92.63.70.166/";

function getAndInsertData() {

    console.log("1");
    $.ajax({
        url: url + "orders",
        type: "GET",
        success: function(data) {
            console.log(data);
            insertData(data);
            return data;
        }
    });


}
//создание "Карточек"
function insertData(data) {
    // data = JSON.parse(data);

    var htmlElements = "";
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        htmlElements += ' <div class="card" id="card' + data[i].id + '">' +
            '<div class="card-header" id="card-header' + data[i].id + '"></div>' +
            ' <div class="card-body" id="card-body' + data[i].id + '">' +
            '<div id="list' + data[i].id + '"> </div>' +
            // '<div class="item">' +
            `<form class="item submit">` +
            `<input type="submit" id="${data[i].id}" class="btn btn-primary" value="Принять заказ"></input>` +
            // '<input type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">К рассмотрению</input>' +
            `</form>` +
            // '</div>' +
            '</div>' +
            '</div>';

    }
    var container = document.getElementById("orders");
    container.innerHTML = htmlElements;
    for (var i = 0; i < data.length; i++) {
        //вставка заголовка
        var cardHeader = document.getElementById("card-header" + data[i].id);
        var text = `Заказ №${data[i].id}`;
        cardHeader.insertAdjacentText("afterbegin", text)
            //вставка списка
        if (data[i].productList != null)
            parseString(i, data[i].productList);
    }
}

function parseString(id = "", string = "") {
    console.log('list' + id);
    console.log('stroka = ' + string);
    var array = string.split(/,\s/g);

    var div = document.getElementById('list' + id);
    var ul = document.createElement('ul');

    string.innerHTML = '';
    div.appendChild(ul);
    for (var i = 0, ln = array.length; i < ln; i++) {
        var li = document.createElement('li');

        li.innerHTML = ucFirst(array[i]).replace(/\\n/, "");
        ul.appendChild(li);
    }


    function ucFirst(str) {
        // только пустая строка в логическом контексте даст false
        if (!str) return str;
        return str[0].toUpperCase() + str.slice(1);
    }
}




// getAndInsertData('https://swapi.co/api/planets/3/');
$("document").ready(function() {
    getAndInsertData();


    $("form").each(function(i) {
        console.log(i);
    });
    
    /*on("submit", function(e) {
        e.preventDefault();
        console.log("submit");
        // var id = $("submit").id;
        // $.post(url + "reply/" + id, {}, function(data, status) {
        //     console.log(status);
        // });
        // getAndInsertData();

    });*/

});
// insertData(data)