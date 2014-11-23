"use strict";

window.onload = function(){
	var count = 0;
	var lastNumber = 0;
	var biggestNumber = 0;
	var secondBiggestNumber = 0;
	

	var secondLargest = function(str){
		var submittedNumber = +str;
		while (count < 9){
			if (submittedNumber > biggestNumber) {
				secondBiggestNumber = biggestNumber;
				biggestNumber = submittedNumber;
			}
			else {
				secondBiggestNumber = (lastNumber > secondBiggestNumber) ? lastNumber : secondBiggestNumber;
				lastNumber = submittedNumber;
			}
			count += 1;
			return [false, "Mata in " + (10 - count) + " nummer till."];
		}
		return [true, "Det näst största numret är: " + secondBiggestNumber];
	};
	
	var p = document.querySelector("#value");
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	submit.addEventListener("click", function(e){
		e.preventDefault(); 
			var answer = secondLargest(input.value); 
			p.innerHTML = answer[1];
			
			if(answer[0] === true){
			submit.disabled = true;
		}
	});
};