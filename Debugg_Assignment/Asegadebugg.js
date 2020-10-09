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
		console.trace(Car)
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
		console.trace(Car)
	}
} 
func1();

//Steps i used to troubleshoot JS Errors

//1. Run Debugg that returned runtime errors via the debug console
//2. Did a code review to check syntax for errors
//3. For the errors i didn't understand i searched google.com to identify and get more detailed explanations
//4. Fixed the errors and run code again