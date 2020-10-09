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
		console.log( Car)
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
		console.log(Car)
	}
} 
func1();

// I first looked through the code to see if every word was spelt well then i realised that the variable car on line 13 was missing letter r.
// I then ran the code in the terminal to find out where the next errors were.
// I then realised that the parameters of the object properties on line 17 ,18,46 and 47 were in single quotes so i had to remove those single quotes.
// Then as i was going through the code i realised we had used trace to call data into the terminal instead of log
// The variable also inside the console was trace car with single quotes yet it aws supposed to be Car.
// The parameters (volvo and car) on line 16 and 45 were not initialised so i had to initialise them.
