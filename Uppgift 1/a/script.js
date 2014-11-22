"use strict";

window.onload = function(){

	var aCounter = function(str){
	    var capital = 0;
	    var lowercase = 0;
			
		var arrayed = str.split("");
		
		arrayed.map(function(item, index, array){
			
			if (item === "A") {
				capital += 1;
			}
			if (item === "a") {
				lowercase += 1;
			}
		});
		
		return "Antal A: " + capital + ", antal a: " + lowercase + ".";
	};
	
	var p = document.querySelector("#value");
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	submit.addEventListener("click", function(e){
		e.preventDefault(); 
			var answer = aCounter(input.value); 
			p.innerHTML = answer;
	});
};