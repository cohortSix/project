//A function tests is declared having two parameters test1 and test2.
function tests(test1,test2)
{
// A local variable greater is declared,  assigned to an operation.
// The conditional operation checks if test2 is greater that test1, if the condition is true,return test1 else return test2.
let greater = test2>test1?test1:test2
//The return keyword specifies the value to be returned using the variable greater.
return greater

}

//A function coursework is defined or declared with a parameter cswork.
 function coursework(cswork)
 {
 //A local variable coursework is assigned to an arithmetic operation.
 //The arithmetic operation has operands cswork and test(80,80).
 let coursework = cswork + tests(80,80)
 
 //The console.log method outputs or displays the value assigned to the variable coursework.
 console.log(coursework)
 //The return keyword specifies the value to be returned in the variable coursework.
return coursework
 
 

//A function avg is declared with a parameter a.
function avg(a)
{

// A local variable avg is declared and assigned an arithmetic operation.
//The arithmetic operation consists of two operands, the coursework function with arguement 90 divided by parameter a.
let avg =coursework(90)/a

//The return keyword specifies the value to be returned using the variable avg.
return avg

}

//A function crsmark is declared with  parameter a.
function crsmark(a)
{
//A local variable exm is declared and assigned with an arithmetic operation.
// The arithmetic operation includes two operands and 3 operators * / () function avg with arguement 2 and parameter a divided by 100.
let exm = avg(2)*(a/100)
//The return keyword specifies the value to be returned using the variable exm.
 return exm
}

// A function exam is declared having parameter a.

function exam(a)
{
// A local variable fexam is declared and assigned an arithmetic operation.
// The arithmetic operation has operators () / * and operands 60 100 and parameter a.
let fexam = (60/100)*a

//The return keyword specifies the value to be returned using the variable fexam.
return fexam

}

// A function fnal is declared.

function fnal()
{

// A local variable fmark is declared  and assigned an arithmetic operation.
//The operation has sum of envoked functions exam with arguement 75 and crsmark with arguement 40.

let fmark = exam(75)+crsmark(40)
//The console.log method is to output value stored in variable fmark.
console.log(fmark);//remove termination

}

// The function fnal is envoked or called.
fnal()
/**
 When the code is executed in the terminal, it returns an error ,"Unexpected end of input".
 This is due to the missing closing braces for the function coursework.Please observe line 13 to line 22.
 There are no closing brace on line 23.

**/