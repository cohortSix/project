//Understand what the code does first.
//Run the file.
//Open the Debug console.
//Re arrange the code following functions called from top to down.
//Ca was undefined hence wrongly spelt and change it to Car.

var car;
var func1 = function () {
  func2();
};

var func2 = function () {
  func3();
};
var func3 = function () {
  var Car = function () {
    this.brand = "volvo";
    this.color = "red";
    this.funcX = function () {
      this.funcY();
    };
  };

  var func4 = function () {
    car = new Car();
    car.funcX();
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
  func1();
};
