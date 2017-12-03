var breakTime = 5;
var sessionTime = 25;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

$("#decBreak").on("click", function(){
		if(breakTime > 0){
			breakTime = breakTime - 1;
		}
		$("#breakTime").html(breakTime);
	});
$("#incrBreak").on("click", function(){
		breakTime = breakTime + 1;
		$("#breakTime").html(breakTime);
	});
$("#decSession").on("click", function(){
		if(sessionTime > 0){
			sessionTime = sessionTime - 1;
		}
		$("#sessionTime").html(sessionTime);
		$(".timerValue").html(sessionTime + " : 00");
	});
$("#incrSession").on("click", function(){
		sessionTime = sessionTime + 1;
		$("#sessionTime").html(sessionTime);
		$(".timerValue").html(sessionTime + " : 00");
	});
$("#play").on("click", async function(){
		var minutes = sessionTime;
		var seconds = 00;
		var time = sessionTime * 60;
		while (time >= 0){
			if(seconds === 00){
				minutes = minutes -1;
				seconds = 59;
			}
			$(".timerValue").html(minutes + " : " + seconds);
			console.log(seconds);
			seconds = seconds - 1;
			await sleep(1000);
			time = time -1;
		}
	});
