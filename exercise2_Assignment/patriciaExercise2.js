
//Defines a function  named "tests" with  2 parameters "test1" and "test 2".
function tests(test1,test2)
{

//Declares a variable "greater" and initialises with a value that is the lesser value between "test1" and "test2"
let greater = test2>test1?test1:test2

//stores the value in variable "greater" and ends the function "tests"
return greater;


}

//Defines a function "coursework" with parameter "cswork"
function coursework(cswork)
{
//Declares a variable "coursework" and initialises it with a value as the sum of "cswork" and function "tests"  invoked with arguments "80,80".
let coursework = cswork + tests(80,80)

console.log(coursework)

return coursework

}

//Defines a function "avg" with  1 parameter "a".
function avg(a)
{

//Declares and initialises variable "avg" with a value as the function "coursework"  invoked with an argument "90" divided by parameter "a".
let avg =coursework(90)/a

//
return avg


}
//Defines function "crsmark" with  1 parameter "a".
function crsmark(a)
{

// Declares and initialises variable "exm" with a value as the function "avg" invoked with an argumet "2" multiplied by the percentage of parameter "a".
let exm = avg(2)*(a/100)
//
 return exm
}

//Defines a function "exam" with parameter "a".
function exam(a)
{

let fexam = (60/100)*a

// stores the value of variable "fexam" and ends function "exam".
return fexam

}

//Defines a function "fnal".
function fnal()
{

//Declares and initialises variable "fmark" with a value as the sum of function"exam" invoked with argument "75" and function "crsmark" invoked with argument "40".
let fmark = exam(75)+crsmark(40)

console.log(fmark)

}

//Invokes the function "fnal"

fnal();


 /**This program is written to calculate a students final mark depending on their exams and coursework marks.
 The program does not run intially because the function "coursework" had no closing brace/tag therefore 
 its scope was undefined creating errors when the code is run.
 When the said brace is added, the program runs smoothly returning the value 170 as the value of coursework and 79 as the value of the fmark
 **/