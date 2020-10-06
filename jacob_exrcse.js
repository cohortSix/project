//Defining a function called tests with two parameters.

function tests(test1, test2) {
	/*
Dynamic assignment to the variable greater.
The value assigned to variable greater depends on the result from the boolean expression (test2>test1).
If the expression is true, the value of test1 will be assigned to variable greater and vise versa.
*/
	let greater = test2 > test1 ? test1 : test2;

	//The function will return to the caller the value stored in the variable greater.
	return greater;
}

//Defining a function called coursework with one parameter.

function coursework(cswork) {
	/*
The value of parameter cswork is added to the returned result from the invoked function,
named tests that is passed two arguments.
The declared variable coursework is then initialized with the sum from the addition expression.
*/
	let coursework = cswork + tests(80, 80);

	console.log(coursework);

	//The function will return to the caller the value stored in the variable coursework.
	return coursework;
}

//Defining a function called avg with one parameter.

function avg(a) {
	/*
The function named coursework is invoked and passed an argument. The returned result,
is divided by the value of parameter a.
The declared variable avg is then initialized with the quotient from the division expression.
*/
	let avg = coursework(90) / a;

	//The function will return to the caller the value stored in the variable avg.
	return avg;
}

//Defining a function called crsmark with one parameter.

function crsmark(a) {
	/*
The function named avg is invoked and passed an argument. The returned result is multiplied by,
the quotient from the division expression (The value of parameter a is divided by 100).
The declared variable exm is then initialized with the product from the multiplication expression. 
*/
	let exm = avg(2) * (a / 100);

	//The function will return to the caller the value stored in the variable exm.
	return exm;
}

//Defining a function called exam with one parameter.

function exam(a) {
	let fexam = (60 / 100) * a;

	//The function will return to the caller the value stored in the variable fexam.
	return fexam;
}

//Defining a function called fnal.

function fnal() {
	/*
Two functions named exam and crsmark are invoked and passed arguments respectively.
The declared variable fmark is then initialized with the sum of the returned results from the invoked functions.
*/

	let fmark = exam(75) + crsmark(40);
	console.log(fmark);
}

//Invoke the function named fnal.

fnal();
/**
The function named coursework lacked an closing brace to define its scope.
A change on line 29, (adding an closing brace '}') removed the bug in the code.
The code outputs two values onto the console; 170 and 79.
The first computed value 170 is the value assigned to variable coursework on line 23 and output on line 25.
The second computed value 79 is the value assigned to variable fmark on line 76 and output on line 77.
**/
