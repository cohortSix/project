//It calls function tests and assigns it parameters test1 and test2. 
function tests(test1,test2)
{
// It calls for variable greater and assigns it to test2 greater than test1 if the condition is true.
let greater = test2>test1?test1:test2
//It executes the values of greater in the console terminal.
return greater

}

// It declares coursework as a function and cswork as a parameter. 
 function coursework(cswork)
 {
 //It declares function coursework and paramater cswork as well as assign values to test.
 let coursework = cswork + tests(80,80)
 
 console.log(coursework)
 //It prints results of coursework in the console terminal.
return coursework

 

// Iy involves values of coursework to be printed.
function avg(a)
{

//It declares function avg and adds a prameter a to it.
let avg =coursework(90)/a

//It calls function avg and adds values 90 to coursework and divides it with the parameter a.
return avg

}

//It returns or executes values in avg.
function crsmark(a)
{
//It calls function crsmark and parameter a.
let exm = avg(2)*(a/100)
//It calls variable exm to be equal to the values of avg multipled by a divided by 100.
 return exm
}

//It executes values of exm in the console terminal.

function exam(a)
{

let fexam = (60/100)*a

//It assigns function exam with parameter a and assigns variale fexam with values. 
return fexam

}

//It executes values of fexam in the console terminal.

function fnal()
{

//It declares fnal as a function.

let fmark = exam(75)+crsmark(40)
console.log(fmark)

}

//It calls variable fmark and assigns it values of exam added with values ofcrsmark, and calls the values of fmark to be executed in the console terminal.  

fnal()
/** 
 The code wont run due to missing syntax on line 20 which is supposed to terminate the code.
**/