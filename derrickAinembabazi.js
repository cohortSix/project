//A function called tests with two parameters (arguments) test1 and test2.
function tests(test1,test2)
{
// A variable greater that returns test1 if test2 is greater than test1 and returns test2 if test1 is greater.
let greater = test2>test1?test1:test2
//The 'greater' variable is returned here.
return greater

};

//A function coursework that has one argument, cswork.
 function coursework(cswork)
 {
 //A variable coursework that is a sum of cswork and 80.
 let coursework = cswork + tests(80,80)
 
 console.log(coursework)
 //The coursework function returns the coursework variable.
return coursework
 

//A function avg that has has one parameter, a.
function avg(a)
{

//A variable avg assigned with the let keyword. It calculates avg by dividing coursework by a.
let avg =coursework(90)/a

//The avg function returns the 'avg' variable.
return avg

}

//A function crsmark that has one argument, a.
function crsmark(a)
{
//An exm variable assigned with the let keyword, as a product of avg(2) and a/100.
let exm = avg(2)*(a/100)
//The crsmark returns the exm variable.
 return exm
}

//A function exam with one parameter, a.

function exam(a)
{

let fexam = (60/100)*a

//The exam function returns a fexam variable that has been defined within the function.
return fexam

}

//A function, fnal that has no arguments.

function fnal()
{

//A fmark variable has been assigned with the let keyword. It calculates the final mark, as a sum of exam and crsmark

let fmark = exam(75)+crsmark(40)
console.log(fmark)

}

//The fnal function has been called / invoked.

fnal()

/**
 Calling the fnal function returned a Syntax error: Unexpected end of input.
 This was because the coursework function was missing a closing curly bracket, '}' and since 
 the fnal function gets some of its results indirectly from this function, it cannot run until that error is fixed.
 
 **/