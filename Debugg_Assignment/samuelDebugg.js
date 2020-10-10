var car;

var func1 = function () {
	func2();
};

var func2 = function () {
	func4();
};

// func3 is redundant, I simply commented it out since it may be used later.
// var func3 = function () {};

var func4 = function () {
	//Renamed Ca to Car.
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

/* 1. Immediately I opened the file in VsCode, the floating small panel on the top right corner
highligted sections with errors in the code so I could already have an idea of where the errors are.

2. I formatted the document using Prettier for better visibility of the code.

3. I read through the entire code inorder to understand it's purpose.

4. ESlint returned errors for single-quoted strings and indentation
since they were not conforming to the ESlint rules I had set, so I fixed those.

5. After fixing the quotation errors, ESlint returned errors for missing semicolons.
These errors don't stop the js code from running but I fixed them too as good coding practice.

6. I deleted all redundant code that was either declared and not used or was repetitive (DRY).
This was done for code optimization.

7. I corrected the ommission of r on Ca.

8. I ran the code and no errors were returned.*/
