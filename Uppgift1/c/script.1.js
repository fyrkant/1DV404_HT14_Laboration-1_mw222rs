"use strict";

window.onload = function(){
	
	var secondLargest = function(str){
		
		var submittedString = str;
		var arrayed = submittedString.split(" ");
		var sortedArray = arrayed.sort(compare);
	
		function compare(value1, value2){
			return value1 - value2;
		}
		
		return "Det näst största numret är: " + sortedArray[sortedArray.length-2];
	
	};
	
	var p = document.querySelector("#value");
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	submit.addEventListener("click", function(e){
		e.preventDefault(); 
			var answer = secondLargest(input.value); 
			p.innerHTML = answer;
			
			
		
			
			
	});
};