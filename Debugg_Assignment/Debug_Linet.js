var car;
var func1 = function() {
	func2();
}

var func2 = function() {
	func4();
}
var func3 = function() {
}
//There was an error with the function name 'Car'(letter was missing)
var func4 = function() {
	car = new Car();
	car.funcX();
}
var Car = function(volvo,red) {
   //parameters volvo and red were not initialized in the "function Car" 
    this.brand = volvo;
	this.color = red;
	this.funcX = function() {
		this.funcY();
	}

	this.funcY = function() {
		this.funcZ();
	}

	this.funcZ = function() {
    //The execution command had an error within it  'console.trace' and'trace car'
        console.log(Car);
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
    //There was an error with the function name 'Car'(letter was missing)
    car = new Car();
	car.funcX();
}
var Car = function(volvo,red) {
    //parameters volvo and red were not initialized in the "function Car"
    this.brand = volvo;
	this.color = red;
	this.funcX = function() {
		this.funcY();
	}
	this.funcY = function() {
		this.funcZ();
	}
 	this.funcZ = function() {
        //The execution command had an error within it  'console.trace' and'trace car'
        console.log( Car);
	}
} 
func1();