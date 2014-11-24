"use strict";

window.onload = function(){

	var palindromeTest = function(str){
	    
	    var reversed = str.split("").reverse().join('');

		return (reversed === str) ? str + " är en palindrom" : str + " är inte en palindrom";
		
	};
	
	var p = document.querySelector("#value");
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	submit.addEventListener("click", function(e){
		e.preventDefault(); 
			var answer = palindromeTest(input.value); 
			p.innerHTML = answer;
	});
};