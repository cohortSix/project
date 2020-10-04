//Statement declaring a function called tests initialized with parameters test1 and test2 as inputs.
function tests(test1,test2)
{
// Statement declaring a variable "greater" which is assigned the test1 if test2 is greater than test1, otherwise its value is test2. 
let greater = test2>test1?test1:test2
// Statement storing a function calculating a value of the variable "greater" for later reference.
return greater

}

//Statement declaring a function called "coursework" and initializing it with parameter "cswork.
 function coursework(cswork)
 {
 //Statement declaring a variable coursework and assigning it the value of the parameter cswork + function tests with arguments 80 and 80.
 let coursework = cswork + tests(80,80)
 
 console.log(coursework)
 //Statement storing the value of coursework for later reference.
return coursework


//Statement declaring a function avg with parameter "a".
function avg(a)
{

//Statement declaring variable avg and assigning the value of the function coursework with the argument 90 divide by "a".
let avg =coursework(90)/a

//Statement storing the value of "avg" for future reference.
return avg

}

//Statement declaring a function crsmark with parameter "a".
function crsmark(a)
{
//Statement declaring a variable "exm" and intialises it with the value "avg(2)*(a/100)".
let exm = avg(2)*(a/100)
//Statement storing the value of "exm" for future reference.
 return exm
}

//Statement declaring a function "exam" with a parameter "a".

function exam(a)
{

let fexam = (60/100)*a

//Statement storing the value of "fexam" for future reference.
return fexam

}

//Statement declaring a function called "fnal" without parameters.

function fnal()
{

//Statement declaring a variable called "fmark" and initializing it with "exam(75)+crsmark(40)".

let fmark = exam(75)+crsmark(40)
console.log(fmark)

}

//Statement invoking or calling the function "fnal".

fnal()
/** 
This code is about computing the average and grades of students. When calling the "fnal" function and run the code, it is not running because of syntax error.
The syntax error is simply caused by the fact that the coursework function does not have a closing curly bracket '}'. The error can be solved by adding a closing curly bracket for the code to be able to run.

**/