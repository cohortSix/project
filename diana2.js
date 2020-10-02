//Delares a function called test with two parameters.
function tests(test1,test2)
{

// Declares a variable "greater",with a condition if test2>test1,  
//then greater is test1 otherwise test2.
let greater = test2>test1?test1:test2

// Stopes the execution of function tests and returns value of variable "greater".
return greater

}

//Delares a function called "coursework" with one parameter.
 function coursework(cswork)
 {

 //Declares a variable coursework and signs a method to it.
 let coursework = cswork + tests(80,80)
 
 console.log(coursework)

 //Stopes the execution of the function coursework and returns its value.
return coursework
 
 

//Declares function "avg" with paramenter "a".
function avg(a)
{

//Declares a variable "avg" and signs a method to it.
let avg =coursework(90)/a

//Stopes the execution of the function "avg" and returns the value of "avg".
return avg

}

//Declares function "acrsmark" with paramenter "a".
function crsmark(a)
{

//Declares a variable "exm" and signs a method to it.
let exm = avg(2)*(a/100)

//Stopes the execution of the function "crsmark" and returns the value of "exm".
 return exm
}

//Declares function "exam" with paramenter "a".
function exam(a)
{

let fexam = (60/100)*a

//Stopes the execution of the function "exam" and returns the value of "fexam".
return fexam

}

//Declares function "fnal".
function fnal()
{

//Declares a variable "fmark" and initializes the parameters of  functions exam and crsmark.

let fmark = exam(75)+crsmark(40)
console.log(fmark)

}
 

// Help to call the function or invoke.

fnal()

/**
The code does not work. The lines of code have no terminations.
 Function "coursework" was never closed with braces on line 25. 
 Closing it would enable the code to work.
**/