// Declaring a function called tests initiallized with parameters test1 and test2
function tests(test1, test2) {
  // Declaring a variable "greater" which is assigned the test if test2 is greater than test1, otherwise its value is test2
  let greater = test2 > test1 ? test1 : test2;
  // This statement stores the value of the variable "greater" for later reference
  return greater;
}

//Declaring a function called "coursework" and initializing it with parameter "cswork"
function coursework(cswork) {
  //Declaring a variable coursework and assigning it the value of the parameter cswork + function tests with arguments 80 and 80
  let coursework = cswork + tests(80, 80);

  console.log(coursework);
  // Storing the value of coursework for later reference
  return coursework;
}

// Declaring a function avg with parameter "a"
function avg(a) {
  // Declaring variable avg and assigning the value of the function coursework with the argument 90 divide by "a"
  let avg = coursework(90) / a;

  // Stores the value of "avg" for later use
  return avg;
}

//Declaring a function crsmark with parameter "a"
function crsmark(a) {
  // Declaring a variable "exm" and intialising it with the value "avg(2)*(a/100)"
  let exm = avg(2) * (a / 100);
  // Stores the value of "exm" for later reference
  return exm;
}

//Declares a function "exam" with a parameter "a"

function exam(a) {
  let fexam = (60 / 100) * a;

  //Stores the value of "fexam"
  return fexam;
}

//Declares a function "fnal" with no parameters

function fnal() {
  //Declaring a variable "fmark" and initializing it with "exam(75)+crsmark(40)"

  let fmark = exam(75) + crsmark(40);
  console.log(fmark);
}

//Invoking the function "fnal"

fnal();
/**
 * The code has an error. In order to make it run, the function "coursework" should be closed with "}"
 **/
