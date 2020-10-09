// Defining a function called tests and initializing it with parameters called test 1 and test 2
function tests(test1, test2) {
  // Declaring a variable called greater and assigning it to values test2 greater than test 1, otherwise its value is test 2
  let greater = test2 > test1 ? test1 : test2;
  //Calling the value in variable greater
  return greater;
}

//Defining a function called coursework and initializing it to parameter cswork
function coursework(cswork) {
  //Declaring a variable called coursework and assigning it to a parameter called cswork + tests with parameters 80 and 80
  let coursework = cswork + tests(80, 80);

  console.log(coursework);
}
// Calling the value in variable coursework
return coursework;

// Definining a function called avg with parameter a
function avg(a) {
  // Declaring a variable called avg and assigning it to a value coursework a parameter 90 divide by a
  let avg = coursework(90) / a;

  //Calling the value in the variable avg
  return avg;
}

//Defining a function called crsmark with a parameter a
function crsmark(a) {
  //Declaing a variable called exm and assigning it to the value avg with parameter 2 multiplied by parameter a divided bt 100
  let exm = avg(2) * (a / 100);
  //Calling the value in the variable exm
  return exm;
}

//Definining a function called exam with a parameter a

function exam(a) {
  let fexam = (60 / 100) * a;

  //Calling the value in the variable fexam
  return fexam;
}

//Defining the function called fnal with an empty parameter

function fnal() {
  //Declaring variable called fmark and assigning it with values exam and parameter 75 plus value crsmark and parater 40

  let fmark = exam(75) + crsmark(40);
  console.log(fmark);
}

//Calling the function named fnal

fnal();
/**
 * The terminal was not able to run because there were errors
 * 1. The function corsework did not have the closing braces, when closed, the code runs.
 *
 **/
