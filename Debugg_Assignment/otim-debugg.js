/**
 * Debugging exercise of 9/10/2020.
 * Step one I read through the file from top to bottom to see what the code is doing.
 * Step two I installed eslint and specified the coding standard I want to use.
 * Step three I corrected the errors returned by ESLint.
 * Step four I ran the code with the help of Chrome console to detect more errors and bugs.
*/
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
	//Uncaught ReferenceError: Ca is not defined so I changed it to car
	car = new Car();
	car.funcX();
}

var Car = function() {
	this.brand = "volvo";
	this.color = "red";
	this.funcX = function() {
		this.funcY();
	}

	this.funcY = function() {
		this.funcZ();
	}

	this.funcZ = function() {
		/**
		 *The console trace is used to get a quick and easy stack trace to better *understand my code execution flow. 
		 *In my output after running the code in the vscode terminal, I get file names *and line numbers which one can click on to navigate to the source.
		*/
		console.trace("trace car")
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
var Car = function() {
	this.brand = "volvo";
	this.color = "red";
	this.funcX = function() {
		this.funcY();
	}
	this.funcY = function() {
		this.funcZ();
	}
 	this.funcZ = function() {
		console.trace("trace car")
	}
} 
func1();
