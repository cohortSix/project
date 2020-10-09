/*
1) First accepted that there is an error with the JS file.
2) Checked the structure of the file and formatted it with prettier.
3) Used the mini panel at the top right which indicated the line of code that had issues, and was able to remove the qoutes on.
4) Used and started running small chunks of code to identify where the errors  were like changing Car to car.

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
  car = new car();
  car.funcX();
};
var car = function () {
  this.brand = 'volvo';
  this.color = 'red';
  this.funcX = function () {
    this.funcY();
  };

  this.funcY = function () {
    this.funcZ();
  };

  this.funcZ = function () {
    console.trace('trace', 'car');
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
  this.brand = 'volvo';
  this.color = 'red';
  this.funcX = function () {
    this.funcY();
  };
  this.funcY = function () {
    this.funcZ();
  };
  this.funcZ = function () {
    console.trace('trace', 'car');
  };
};
func1();
