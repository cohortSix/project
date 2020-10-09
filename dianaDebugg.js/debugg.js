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
	const car = new Car();
	car.funcX();
}
var Car = function(volvo,red) {
	this.brand = volvo,
	this.color = red;
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
var Car = function(volvo,red) {
	this.brand = volvo;
	this.color = red;
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
/*Run the terminal terminal to identify the line
 that had problems rectifed it and re-run the code 
 to ensure it is working*/