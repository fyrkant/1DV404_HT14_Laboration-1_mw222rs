"use strict";

window.onload = function(){

	var countDigits = function(str){
	    var zeros = 0;
	    var odd = 0;
	    var even = 0;
			
		var arrayed = str.split("");
		
		var mapArrayed = arrayed.map(function(item, index, array){
			
			if (+item === 0) {
				zeros += 1;
			}
			else if (+item % 2 === 1) {
				odd += 1;
			}
			else if (+item % 2 === 0){
				even += 1;
			}
			// return (item === item.toUpperCase()) ? item.toLowerCase() : item.toUpperCase();
		});
		
		return "Nollor: " + zeros + " - Udda: " + odd + " - Jämna:" + even;
		
	};
	
	var p = document.querySelector("#value");
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	submit.addEventListener("click", function(e){
		e.preventDefault(); 
			var answer = countDigits(input.value); 
			p.innerHTML = answer;
	});
};