//A fuction has been declared with a function name 'tests' with arguments.
function tests(test1,test2)
{
    test2=50;
    test1=40;
    
//A variable "greater" has been declared which is  limited to the scope of a block statement, the variable is assigned to'test2>test1?test1:test2
let greater = test2>test1?test1:test2;
//The system will printout values/ result for a variable "greater"

return greater

}

function coursework(cswork)
{
    cswork=60;
//A variable "coursework" has been declared which is  limited to the scope of a block statement, coursework is assigned to cswork and tests indexes
let coursework = cswork + tests(80,80);
//The system will print out results for coursework.
console.log(coursework);
//The return statement stops the execution of coursework and returns a value from that coursework.
return coursework
}
//Declares function 'avg' which is assigned to value 'a'
function avg(a)
{
a = 40
//A variable "avg" has been declared and is assigned to coursework
let avg =coursework(90)/a;

//The return statement stops the execution of 'avg' and returns a value from that 'avg'.
return avg

}

//Declares a function 'crsmark' which is assigned to value 'a'
function crsmark(a)
{
    a=40
//A variable "exm" has been declared and is assigned to values of avg .
let exm = avg(2)*(a/100)
//The return statement stops the execution of 'exm' and returns a value from that 'exm'
return exm
}

//A function has been declared with a function name "exam" which is assigned to "value"a"

function exam(a)
{
 a= 40;
let fexam = (60/100)*a

//The return statement stops the execution of 'fexam' and returns a value from that 'fexam'
return fexam

}

//A function has been declared with a function name "fnal" 

function fnal()
{

//A variable "fmark" has been declared and is assigned to value exam and crsmark.

let fmark = exam(75)+crsmark(40)
console.log(fmark)

}

//The system will execute results for fnal
fnal()
/**


**/


