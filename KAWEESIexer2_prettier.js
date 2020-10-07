//Declaring tests as a function with two parameters,test1 and test2
function tests(test1,test2)
{
// Using if and else statements for variable greater on values test1 and test2.
let greater = test2>test1?test1:test2
//Returning the value of greater as test1 for the condition above.
return greater

}

//Declaring the coursework function with one parameter cswork.
 function coursework(cswork)
 {
 //Coursework assigned to sum of cswork and tests(80,80).
 let coursework = cswork + tests(80,80)
 
 console.log(coursework)
 //Returning the value of coursework.
return coursework

 

//Declaring function avg with parameter a.
function avg(a)
{

//Assigning avg to a value: coursework(90)/a.
let avg =coursework(90)/a

//Returning the value of avg.
return avg

}

//Declaring the function crsmark with parameter a.
function crsmark(a)
{
//Assigning exm variable to a value which is a product of avg(2) and (a/100).
let exm = avg(2)*(a/100)
//Returning the value of exm.
 return exm
}

//Declaring function exam with one parameter: a.

function exam(a)
{
//Declaring fexam variable and initiallising it to a value.
let fexam = (60/100)*a

//Returning the value of fexam.
return fexam

}

//Declaring the function fnal.

function fnal()
{

//Declaring and initiallising fmark variable to a value

let fmark = exam(75)+crsmark(40)
console.log(fmark)

}

//Calling the function fnal.

fnal()
/**
 * There is an error in the code.specifically the function coursework() was not closed 
 * with a closing brace.when you put a closing brace,the function works.


**/