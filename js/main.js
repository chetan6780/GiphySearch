// 1. Grab the input -----------------------------------------------------------------

var gobtn = document.querySelector(".js-go");
var inpBox = document.querySelector(".js-userinput");

// if user press Enter object 
inpBox.addEventListener('keyup', (e) => {
    if (e.which === 13) {
        search();
    }
});

// if user press find button 
gobtn.addEventListener('click', search);

function search() {
    var input = document.querySelector("input").value;
    input = input.replaceAll(" ", "+");
    dataAPI(input);
}

// 2. Get data from API --------------------------------------------------------------
function dataAPI(str) {
    var apikey = "FOB6MagSfiBwIFULSr0pA9y7o8A7ThLF"

    var url = "https://api.giphy.com/v1/gifs/search?api_key=" + apikey + "&q=" + str + "&limit=10";

    // AJAX Request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', url);
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener('load', (e) => {
        var data = e.target.response;
        pushToDOM(data);
    });
}

// 3. show the GIFs ------------------------------------------------------------------

function pushToDOM(input) {
    var response = JSON.parse(input);
    var imageUrls = response.data;
    var container = document.querySelector(".js-container");

    clear(container);

    imageUrls.forEach((image) => {
        var src = image.images.fixed_height.url;
        container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";
    });
}

function clear(item) {
    item.innerHTML = "";
}

// END -----------------------------------------------------------------------------

/*
my api key:
var url = "https://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=FOB6MagSfiBwIFULSr0pA9y7o8A7ThLF";

for the TV
using the current GIPHY Api:

var apikey = "dc6zaTOxFJmzC"

https://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC

Or by using this special GIF API:
tv.giphy.com/v1/gifs/tv?api_key=CW27AW0nlp5u0&tag=giphytv
 */