//Declare a function test with parameters test1 and test2.
function tests(test1,test2)
{
// Declare the variable greater that is assigned of the value test1,or test2
//if condition is true greater is assigned test1if it is false it is assigned value of test2
let greater = test2>test1?test1:test2
// returns the value of the variable
return greater

}

//Declaring  and initialising a function coursework with parameters cswork.
 function coursework(cswork)
 {
 //Declaring variable and assign it values of parameter cswork.
 let coursework = cswork + tests(80,80)
 
 console.log(coursework)
 //Returns the value of function course work.
return coursework

 

//Declaring and initialising a function avg with parameter a.
function avg(a)
{

//Declaring the variable avg, and initialise it by value of coursework() and divide by parameter of avg(a).
//Assign the value to variable avg.
let avg =coursework(90)/a

//Ruturn the value of the variable of avg.
return avg

}

//Declare and initialise a function that takes variable a as parameter
function crsmark(a)
{
//Declare the variable exm and initialise it with values from the function avg and the values of variable a.
let exm = avg(2)*(a/100)
//Return the value of exm variable. 
 return exm
}

//Declare and initialise afunction exam with parameter a.

function exam(a)
{

let fexam = (60/100)*a

//Return the value of variable fexam that was instantiated above.
return fexam

}

//Declare a function called fnal.

function fnal()
{

//Declare variable fmark and initialise it with values functions exam() and crsmark().

let fmark = exam(75)+crsmark(40)
console.log(fmark)

}

//Call to the function fnal().

fnal()
/**
There are errors in this code,
    1. The function coursework() doesnot have closing braces.
    2. In the avg function, coursework(90) function is called but you cannot call the same function within itself.

**/