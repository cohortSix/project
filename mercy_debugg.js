/*
Observed Code and noticed the following;
- On lines 17,18,28,46,47, and 55 had and invalid character being used. I used the debugging toil to fix that error.
Also used prettier to autocorrect and add terminations at the end of every statement of code that required it.
There was an issue with the console.log method instead of log, there was trace, I used the debugg tool to point that out.
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
	car = new Car();
	car.funcX();
};
var Car = function () {
	this.brand = "volvo";
	this.color = "red";
	this.funcX = function () {
		funcY();
	};

	funcY = function () {
		funcZ();
	};

	var funcZ = function () {
		console.log("trace car");
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
	this.brand = "volvo";
	this.color = "red";
	this.funcX = function () {
		this.funcY();
	};
	this.funcY = function () {
		this.funcZ();
	};
	this.funcZ = function () {
		console.log("trace car");
	};
};
func1();
