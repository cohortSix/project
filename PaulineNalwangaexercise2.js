  
//The function on line 3 is given a name "tests" and inside the parenthesis are two parameters "test1 and test2"
function tests(test1,test2)
{
// Inside these brackets{} we are declaring a function by declaring a variable "greater" and assigning it to mean test2 is greater than test1 and 
//the question mark(?) is there to show that if test2 is actually greater than test1 then the result of printing this function should be test1, otherwise if its not true then it should print test2 as the result.
let greater = test2>test1?test1:test2
//This statement on line nine is instructing that the computer show the word greater as the answer if the statement on line 7 is true.
return greater

}

//Statement on line 14 is  function named coursework with a parameter variable "cwork". To this note also, that when a function has a parameter
//in its parenthasis it means you have specified it as compared to when you leave the parenthesis empty..
 function coursework(cswork)
 {
 //Statement 19 declares a variable "coursework" and assigns it to give a result of "cswork + tests(80,80)". 
 //And on line 21 we are calling on the terminal (console)to give reults of coursework.
 let coursework = cswork + tests(80,80)
 
 console.log(coursework)
 //Line 23 is how we call a function and declare what we want as the results in the teminal.
return coursework

 

//This below is another function named average with a parameter a to be specific.
function avg(a)
{

//Here we have declared our variable avg to mean coursework is 90 divide by the value of a. The results of coursework
//on line 23 is what will be the value of coursework here.
let avg =coursework(90)/a

//Here we are again simply calling out the value or answer for avg
return avg

}

//This here is naming a function crsmark with a parameter a.
function crsmark(a)
{
//Here we let a variable exm be assigned to give us the value of avg(2) multiplied by (a/100) 
let exm = avg(2)*(a/100)
//Here we are instructing that the computer returns the value of exm.
 return exm
}

//Here below is another function named exam (a)
//This function declared a statement variable fexam assigned to 60 divided by 100 to be multilied by the parmeter a.
function exam(a)
{

let fexam = (60/100)*a

//Here line 57 the return statement is to return the fexam
return fexam

}

//Here the key function named fnal and the parenthesis are left empty because we have not specified our values.

function fnal()
{

//Here we have assigned our variable fmark to give us exam(75) and add it to crsmark(40).
//Then we log or call out a result for fmark on the console (terninal).
let fmark = exam(75)+crsmark(40)
console.log(fmark)

}

//Here below is how we call out a function.So we are calling out the function named fnal().


fnal()
/**
 The above has not given us an answer when we run in the terminal because we used the return statement which causes
 the execution of a function to stop and we also didnot terminate it at the end with a semicolon.
**/