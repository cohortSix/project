//Declares a function called tests with parameters test1 and test2.
function tests(test1,test2)
{
// The function tests' statement checks if test2 is greater than test1.If that's true,it returns test1 otherwise it returns test2.The output of that querry is stored in the variable greater.
let greater = test2>test1?test1:test2
//The result of the function tests is a variable greater.
return greater
}

//Declares a function coursework with a parameter cswork.
 function coursework(cswork)
 {
 //The variable coursework in the statement declared stores the sum of the value of the parameter cswork and the return value of the function tests.
 let coursework = cswork + tests(80,80)
 
 console.log(coursework)
 //The statement is the result of the function coursework.
return coursework
 }
 

//Declares the function avg with a parameter a.
function avg(a)
{

//The variable avg stores  the value of the return value of function coursework divided by the argument of function avg
let avg =coursework(90)/a

//This is the value of the function avg
return avg

}

//Declares a function with a parameter a
function crsmark(a)
{
//The statement computes the product of the return value of function avg with argument 2 and the percentage of argument of function crsmark and stores it in variable exm
let exm = avg(2)*(a/100)
//Var exm is the output of the function exm.
 return exm
}

//Declares a function exam with parameter a. 

function exam(a)
{

let fexam = (60/100)*a

//Var fexam is the solution of the function exam. 
return fexam

}

//Declares a function fnal with no parameters.

function fnal()
{

//A variable fmark is declared and stores the sum of return value of function exam with argument 75 and the return value of function crsmark with argument 40.The statement below the variable declaration writes the value of fmark on the screen

let fmark = exam(75)+crsmark(40)
console.log(fmark)

}

//Calls the function fnal.

fnal()
/**The string of code above had an error.On function coursework,the function body closing curly bracket was missing.
The string of code ran well with 79 being the value of fmark after putting the curly bracket

**/