var mainDiv = document.querySelector(".mainDiv");
var quoteText = document.querySelector("#quoteText");
var quoteAuthor = document.querySelector("#quoteAuthor");
var buttonBack1 = document.querySelector(".buttonBack1");
var buttonBack2 = document.querySelector(".buttonBack2");
var quotePara = document.querySelector(".quotePara");


function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}

function changeColor(){
	var color = randomColor();
	mainDiv.style.background = color;
	buttonBack1.style.background = color;
	buttonBack2.style.background = color;
	quoteText.style.color = color;
	quoteAuthor.style.color = color;
	quotePara.style.color = color;
}
var html1 = "Don't think of it as failure. Think of it as time-released success.";
var html2 = "Robert Orben";

$(document).ready(function() {
	$(".buttonBack2").on("click", function(){
		changeColor();
		$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json) {
			html1 = JSON.stringify(json.quoteText);
			html2 = JSON.stringify(json.quoteAuthor);
			$("#quoteText").html(html1);
			$("#quoteAuthor").html(html2);
		});
	});
	$(".buttonBack1").on("click",function(){
    		$("a").attr('href', "https://twitter.com/intent/tweet?hashtags=quotes&text=" + html1 + " -"  + html2);
		});
});

