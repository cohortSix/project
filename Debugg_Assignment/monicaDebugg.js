

/*
Identify and find the location of the errors.
I used prettier to format code and make it easy to read.
Vscode, terminal and Eslint pointed to some areas in the code so i looked at them.
I started to analyse the code to try and understand waht and what is doing.
I discovered the code is written 2 times which makes the same variables and functions be declared 2 times.
To debug i have commented and deleted parts the are not necessary to running of the code because they are repeated
Checked to see if the code debugging worked.
*/
var car;

var func1 = function () {
	func2();
};

var func2 = function () {
	func4();
};
// Using ESLint i have discovered func3() is assigned but is not used
// var func3 = function () {};

var func4 = function () {
	// new keyword is used to call function Ca() but it is not defined anywhere but instead Car() is
	car = new Car();
	car.funcX();
};
// function is declared without parameters and car is assigned but value is not used
var Car = function (volvo,red) {
	
	// Adding property of an object to a function, the name of property was not correct
	this.brand = volvo;
	this.color = red;
	
	this.funcX = function () {
		this.funcY();
	};

	this.funcY = function () {
		this.funcZ();
	};
	
	this.funcZ = function () {
		//String ‘trace car’is not defined and assigned anywhere and it begins with an invalid character
		console.trace("‘trace car’");
	};
};
func1();



