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
//removed quotations
var Car = function() {
	this.brand = volvo;
	this.color = red;
	this.funcX = function() {
		this.funcY();
	}

	this.funcY = function() {
		this.funcZ();
	}
	//removed quotations

	this.funcZ = function() {
		console.trace(tracecar)
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
	//Removed quotations.
	this.brand = volvo;
	//Removed quotations on value red.
	this.color = red;
	this.funcX = function() {
		this.funcY();
	}
	this.funcY = function() {
		this.funcZ();
	}
 	this.funcZ = function() {
		 //removed quotations and space on variable(tracecar)
		console.trace(tracecar)
	}
} 
func1();