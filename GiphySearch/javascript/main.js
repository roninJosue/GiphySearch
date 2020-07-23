/* 1. Grab the input value */


document.querySelector(".js-go").addEventListener('click',function () {

  var input = document.querySelector("input").value;
  console.log(input)
  pushToDOM(input);


});

document.querySelector(".js-userinput").addEventListener('click',function (e) {

  console.log(e);

  var input = document.querySelector("input").value;
  console.log(input)
  //if teh key enter is pressed
  if (e.which === 13) {
    pushToDOM(input);
  }


});

/* 2. do the data stuff with the API */

var url = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";

// AJAX Request

var GiphyAjaxCall = new XMLHttpRequest();
GiphyAjaxCall.open('GET',url);
GiphyAjaxCall.send();

GiphyAjaxCall.addEventListener('load',function (e) {

  var data = e.target.response;
  pushToDOM(data);
  console.log(data);

});




/* 3. Show me the GIFs */
function pushToDOM(input) {

  var response = JSON.parse(input);

  var imageURL = response.data[0].images.fixed_height.url;
  console.log(imageURL);

  var container = document.querySelector("js-container");
  container.innerHTML = "<img src=\"https://media3.giphy.com/media/Z1kpfgtHmpWHS/200.gif\">";

}
