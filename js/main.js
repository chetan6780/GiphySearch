// 1. Grab the input -----------------------------------------------------------------
document.querySelector(".js-go").addEventListener('click', () => {
    var input = document.querySelector("input").value;
    input = input.replaceAll(" ", "+");
    // console.log(input);
    dataAPI(input);
    // pushToDOM(input);
});

// when user press Enter object will be passes to dataAPI function which get all data
document.querySelector(".js-userinput").addEventListener('keyup', (e) => {
    var input = document.querySelector("input").value;
    if (e.which === 13) {
        input = input.replaceAll(" ", "+");
        // console.log(input);
        dataAPI(input);
        // pushToDOM(input);
    }
});

// 2. Get data from API --------------------------------------------------------------
function dataAPI(str) {
    var url = "https://api.giphy.com/v1/gifs/search?q=\"" + str + "\"&api_key=dc6zaTOxFJmzC";

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
    // console.log(input);
    var response = JSON.parse(input);
    var imageUrls = response.data;
    var container = document.querySelector(".js-container");

    // imageUrls.forEach((image) => {
    //     var src = image.images.fixed_height.url;
    //     container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";
    // });

    for (let i = 0; i < 10; i++) {
        var src = imageUrls[i].images.fixed_height.url;
        container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";
    }
}

// END -----------------------------------------------------------------------------
/*
my api key:
var url = "https://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=FOB6MagSfiBwIFULSr0pA9y7o8A7ThLF";

for the TV
using the current GIPHY Api:
https://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC

Or by using this special GIF API:
tv.giphy.com/v1/gifs/tv?api_key=CW27AW0nlp5u0&tag=giphytv
 */