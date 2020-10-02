//it declares function as test with two parameters 'test1 & test2
function tests(test1,test2)
{
// keyword let declares variable greater
let greater = test2>test1?test1:test2
//end function execution and specifies the value 
return greater

}

//function named coursework with one perimeter 'cswork'
 function coursework(cswork)
 {
 //let declares the variable coursework and assigns it the value of the sum of cswork and tests
 let coursework = cswork + tests(80,80)
 
 console.log(coursework)
 //ends function execution and specifies the value of the coursework
return coursework

 

//function avg has one parameter 'a'
function avg(a)
{

//declares variable 'avg' and assigns it the value of coursework 90 divided by a
let avg =coursework(90)/a

//specifies the value of agv when run on the console
return avg

}

//function crsmark has one parameter 'a'
function crsmark(a)
{
//declares variable exm and assigns it the value of avg 2 times a divided by 100
let exm = avg(2)*(a/100)
//specifies the value of exm when run on the console
 return exm
}

//function exam with one parameter 

function exam(a)
{

let fexam = (60/100)*a

//specifies value of fexam when run on the console
return fexam

}

// function name is final

function fnal()
{

//declares variable fmark assigns it value of sum(75) and csrmark(40)

let fmark = exam(75)+crsmark(40)
console.log(fmark)

}

//specifies value of fmark when run on the console

fnal()
/**


**/