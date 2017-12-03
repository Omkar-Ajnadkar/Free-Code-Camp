if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude, function(json) {
			var degree = "C";
			country = json.sys.country;
			loc = json.name;
			$("#location").html(loc + ", "+ country);
			weatherMain = json.weather[0].main;	
			$("#weatherMain").html(weatherMain);
			descr = json.weather[0].description;
			$("#descr").html(descr);
			weatherIcon = json.weather[0].icon;	
			$("#weatherIcon").attr('src',weatherIcon);
			temp_c = json.main.temp;
			temp_f = temp_c *1.8 +32;
			$("#temp").html(temp_c+"&deg;C");
			humidity = json.main.humidity;	
			$("#humidity").html(humidity+"%");
			pressure = json.main.pressure;	
			$("#pressure").html(pressure+" mb");
			wind = json.wind.speed;	
			$("#wind").html(wind+" km/h");
	});
  });
}

function change1(){
	$("#temp").html(temp_c+"&deg;C");
}

function change2(){
	$("#temp").html(temp_f+"&deg;F");
}