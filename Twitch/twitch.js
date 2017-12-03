var urlPre = "https://wind-bow.glitch.me/twitch-api/";
var urlSuffix = "?callback=?";
var users = ["ESL_SC2", "monstercat", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"];
var logo = "";
var channelName = "";
var stream = "";
var status = true;
var url="";
var url2="";
// $(document).ready(function() {
// 	$("#mainInfo").html("");
// });

// function stramCheck(channel){
// 	$.getJSON(url2, function check(data) {
// 	    if(data.stream === null) {
// 	    	status = false;
// 	    }else {
// 	        status = true;
// 	    }
// 	    return status;
// 	});
// } 

users.forEach(function(channel){
	var url1 = urlPre + "channels/" + channel + urlSuffix;
	$.getJSON(url1, function(json) {
		url2 = urlPre + "streams/" + channel + urlSuffix;
		// status = stramCheck(channel);
		$.getJSON(url2, function(data) {
		    if(data.stream === null) {
		    	status = false;
		    }else {
		        status = true;
		    }
		});
		// if (status === true)
			stream = JSON.stringify(json.status).replace(/\"/g, "");
		// else
		// 	stream = "Not Streaming";
		channelName = JSON.stringify(json.display_name).replace(/\"/g, "");
		url = JSON.stringify(json.url);
		logo = JSON.stringify(json.logo);
		
	    var htmlResult = "<div class=\"w3-card w3-hover-shadow w3-animate-zoom\"><div class=\"w3-container w3-cell\"><img class=\"channelLogo w3-round w3-hover-sepia\"src="+ logo + "></div><div class=\"w3-container w3-cell midDiv\"><a href="+ url +"><h5 class=\"resultTitle w3-container w3-cell\">"+ channelName+"</h5></a><p class=\"resultDescr\"><b>"+ stream +"</b></p></div><div class=\"w3-container w3-cell\"><i class=\"fa fa-play\" aria-hidden=\"true\"></i></div></div>";
		$("#mainInfo").append(htmlResult);
	});	
});



