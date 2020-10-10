//Declaring a function called tests and initialising it with parameters test1 and test2.
function tests(test1, test2) {
  // Declaring a variable greater with a keyword let and assigning it with a condition using a ternary operator to output test1 if test2 is greater than test1 and the viceversa
  let greater = test2 > test1 ? test1 : test2;
  //Prints out the greater variable.
  return greater;
}

//Declaring a function called coursework and initialising it with parameter cswork.
function coursework(cswork) {
  //Line 15 Declares a variable coursework using a keyword let and assigning it to sum up cswork parameter with the values from the test variable while line 17 prints outs the sum of cswork and 80.
  let coursework = cswork + tests(80, 80);

  console.log(coursework);
  //Prints outs the the variable coursework.
  return coursework;
}
//Declaring a function called avg and initialising it with parameter a.
function avg(a) {
  //Declaring a variable avg with a keyword let and assigning it with a function coursework with parameter 90 divided by a.
  let avg = coursework(90) / a;

  // Prints out the avg variable.
  return avg;
}

//Declaring a function called crsmark and initialising it with parameter a.
function crsmark(a) {
  //Declaring a variable exm with keyword let and assigning it a function avg with parameter 2 multiplied by parameter a divided by 100.
  let exm = avg(2) * (a / 100);
  //Prints out the variable exm.
  return exm;
}

//Declaring a function called exam and initialising it with parameter a and also declaring a variable called fexam with keyword let assigning it a numbers multiplied by parameter a.

function exam(a) {
  let fexam = (60 / 100) * a;

  //Prints out variable fexam
  return fexam;
}

//Declaring a function called fnal with no parameters.

function fnal() {
  //Declaring a variable fmark with keyword let and assigning it to calculate the final mark by adding up values of variables exam and crsmark.

  let fmark = exam(75) + crsmark(40);
  console.log(fmark);
}

//Function fnal has been evoked.

fnal();
/**
I ran the code an it gave me a syntax error:Unexpected end of input and i then went through
my code and realised that between line 11 and line 19, the statement lacked a closing 
curl bracket (}) which i added and then i got 170 and 79 as the output.

**/
