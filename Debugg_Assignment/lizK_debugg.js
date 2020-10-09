/* 
DEBUGGING CLASS EXERSIZE
Start: 1:20pm - Completed: 4:20pm
1) Read through the code & I understood that its a series of functions that should print a string "trace car" when run.
2) Format the code with prettier to improve readability.
3) Initialize esLint, and opened the terminal to look through Problems found.
4) Edit all Strings to use doublequote. (as suggested by esLint standard settings)
5) Edit all indentation from 2 spaces to 1 space. (as suggested by esLint standard settings)
6) 'Ca' is not defined in func4 method, so I edited it to 'Car' to match flow of the code.
7) Unable to fix "linebreak error" & internet was down/slow, so I took a break for 1 hr
8) Reseach how to fix LF / CRLF linebreak error and found the CRLF button at bottom right of VS code & changed it to LF to fix the error.
9) Comment out repetition of code after calling func1(); to fix errors caused by the repetition of the Methods & Variables that were are already defined. 
10) Once no problems were detected, I run the code again and it printed "Trace: trace car"
*/

var car;
var func1 = function () {
	func2();
};
var func2 = function () {
	func4();
};
// eslint-disable-next-line no-unused-vars
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
		console.trace("trace car");
	};
};
func1();

// var car;
// var func1 = function () {
// 	func2();
// };
// var func2 = function () {
// 	func4();
// };
// var func3 = function () {};
// var func4 = function () {
// 	car = new Car();
// 	car.funcX();
// };
// var Car = function () {
// 	this.brand = "volvo";
// 	this.color = "red";
// 	this.funcX = function () {
// 		this.funcY();
// 	};
// 	this.funcY = function () {
// 		this.funcZ();
// 	};
// 	this.funcZ = function () {
// 		console.trace(car);
// 	};
// };
// func1();