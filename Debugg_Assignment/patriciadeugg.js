//Use the debugging tools learnt to debugg this file.

//1.Used Eslint to identify all the synatx errors including quotes on strings and camelcase on variable names.
//2. Changed the method from "trace" to "log" in the console
//3.Removed all the redudant code to optimise it
//4.Renamed function calls to suit remaining functions

var car;

var func1 = function() {
	car = new Car();
	car.funcX();
}
var Car = function() {
	this.brand = 'volvo'; 
	this.color = 'red';  
	this.funcX = function() {
		
		console.log('trace car')
	}
}
func1();









