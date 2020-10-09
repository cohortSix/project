//I run the file and got an output of errors on the terminal 
//From these eslint error details, i was able to locate the lines of code which had issues
//For example, some errors were caused by the use of single quotes so i changed them to double quotes.
//Other errors were due to redifining variabes and functions so i fixed this by removing the duplicate definitions
//The final output was a return value from the Car() function and the result of the trace function/method
//I read about the trace method and realised that it helps us navigate to specific lines of our code
//var car;
var func1 = function() {
    func2();
};

var func2 = function() {
    func4();
};
var func3 = function() {};
func3();

var func4 = function() {
    //function Ca() is not defined
    //car = new Ca();
    //car.funcX();
};
var Car = function(brand, color) {
    //assigning variables to parameters
    this.brand = brand;
    this.color = color;
    this.funcX = function() {
        this.funcY();
    };

    this.funcY = function() {
        this.funcZ();
    };

    this.funcZ = function() {
        console.trace("trace car");
    };
};
func1();
//var car;
// var func1 = function() {
func2();
var car1 = new Car("volvo", "red");
console.log(car1);
car1.funcZ();
// };
// var func2 = function() {
//func4();
// };
//var func3 = function() {}.
// var func4 = function() {
// car = new Car();
// car.funcX();
// };
//The car function is already defined
// var Car = function() {
// this.brand = "volvo";
// this.color = "red";
// this.funcX = function() {
// this.funcY();
// };
// this.funcY = function() {
// this.funcZ();
// };
// this.funcZ = function() {
// console.trace("trace car");
// };
// };
//func1();