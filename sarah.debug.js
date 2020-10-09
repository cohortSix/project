var car;
var func1 = function () {
  func2();
};

var func2 = function () {
  func4();
};
var func3 = function () {};

var func4 = function () {
  car = new Ca();
  car.funcX();
};
var Car = function () {
  this.brand = volvo;
  this.color = red;
  this.funcX = function () {
    this.funcY();
  };

  this.funcY = function () {
    this.funcZ();
  };

  this.funcZ = function () {
    //console.trace(‘trace car’)
    console.log("trace car");
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
  // this.brand = ‘volvo’;
  this.color = "volvo";
  // this.color = ‘red’;
  this.color = "red";
  this.funcX = function () {
    this.funcY();
  };
  this.funcY = function () {
    this.funcZ();
  };
  this.funcZ = function () {
    // console.trace(‘trace car’)
    console.log("trace car");
  };
};
func1();

// I first run the terminal and acknowledged the bugs
// I commented out the code that had bugs and typed the right code
//Tools used were prettier to organize my code and eslint
//I ran the terminal again to look out for error messages and make sure the code did not have bugs.


