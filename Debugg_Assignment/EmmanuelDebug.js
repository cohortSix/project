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

// Firstly, I run the terminal to check and confirmed that there were bugs which did not give the value of the function func1()
// After, I commented out the codes that had erros and typed the right code
//I then used  used  prettier and eslint to arrange and have my codes in the standardized formst 
//Finally, I ran the terminal again to check if all the errors  detected and corrected  are not there again so I can get the outvalue for the function func1()


