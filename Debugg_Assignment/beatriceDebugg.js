var car;
var func1 = function () {
	func2();
};

var func2 = function () {
	func4();
};

var func4 = function () {
	car = new Car();
	car.funcX();
};
var Car = function () {
	// The single quotation mark is an invalid character
	this.brand = "volvo";
	// The single quotation mark is an invalid character
	this.color = "red";
	this.funcX = function () {
		this.funcY();
	};

	this.funcY = function () {
		this.funcZ();
	};

	this.funcZ = function () {
		// The single quotation mark is an invalid character
		// trace is not a console method
		console.log("trace car");
	};
};

func1();


/*
1. On opening the file in VS code, it highlighted possible error lines in a red underline.
2. Hovering over these lines showed a popup text box that indicated that an invalid character was used.
3. Right clicking on the VS code workspace and selecting format document fixed the indentations
4. Removed already defined variables and functions that were also highlighted in red after the document reformat.
5. Removed the unused function3 which was also highlighted in red by eslint
6. Verified that the code runs well and no errors show up in the debug console output
*/
