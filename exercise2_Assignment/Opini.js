//declare function tests with parametres tests1 and test2
function tests(test1,test2)
{
// declaring  vaiable greater is assigned with if statements
let greater = test2>test1?test1:test2
//returns the value in the functoin of the vaeialble
return greater

}

//declaring function coursework with parametres cswork
 function coursework(cswork)
 {
 //assign the variable with sum with parametres cswork
 let coursework = cswork + tests(80,80)
 
 console.log(coursework)
 //storing the course coursework
return coursework

 

//declaring function avg with parametres a
function avg(a)
{

//assigning varaible avg to be divived by parametres a 
let avg =coursework(90)/a

//ends a function avg and soecidies the value to be returned
return avg

}

//declaring  function crsmark with parameteres a
function crsmark(a)
{
//
let exm = avg(2)*(a/100)
//ends a function avg and soecidies the value to be returned
 return exm
}

//declaring a function exam witth parametres a

function exam(a)
{

let fexam = (60/100)*a

//storing variable fexam
return fexam

}

//declare a function fnal with empty parametres

function fnal()
{

//assign varaible fmark and printed on the console

let fmark = exam(75)+crsmark(40)
console.log(fmark)

}

//

fnal()
/**The code doesnt run can be excuted 
 * 


*/