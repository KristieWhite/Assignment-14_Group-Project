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
            description: obj.description,
            vegan: obj.vegan,
            spicy: obj.spicy,
            favorite: obj.favorite
        };
    });

    var entreePull = { "entreeItem": entreeItem};

    var entreeTemplate = $("#entreeTemplate").text();
    var entreeHTML = Mustache.render(entreeTemplate, entreePull);
    $("#entreeProducts").html(entreeHTML);



    var gamesItem = menu.games.map(function(obj){
        return{
            name:obj.item,
            price:obj.price,
            description:obj.description,
            rating:obj.rating,
            platform:obj.platform
        };
    });

    var gamesPull = { "gamesItem": gamesItem};

    var gamesTemplate = $("#gamesTemplate").text();
    var gamesHTML = Mustache.render(gamesTemplate,gamesPull);
    $("#gamesProducts").html(gamesHTML);


    }); //this is where the first ajax ends

    var news = 'https://json-data.herokuapp.com/restaurant/news/1';

    $.ajax({
        url: news,
        method: 'get',
        dataType: 'json'
    }).then(function(newsItem) {

        var newsPull = {'newsItem': newsItem};

        var newsTemplate = $("#newsTemplate").text();

        var newsHTML = Mustache.render(newsTemplate, newsPull);

        $("#newsProducts").html(newsHTML);

    });

    var special = "https://json-data.herokuapp.com/restaurant/special/1";

    $.ajax({
        url: special,
        method: 'get',
        dataType: 'json'
    }).then(function(specialItem){
        var specialPull = {
            'specialItem': specialItem
        };
        var specialTemplate = $("#specialTemplate").text();
        var specialHTML = Mustache.render(specialTemplate, specialPull);
        $("#specialProducts").html(specialHTML);

    });

});








