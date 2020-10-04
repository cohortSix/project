
//Declaring function for tests.
function tests(test1,test2)
{
// Assigning  the variable greater a condition test 2 greater than test 1.
let greater = test2>test1?test1:test2
//if condition is viable, then returns the greater value.
return greater

}

//Declaring function for course work.
 function coursework(cswork)
 {
 //Assigning the variable coursework a condition of sumation of cswork and test.
  
 let coursework = cswork + tests(80,80)

 console.log(coursework)
 //Returns the value of coursework.
return coursework



//Declaring function for average
function avg(a)
{

//Assigning the variable average and giving it a condition of coursework divided by a.
let avg =coursework(90)/a

//Return the value of average.
return avg

}

//Declaring function for crsmark.
function crsmark(a)
{
//Assigning  variable exam and giving it condition of multiplying two independent averages.
let exm = avg(2)*(a/100)
//Returning value for exam.
 return exm
}

//Declaring function for exam.

function exam(a)
{

let fexam = (60/100)*a

//Return value for fexam.
return fexam

}

//Declaring function for fnal.

function fnal()
{

//Assigning the variablrvariable fmark and giving it condition of summation of exam and crsmark.

let fmark = exam(75)+crsmark(40)
//Print out value for fmark in the node terminal.
console.log(fmark)

}

fnal()
/**code doesnt run in the terminal .
**/
 }
