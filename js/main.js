/*



#searchBar

https://en.wikipedia.org/w/api.php


Add images




https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=bear

https://en.wikipedia.org/w/api.php?action=query&list=search&prop=pageimages&format=json&srsearch=bear



'searchmatch' toggle for adding/removing class(es), highlighting the results on the page








*/







$(document).ready ( function() {

  	var wikiApiUrlBase = "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=";
  	var wikiApiUrlFinal;
  	var currentSearchBar;
  	var returnedResults = [];
  	var HTMLcontainer;

   $("#searchBar").on("change paste keyup", function() {
   	currentSearchBar = $("#searchBar").val(); 
   	
   	wikiApiUrlFinal = wikiApiUrlBase + currentSearchBar;

   	console.log(wikiApiUrlFinal);

   
   });

   function wikiResults(title, extract, image) {
   	this.title = title;
   	this.extract = extract;
   	this.image = image;
   }

   $("#searchButton").on("click", function() {

   	$.ajax({
   		type: "GET",
   		url: wikiApiUrlFinal,
   		crossDomain: true,
   		contentType: "application/json; charset=utf-8",
   		async: false,
   		dataType: "jsonp",
   		success: function (data) {

   			$('#HTMLcontainer').empty();
   			returnedResults = [""];

   			var wikiArr = data.query.search;

   			// data.query.pages

   			for (var result in wikiArr) {
   				returnedResults.push(new wikiResults(wikiArr[result].title, wikiArr[result].snippet, wikiArr[result].image));
   				HTMLcontainer = '<div id="articles" class="well"><a href="https://en.wikipedia.org/wiki/' + wikiArr[result].title + '"target="_blank"><h3>' + wikiArr[result].title + '</h3><p>' + wikiArr[result].snippet + '</p></a></div>';
   				$('#theHook').append(HTMLcontainer);
   			}



   			console.log(data);

   		}
   	});
   });

/*
   function DisplayDatWiki () {
   	$("#theHook").html();
   }
*/

  $("#toggleMySearch").click( function(){
    $(".searchmatch").css("background-color", "yellow")
  });

});



