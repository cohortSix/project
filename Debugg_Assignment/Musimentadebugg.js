// I have accepted that their is an error in this code .
// Since this is a logical error, am using a step by step method to analyse the code .
// I have checked the flow of the code to see if its matching with what am seeing by checking on methods, parentheses , varriable declaration .
// I have also looked at how the method and properties have been assigned in the code.
// I have used prettier to organise the code .
// I iniatialised Eslint and its showing me the red lines on some pieces of code .
// I also used the funnel on my top right corner to find the errors in the code .


var car;
var func1 = function() {
	func2();
}

var func2 = function() {
	func4();
}
var func3 = function() {
}

var func4 = function() {
	car = new Car();
	car.funcX();
}
var Car = function(volvo,red) {
	this.brand = volvo;
	this.color = red;
	this.funcX = function() {
		this.funcY();
	}

	this.funcY = function() {
		this.funcZ();
	}

	this.funcZ = function() {
		console.log( Car)
	}
}
func1();
var car; 
var func1 = function() {
	func2();
} 
var func2 = function() {
	func4();
}
var func3 = function() {
} 
var func4 = function() {
	car = new Car();
	car.funcX();
}
var Car = function(volvo,red) {
	this.brand = volvo;
	this.color = red;
	this.funcX = function() {
		this.funcY();
	}
	this.funcY = function() {
		this.funcZ();
	}
 	this.funcZ = function() {
		console.log(Car)
	}
} 
func1();