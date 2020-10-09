/*!. read through the file to identify first time errors
I installed eslint using the terminal
Corrected all problems seen
*/var car;
var func1 = function() {
	func2();
};

var func2 = function() {
	func4();
};
var func3 = function() {
};

var func4 = function() {
	car = new Car();
//Ca is an undefined variable, changed it to car.
	car.funcX();
};
//Corrected the capital letter on the variable name.
var car = function() {
	this.brand = "volvo";
	this.color = "red";
//Added double quotations for string.
	this.funcX = function() {
		this.funcY();
	};

	this.funcY = function() {
		this.funcZ();
	};

	this.funcZ = function() {
		console.trace("trace, car");
//Added double quotes for string.
	}
};
func1();
var car; 
var func1 = function() {
	func2();
};
var func2 = function() {
	func4();
};
var func3 = function() {
} ;
var func4 = function() {
	car = new car();
	car.funcX();
};
//Corrected uppercase variable name to lowercase.
var car = function() {
	this.brand = "volvo";
	this.color = "red";
//Added double quotations for strings.
	this.funcX = function() {
		this.funcY();
	};
	this.funcY = function() {
		this.funcZ();
	};
 	this.funcZ = function() {
		console.trace("trace car")

	};
};
func1();