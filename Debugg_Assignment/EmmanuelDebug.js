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
// 		console.trace("trace car");
// 	};
// };

// func1();

/* 
1) Firstly, I run the terminal to check and confirmed that there were error which did not give the value of the function func1()
2) After, I fixed codes that had erros and typed the right code
2a) For instance I added 'r' to the object 'Ca" to conform with the variable "Car" indincated below
2b) Commented out all codes that have been reapeated
3) I then used  used  prettier to fix missing double quotes and eslint to  have the codes in the standardized format 
4) Finally, I ran the terminal again to check if all the errors  detected and corrected  are not there again so I can get the output value for the function func1()
*/


