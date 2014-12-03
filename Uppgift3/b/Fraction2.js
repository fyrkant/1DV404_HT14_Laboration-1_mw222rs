"use strict";
function Fraction(T, N){
    this._T = T;
    this._N = N;
    
    if (this._N === 0) {
        throw "Nämnaren kan inte vara 0 (noll).";
    }
    
    this.getNumerator = function(){
        return this._T;
    };
    
    this.getDenominator = function(){
        return this._N;
    };
}

function fractionPrototype(){
    this.isNegative = function(){
        if ((this._T / this._N) < 0) {
            return true;
        }
        else {
            return false;
        }
    };
    this.add = function(otherFraction){
        this._T = this._T + otherFraction.getNumerator();
        this._N = this._N + otherFraction.getDenominator();
    };
    this.multiply = function(otherFraction){
        this._T = this._T * otherFraction.getNumerator();
        this._N= this._N * otherFraction.getDenominator();
    };
    this.isEqualTo = function(otherFraction) {
        if ((this._T / this._N) === (otherFraction.getNumerator() / otherFraction.getDenominator())) {
            return true;
        }
        else {
            return false;
        }
    };
    this.toString = function(){
            return this._T + " / " + this._N;
    };
    
}

Fraction.prototype = new fractionPrototype();


var myFraction = new Fraction(8, 4);
var otherFraction = new Fraction(4, 2);
console.log(myFraction);
console.log(otherFraction);
console.log("isNegative: " + myFraction.isNegative());
console.log("getNumerator: " + myFraction.getNumerator());
console.log("getDenominator: " + myFraction.getDenominator());
console.log("toString: " + myFraction.toString());
console.log("isEqualTo: " + myFraction.isEqualTo(otherFraction));
myFraction.multiply(otherFraction);
console.log(myFraction);