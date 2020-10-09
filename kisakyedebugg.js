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
		console.log("trace car")
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
		console.log("trace car")
	}
} 
func1();

/**
 I first went through the code line by line and realised that some lines of code were higlighted 
 which meant that they had an error.
 
 I then opened my terminal and ran the code and after running it, i realised from the terminal that the properties
 of the objects were in single quotes, thus i put them into double quotes to correct the error.

 After this i again ran the code in the terminal and discovered that on line 13 the value new car was mispelled thus the terminal was
 showing that it was undefined so i had to re-spell it so as to correct the error.

 I again tried running the code and discovered that instead of using console.log to print out our output, console.trace
 was being used so i had to change line to console.log so as to print out the output.
 */