/*Firstly, i acknowledge that there are errors in the code. 
Esecially by just looking at the file it is red in color with a 9+ on the side showig that
there are 9 errors in our Code.
After taking a glass of water I will now look at the code line by line.
*/
//line 7 to 10 is fine.
var car;
var func1 = function () {
  func2();
};

//line 13 to line 17 is also fine.
var func2 = function () {
  func4();
};
var func3 = function () {};

var func4 = function () {
  car = new Ca();
  car.funcX();
};
//Lne 26 and 27 were having single quotes instead of double quotes.
var Car = function () {
  this.brand = "volvo";
  this.color = "red";
  this.funcX = function () {
    this.funcY();
  };

  this.funcY = function () {
    this.funcZ();
  };

  //Line 37 was having single quotes instead of double quotes.
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
///lines 57 &58 had two semi colons at the end, and aslo had semi colons after the
//operator sign yest the this.brand was suposed to be first assigned to a value volvo before terminating.
class Car {
  constructor() {
    this.brand = volvo;
    this.color = red;
    this.funcX = function () {
      this.funcY();
    };
    this.funcY = function () {
      this.funcZ();
    };
    this.funcZ = function () {
      console.trace(trace, car);
    };
  }
}
func1();
//I also saved and allowed prettier to organize the code in a pretty way.
//That was all and now the code is lighting white on the file name showing it is clear of al errors. The end.
