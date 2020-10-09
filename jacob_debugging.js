/*
	I created an html file, linked this js file and used the console to debug,
	addressing issues by the line returned in the console.
*/

var car;
var func1 = function () {
	func2();
};

var func2 = function () {
	func4();
};
var func3 = function () {};

var func4 = function () {
	//The object is Car and the called object was Ca.
	//Missing an 'r'. Added it.
	car = new Car();
	car.funcX();
};

var Car = function () {
	/*
	The values assigned to be assigned to the instances of object Car,
	on invocation don't abide by the acceptable string syntax. 
	Made changes to them.
*/
	this.brand = "volvo";
	this.color = "red";
	this.funcX = function () {
		this.funcY();
	};

	this.funcY = function () {
		this.funcZ();
	};

	this.funcZ = function () {
		//The string argument passed to the trace function didn't abide by the acceptable string syntax rules.
		console.trace("trace car");
	};
};

func1();

var car;
var func1 = function () {
	func2();
};
var func2 = function () {
	func4();
};
var func3 = function () {};
var func4 = function () {
	car = new Car();
	car.funcX();
};
var Car = function () {
	/*
	The values assigned to be assigned to the instances of object Car,
	on invocation don't abide by the acceptable string syntax. 
	Made changes to them.
*/
	this.brand = "volvo";
	this.color = "red";
	this.funcX = function () {
		this.funcY();
	};
	this.funcY = function () {
		this.funcZ();
	};
	this.funcZ = function () {
		//The string argument passed to the trace function didn't abide by the acceptable string syntax rules.
		console.trace("trace car");
	};
};

func1();
