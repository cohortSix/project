//This is a method called tests having two parameters; test1 and test2.
function tests(test1,test2)
{

//The declared let variable greater has been assigned the ternary operator.

//The ternary operator is a short hand for writing if/else statements.

//The ternary operator reads; out put test1 if test2 is greater than test1, otherwiae, output test2.

//It can also be interpreted as; if test2>test1 is true, then output test1; If the statement is false, output test2.

//In this case the parameter with the lesser value is output.
let greater = test2>test1?test1:test2

//Return is a key word. It instructs the method tests to return the value assigned to the variable greater.
return greater

}

//This is a method called coursework having a parameter called cswork.
 function coursework(cswork)
 {
 
 //The method coursework is now declared as a let variable coursework.
 
 //The variable is assigned the sum of the parameter cswork and the method tests containing its arguments 80 and 80.
 
 //In this case the method coursework is turned into a variable; declared and intialised.
 let coursework = cswork + tests(80,80)
 
 console.log(coursework)
 
 //The return key word, instructs the method to return the resulting value assigned to the variable coursework.
return coursework


//Added this closing brace to the method coursework that wasn't there before to rectify the error in the code.
 }  

//This is a method called avg; Having a single parameter a.
//The method is defined with the following statement / behaviour below.
function avg(a)
{

//The method avg is now being declared as a let variable.
//The variable is being intialised with the method coursework with its argument 90 divided by the parameter a of the method avg.

let avg =coursework(90)/a

//The return key word instructs the method to return the resulting value assigned to the variable avg.

return avg

}

//A method called crsmark has a single parameter a.
//The parameter a in the method below is the same as the parameter in the avg method.
//The method is being defined below.
function crsmark(a)
{

//This is declaring a let variable called exm.
//The variable has been assigned the resulting value from the method avg having the argument 2 passed mutliplied by the result from the division of the parameter a by 100.
let exm = avg(2)*(a/100)

//The return key word instructs the method to return the resulting value assigned to the variable exm.
 return exm
}

//This is a method called exam and it has one parameter a which is the same parameter as that for the method crsmark.
function exam(a)
{

let fexam = (60/100)*a

//The return key word instructs the method to return the resulting value assigned to the variable fexam.
return fexam

}

//This is a method called fnal with no parameters and it is defined below.

function fnal()
{

//A let variable fmark is being declared.
//The variable is being assigned the resulting value from the sum of the methods exam and crsmark; passed with arguments 75 and 40 respectively.
//The console is an object and it is appended with the method log. 
//The log method is used to output the resultant value from the variable fmark onto the console.
let fmark = exam(75)+crsmark(40)
console.log(fmark)

}

//This is a method invocation or method calling.
//The method fnal has been called or invoked.


fnal()
/**
The code above failed to run at first because the closing brace for the method coursework was not included.
The code has been able to run after including the closing brace for the coursework method.
**/
