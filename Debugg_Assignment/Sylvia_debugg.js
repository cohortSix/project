/*
--as i perused through the code I saw a few possible errors,
corrected them
--Then run the code in the console and 
I was alerted of a few other errors.

--so  I went directly to those lines seeming to cause errors
and made corrections
--I then run it again and it seemed okay, though I wasnt sure because
I am not familiar with the method "trace" and what results it returns

--So I temporarily replaced the method "trace" with the method "log" 
and it was running fine. So I realized it was okay.

*/
var car;
var func1 = function () {
  func2();
};

var func2 = function () {
  func4();
};
var func3 = function () {};

var func4 = function () {
  car = new Car();
  car.funcX();
};
var Car = function () {
  this.brand = "volvo";
  this.color = "red";
  this.funcX = function () {
    this.funcY();
  };

  this.funcY = function () {
    this.funcZ();
  };

  this.funcZ = function () {
    console.trace("trace car");
  };
};
func1();
var car;
var func1 = function () {
  func2();
};
var func2 = function () {
  func4();
};
var func3 = function () {};
var func4 = function () {
  car = new Car();
  car.funcX();
};
var Car = function () {
  this.brand = "volvo";
  this.color = "red";
  this.funcX = function () {
    this.funcY();
  };
  this.funcY = function () {
    this.funcZ();
  };
  this.funcZ = function () {
    console.trace("trace car");
  };
};
func1();
