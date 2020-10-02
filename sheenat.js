//Declare a function with the name tests and the parameters test1 and test2.
function tests(test1,test2)
{
//Declare a variable greater and intialize it with the value for test1 if test2 is greater than test1.
let greater = test2>test1?test1:test2
//End function & specify the value for greater to be printed in the console.
return greater

}

//Declare a function coursework with the parameter cswork
 function coursework(cswork)
 {
 //Declare a varibale coursework and assign it the values of the sum of cswork and tests
 let coursework = cswork + tests(80,80)

 console.log(coursework)
 //End function & specify the value for coursework to be printed in the console.
return coursework
 //} missing bracket makes code not run


//Declare a function avg with the parameter a.
function avg(a)
{

//Declare a variable avg and assign it the value of coursework divide by a.
let avg =coursework(90)/a

//End function & specify the value for avg to be printed in the console.
return avg

}

//Declare a function crsmark with the parameter a.
function crsmark(a)
{
//Declare a variable exm with values avg(2) multiplied by a divide by 100.
let exm = avg(2)*(a/100)
//End function & specify the value for exm to be printed in the console.
 return exm
}

//Declare a function exam with the variable a.
function exam(a)
{
// Declare a variable fexam and assign it the values (60/100)*a below.
let fexam = (60/100)*a

//End function & specify the value for fexam to be printed in the console.
return fexam

}

//Declare a function with the name fnal and parameters empty.

function fnal()
{

//Declare a varibale fmark and assign it the values exam(75)+crsmark(40) below.

let fmark = exam(75)+crsmark(40)
console.log(fmark)

}

//Display the value for the function fnal in the console.

fnal();
/**
 * The code does not work due the missing closing bracket on line 20 for the function coursework.
 */
