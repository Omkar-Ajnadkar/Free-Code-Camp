var baseUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=";
var urlSuffix = "&limit=10&namespace=0&format=json&origin=*";
var wikipediaObject = function(title,descr,link){
	this.title = title;
	this.description = descr;
	this.link = link;
}
var results = [];

$(document).ready(function() {
	$("#searchBtn").on("click", function(){
		var userInput = document.querySelector("#searchBox").value;
		$("#searchResults").html("");
		$.getJSON(baseUrl+userInput+urlSuffix, function(json) {
			var i =0;
			while (i<10){
				title = JSON.stringify(json[1][i]).replace(/\"/g, "");
				link = JSON.stringify(json[3][i]);
				description = JSON.stringify(json[2][i]).replace(/\"/g, "");
				var htmlResult = "<div class=\"w3-card w3-hover-shadow w3-animate-zoom\"><a href="+ link +"><h5 class=\"resultTitle\">"+ title +"</h5></a><p class=\"resultDescr\">"+ description +"</p></div>";
				$("#searchResults").append(htmlResult);
				i++;
			}
		});
	});
});