//Line 2 defines a fuction called tests with parameters test1 and test 2.
function tests(test1,test2)
{
// Line 5 declares a variable greater and assigns it a comparison condition which states that "if the value of test 2 is greater than test1, then the value of the variable greater will be test1 otherwise test2"
let greater = test2>test1?test1:test2
//Line 7 ends the execution of the function in line 2 and returns the value greater
return greater

}

//Line 12 declares a function called coursework with a parameter cswork
 function coursework(cswork)
 
 //Line 15 declare a variable coursework and assigns to it a value of cswork added with the values of tests while line 17 prints out the value of course work
 let coursework = cswork + tests(80,80)
 
 console.log(coursework)
 //Line 19 ends the execution of the function in line 12 and returns the value of the coursse work
return coursework
 
 

//Line 24 declares a function avg with a parameter (a)
function avg(a)
{

//Line 28 declares a variable avg and assigns it a value of coursework divided by (a)
let avg =coursework(90)/a

//Line 31 ends the execution of the fuction in line 24 and returns the value of avg
return avg

}

//Line 36 declares a function crsmark with a parameter (a)
function crsmark(a)
{
//Line 39 declares a variable exm and assigns a value of avg(2)*(a/100)
let exm = avg(2)*(a/100)
//Line 41 ends the execution of the function in line 41 and returns the value of exm
 return exm
}

//Line 46 declares a function called exam with paremeter (a) while line 49 declares a variable fexam and assigns a value of (60/100)*a

function exam(a)
{

let fexam = (60/100)*a

//Line 52 ends the execution of the function in line 46 and returns the value of fexam
return fexam

}

//Line 58 declares a function called fnal 

function fnal()
{

//Line 63 declares a variable called fmark and assigns to it a value of exam(75)+crsmark(40) while line 46 prints the value of fmark

let fmark = exam(75)+crsmark(40)
console.log(fmark)

}

//Line 70 calls the function fnal()

fnal()
/**
under the fuction coursework, line 15 doesnt work because they are no carry brackets after the declaring of the function i.e. carry brackets should have been put before line 15

**/
