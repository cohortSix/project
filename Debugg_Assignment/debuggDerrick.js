/* 
	I have ESLint and prettier installed locally on my PC so I dont go through installing it with npm all the time.	
1. First, I ran the code in my terminal and it pointed to a syntax error on line 21.
2. My prettier is set to accept only double quotation marks. So, I replaced the single quotation marks with those and ran my code again.
3. Running the code again presented another error on line 18; a reference error. (Ca is not defined)
4. Ca was not defined anywhere but Car was deined. 
5. I presumed that to be a spelling mistake, replaced Ca with Car and ran the code again
6. It couldn't compile becasue of another error, they used console.trace instead of console.log. I fixed that and code worked fine. 
7. There was a repetition, 'trace car was being called twice' so I set out to see what the code does. 
8. I found out that, func1 calls func2. func2 calls func4. func4 intitialises the car variable with the new keyword, to the Car function and attaches car to funcX
9. In the Car function, funcX calls funcY. funcY calls funcZ and funcZ logs "trace car" to the screen
10. func3 didn't call anything so I commented it out too.
11. func1 is called at the end.
12. Line 45 - line 70 is a repition of the same procedure, so I commented out the repetition.
*/

var car;
var func1 = function () {
	func2();
};

var func2 = function () {
	func4();
};
//var func3 = function () {};

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
		console.log("trace car");
	};
};
func1();
/*var car;
var func1 = function () {
	func2();
};
var func2 = function () {
	func4();
};
//var func3 = function () {};
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
		console.log("trace car");
	};
};
func1();*/
