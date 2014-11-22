"use strict";

window.onload = function(){

	var aCounter = function(str){
	    var capital = 0;
	    var lowercase = 0;
		
		if (str === "") {
			throw new Error("Oj här gick nått fel! Glömde du att skriva något?");
		}
		else {
			
			var arrayed = str.split("");
			
			var mapArrayed = arrayed.map(function(item, index, array){
				
				if (item === "A") {
					capital += 1;
				}
				if (item === "a") {
					lowercase += 1;
				}
				
				// return (item === item.toUpperCase()) ? item.toLowerCase() : item.toUpperCase();
			});
			
			return "Antal A: " + capital + ", antal a: " + lowercase;
		}
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