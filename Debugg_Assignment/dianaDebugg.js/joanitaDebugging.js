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

// Steps taken in debugging the code above.

//1. Opened file and waited for it to load.
//2. Looked through the lines of code, line by line aloud, to understand the code and program.
//3. On saving, prettier helped to organise the code.
//4. Prettier added the variable type names var and semicolons.
//5. With ESlint I noticed errors with the red highlighting on line 17, 18, 28, 46, 47 and 55.
//6. Hovered over the red highlighted words and showed an invalid character.
//7. Googles what an invalid character is. I found out that its a syntax error.
//8. Gone back to the code to change the single quotes to double quotes.
//9. After adding the quotes, my code looks okay.
//10. On the upper right of my screen is a mini screen that I have cross checked with to identify an errors hightlighted, and there is none.
//11. Used the debug icon on the left to get Javascript debug terminal.
//12. On clicking JS Debug terminal, there was an output on the terminal with no errors.
//13. Checked the debug console and it had nothing.
//14. Checked the problems side on the terminal and it read, "No problem have been detected in the workspace so far".
//15. I am now sure that I have debugged my code and it is working well.
