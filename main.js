$(document).ready(function(){

    var menu = 'https://json-data.herokuapp.com/restaurant/menu/3?callback=jQuery21402782255432102829_1446066539210&_=1446066539211';

    $.ajax({
        url: menu,
        method: 'get',
        dataType: 'json'
        }).then (function (menu) {
        var beerItem = menu.Beer.map(function(obj){
        return {
            name: obj.item,
            style: obj.style,
            price: obj.price,
            content: obj.abv,
            description: obj.description,
            allergies: obj.allergies,
            favorite: obj.favorite,
            bottle: obj.bottle,
            draught: obj.draught
        };
    });

    var beerPull = {
              "beerItem": beerItem
            };
    var beerTemplate = $("#beerTemplate").text();
    var beerHTML = Mustache.render(beerTemplate, beerPull);
    $("#beerProducts").html(beerHTML);

    var entreeItem = menu.entrees.map(function(obj) {
        return {
            name: obj.item,
            price: obj.price,
            description: obj.description
        };
    });

    var entreePull = { "entreeItem": entreeItem};

    var entreeTemplate = $("#entreeTemplate").text();
    var entreeHTML = Mustache.render(entreeTemplate, entreePull);
    $("#entreeProducts").html(entreeHTML);




    });
});