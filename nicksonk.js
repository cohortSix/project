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
	car = new Ca();
	car.funcX();
}
var Car = function() {
	this.brand = ‘volvo’;
	this.color = ‘red’;
	this.funcX = function() {
		this.funcY();
	}

	this.funcY = function() {
		this.funcZ();
	}

	this.funcZ = function() {
		console.trace(‘trace car’)
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
	this.brand = ‘volvo’;
	this.color = ‘red’;
	this.funcX = function() {
		this.funcY();
	}
	this.funcY = function() {
		this.funcZ();
	}
 	this.funcZ = function() {
	
		console.trace(‘trace car’)
	}
} 
func1();
// I first took Rino's approach and detected errors by the red linings.
// But then I ran the code to be sure that there are errors which was proved true by my console.
// By the help of Eslint I was able to see the particular lines with errors.
// I also applied a breakpoint to the file and the debug console indicated one of the errors.