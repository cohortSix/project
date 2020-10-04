//Defining a parameteralised function - tests with parameters - test1 and test2.
function tests(test1,test2)
{

//Declaring and initialising a variable with name greater and type let. 
//The value assigned to the greater variable is a shortened way of writing an if else statement in js.
//If the condition before the '?' is true, the first item after the '?' is true and vice versa.
//The question mark and colon operators together are the ternary operator.

let greater = test2>test1?test1:test2

/*When invoked/called, this function will return the value of the variable - greater to the caller 
and then this function will stop executing.*/

return greater

}

//Defining a parameteralised function coursework with parameter cswork.
 function coursework(cswork)
 {

//Declaring variable - coursework and of type - let.
//Variable - coursework will retain the compution of (cswork + tests(80,80)) as its value.
//tests(80,80) invokes the function - tests and passes 80 and 80 as the arguments. 

 let coursework = cswork + tests(80,80)
 
 console.log(coursework)

 //When invoked, this function - coursework will return the value of variable - coursework then stops executing.
return coursework



//Defining a parameteralised function- avg with a single parameter -a.
function avg(a)
{

//Declaring variable - avg and it will invoke function coursework and then divide the result by argument- a.
let avg =coursework(90)/a

//When invoked, this function will return/output the value of variable avg and then will stop executing.
return avg

}

//Defining a parameteralised function - crsmark and it has one parameter - a.
function crsmark(a)
{

//Declaring  variable- exm with the let keyword.
//exm will will invoke function avg and avg takes on the argument 2.
//The output of function avg will be multiplied by (a/100)and the result becomes the value of variable -exm.

let exm = avg(2)*(a/100)

//When invoked, this function will return the value of variable exm and then will it stop executing.
 return exm
}

//Defining a parameteralised function - exam and it has  single parameter -a.

function exam(a)
{

let fexam = (60/100)*a

//When invoked, function-exam will return/output the value of the local variable-fexam and then it will stop executing.
return fexam

}

//Defining a non-parameteralised function-fnal.

function fnal()
{

//Declaring a variable-fmark. 
//This variable calls functions exam and crsmark and the resulting computation becomes the value of fmark.
//Line 75 prints out the value of fmark on the console. 

let fmark = exam(75)+crsmark(40)
console.log(fmark)

}

//Invoking function- fnal.

fnal()

/**
This code returns a sytanx error when run.
This is because function - coursework does not have a closing brace (}) 
which goes against Javascript syntax for defining functions. 
Placing a closing curly brace (}) for this function, say on line 34, will make this code run without running into a syntax error.

It is also good practice to put a termination (;) at the end of statements say on line 90.
However, Javascript being a 'friendly' language, abscence of the termination won't stop the code from running.
**/

