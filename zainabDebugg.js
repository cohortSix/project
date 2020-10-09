var car;
var func1 = function () {
  func2();
};

var func2 = function () {
  func4();
};
var func3 = function () {};

var func4 = function () {
  car = new car();
  car.funcX();
};
var car = function () {
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
  car = new car();
  car.funcX();
};
var car = function () {
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

//I used VS code and it underlined the values which had invalid characters surrounding the value.
//So I added double quotes
//I also used Prettier whcich helped me organise the code and add semicolons where necessary.
//The variable Car was used in many lines and that is wrong so I changed it to car.
//I noticed the above error by reading every statement.
//The debug console was empty therefore there are no problems.
