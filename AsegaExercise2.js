//The function tests takes two parameters, called test1 and test2.
function tests(test1,test2)
{
/*Declaring a block-scoped local variable greater and initializing it to check true or false if 
test2 greater than test1 and checking if condition is true and then execute second part (after ?) if 
first one is true and if condition becomes false then third part (after :) will be executed.*/
let greater = test2>test1?test1:test2
//Specifying the value greater returned by the function
return greater

}

//The function coursework takes one parameter, called cswork.
 function coursework(cswork)
 {
 //
 let coursework = cswork + tests(80,80)
 
 console.log(coursework)
 //Specifying the value coursework returned by the function
return coursework

 

//The function avg takes one parameter, called a.
function avg(a)
{

/*Declaring a block-scoped local variable avg and initializing it to a value
couserwork that has a parameter value 90 and dividing it a parameter taken by function avg*/
let avg =coursework(90)/a

//Specifying the value avg returned by the function
return avg

}

//The function crsmark takes one parameter, called a.
function crsmark(a)
{
/*Declaring a block-scoped local variable exm and initializing it to a value
avg that has a parameter value 2 and multiplying it with a parameter taken by function 
crsmark divisible by 100*/
let exm = avg(2)*(a/100)
//Specifying the value exm returned by the function
 return exm
}

//The function exam takes one parameter, called a.
function exam(a)
{

let fexam = (60/100)*a

//Specifying the value fexam returned by the function
return fexam

}

//The function fnal takes with an empty parameter.
function fnal()
{

/*Declaring a block-scoped local variable fmark and initializing it to a value
exam that has a parameter value 75 and adding it to a value crsmark that has a parameter 40
and outpting the value of fmark via the console*/
let fmark = exam(75)+crsmark(40)
console.log(fmark)

}

//Declaring the value fnal with an empty paramenter 

fnal()
/**
Will return undefined

**/