function getAndInsertData(url, data = {}) {
    // Значения по умолчанию обозначены знаком *
    fetch(url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'no-cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
        })
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                // Examine the text in the response  
                response.json().then(function(data) {
                    console.log(data);
                    insertData(data);
                    return (data);
                });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
}
undefined;
//создание "Карточек"
function insertData(data) {
    // data = JSON.parse(data);
    console.log("insert data");
    var htmlElements = "";
    for (var i = 0; i < data.orders.length; i++) {
        console.log(data.orders[i]);
        htmlElements += ' <div class="card" id="card' + i + '">' +
            '<div class="card-header" id="card-header' + i + '"></div>' +
            ' <div class="card-body" id="card-body' + i + '">' +
            '<div id="list' + i + '"> </div>' +
            '<div class="item">' +
            '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">К рассмотрению</button>' +
            '</div>' +
            '</div>' +
            '</div>';

    }
    var container = document.getElementById("orders");
    container.innerHTML = htmlElements;
    for (var i = 0; i < data.orders.length; i++) {
        //вставка заголовка
        var cardHeader = document.getElementById("card-header" + i);
        var text = `Заказ №${i+1}`;
        cardHeader.insertAdjacentText("afterbegin", text)
            //вставка списка
        parseString(i, data.orders[i].stroka);
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

        li.innerHTML = ucFirst(array[i]).replace(/\./, "");
        ul.appendChild(li);
    }


    function ucFirst(str) {
        // только пустая строка в логическом контексте даст false
        if (!str) return str;
        return str[0].toUpperCase() + str.slice(1);
    }
}
getAndInsertData('resources/json.json');
// insertData(data);