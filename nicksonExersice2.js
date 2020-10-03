//defining a function with two parameters test 1 and test2
function tests(test1,test2)
{
// assigning a variable greater to a tenary/conditional operator.
let greater = test2>test1?test1:test2
//
return greater

}
tests(10,20);
//definig a function with a name coursework and parameter cswork.
 function coursework(cswork)
 {
 //assigning  the variable coursework to a value in which cswork and tests(80,80) are concantenated.
 let coursework = cswork + tests(80,80)
 
 console.log(coursework)
 //instructing the console to execute the function and give results for coursework.
return coursework

 

//defining a function avg with a parameter a.
function avg(a)
{

//assigning the avg to coursework(90) divide by a.
let avg =coursework(90)/a

//the function should produce avg as the result after it's execution
return avg

}

//defining a function crsmark with a parameter a.
function crsmark(a)
{
//assigning a variable exm to a value in which the avg(2) is multiplied with (a/100).
let exm = avg(2)*(a/100)
//stating that the function crsmark should  output exm results after its execution.
 return exm
}

//defining a function called exam with a parameter called a.

function exam(a)
{

let fexam = (60/100)*a

//assigning a variable fexam to a value  of open brackets 60 divide by 100  multiply by a.
return fexam

}

//defining  a function called fnal.

function fnal()
{

//assigning the fmark to  a value   exam(75)+crsmark(40).

let fmark = exam(75)+crsmark(40)
console.log(fmark)

}

//invoking the function fnal

fnal()
/** this function is meant to get the final mark of students by adding their coursework to their tests anfd getting the 
average of both which is finally added to their exam marks that are marked out of 75.
There are errors on lines 13,25,37,47 , which if rectified , the function will be executed successfully.
**/
