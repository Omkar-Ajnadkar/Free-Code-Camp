var val = "";
var arr = [];
var arr1 = [];
var answer = 0;
$("#one").on("click", function(){
		$("#current").append("1");
		$("#complete").append("1");
		val = val + "1";
	});
$("#two").on("click", function(){
		$("#current").append("2");
		$("#complete").append("2");
		val = val + "2";
	});
$("#three").on("click", function(){
		$("#current").append("3");
		$("#complete").append("3");
		val = val + "3";
	});
$("#four").on("click", function(){
		$("#current").append("4");
		$("#complete").append("4");
		val = val + "4";
	});
$("#five").on("click", function(){
		$("#current").append("5");
		$("#complete").append("5");
		val = val + "5";
	});
$("#six").on("click", function(){
		$("#current").append("6");
		$("#complete").append("6");
		val = val + "6";
	});
$("#seven").on("click", function(){
		$("#current").append("7");
		$("#complete").append("7");
		val = val + "7";
	});
$("#eight").on("click", function(){
		$("#current").append("8");
		$("#complete").append("8");
		val = val + "8";
	});
$("#nine").on("click", function(){
		$("#current").append("9");
		$("#complete").append("9");
		val = val + "9";
	});
$("#zero").on("click", function(){
		$("#current").append("0");
		$("#complete").append("0");
		val = val + "0";
	});
$("#dec").on("click", function(){
		$("#current").append(".");
		$("#complete").append(".");
		val = val + ".";
	});
$("#plus").on("click", function(){
		$("#current").html("+");
		$("#complete").append("+");
		val = val + "+";
	});
$("#min").on("click", function(){
		$("#current").html("-");
		$("#complete").append("-");
		val = val + "-";
	});
$("#div").on("click", function(){
		$("#current").html("/");
		$("#complete").append("/");
		val = val + "/";
	});
$("#mul").on("click", function(){
		$("#current").html("*");
		$("#complete").append("*");
		val = val + "*";
	});
$("#equal").on("click", function(){
		console.log(val);
		arr = val.split("");
		console.log(arr);
		var i = 0;
		while(i < arr.length){
			if (arr[i]==="+" || arr[i]==="-" || arr[i]==="/" || arr[i]==="*"){
				arr[0,i-1].join("");
			}
			i = i + 1;
		}
		console.log(arr);
	});
console.log(val);

// var i = 0;
// while(i < arr.length){
// 	if (arr[i]==="+" || arr[i]==="-" || arr[i]==="/" || arr[i]==="*"){
// 		arr[:i-1].join();
// 	}
// 	i = i + 1;
// }
// console.log(arr);