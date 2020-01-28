/*


updates


1 - variable name apiurl should be renamed apiUrl
2 - you could refactor all jquery selectors and assign them to variables, so jquery doesn't have to lookup the element on call, rather you look them all up initially
3 - You could wrap your entire code in an iife so protect the global namespace
4 - you don't need to name your anonymous functions, alternatively you can define your functions at the bottom of the file, and just call the functions. This will leave your overall logic seperate from your implementation. Helps with readability
5 - Clean up some of the empty spacing
6 - Oh yea and 6. don't declare all the variables at the top of the file if neccessary. If they are to be used locally, declare them locally (function level). No need to be able to access the position variable in the fccCall function

*/

var position;
var coords;
var lat;
var long;
var celsius;
var fahrenheit;
var temperature;
var tempType = "Celsius";
var apiUrl;
var tempMarker = String.fromCharCode(176);
var weatherStatus;




$( document ).ready(function geoFunc(){

  if ("geolocation" in navigator ) {
    navigator.geolocation.getCurrentPosition((function(position) {

      lat = position.coords.latitude;
      long = position.coords.longitude;

      console.log(position.coords.latitude, position.coords.longitude);

      fccCall();

    }));
  } else {
    $("#notice").text("Geolocation is not supported by this browser.");
  }




  $("#temptoggle").click(function whatIsCelsius() {
    
    console.log(temperature);

    if ( tempType == "Celsius" ) {

      tempType = "Fahrenheit";
      temperature = fahrenheit;

      $("#temperature").text(temperature + " " + tempMarker + " " + tempType);
      $("#temp-type").text("Celsius");

    } else if ( tempType == "Fahrenheit") {

      tempType = "Celsius";
      temperature = celsius;

      $("#temperature").text(temperature + " " + tempMarker + " " + tempType);
      $("#temp-type").text("Fahrenheit");

    } else {
      console.log('error notice on temptoggle');
    }

  });


})




// 2 - api call
function fccCall() {

  apiUrl = "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + long;
  $.ajax({
    url: apiUrl, success: function (result) {
      $("#location").text(result.name + ", " + result.sys.country);

      celsius = Math.round(result.main.temp * 10) / 10;
      fahrenheit = celsius * 9 /5 + 32;
      temperature = celsius;

      $("#temperature").text(temperature + " " + tempMarker + " " + tempType);
      $("#status").text(result.weather[0].main);

      $("#wind").text(result.wind.speed + "mph, " + result.wind.deg + " degrees")

      $("#weathericon").attr("src", result.weather[0].icon);
      $("#weathericon").removeClass("hide");

    }
  });


}











