//Create a function tests and give it parameters test1 and test2.
function tests(test1, test2) {
  //Declare and check if test2 is greater than test1,then assign greater to test1 or vice versa.
  let greater = test2 > test1 ? test1 : test2;
  //return the value of greater to the tests function.
  return greater;
}

//Create a function coursework and give it a parameter cswork.
function coursework(cswork) {
  //Declare and assign coursework to the sum of cswork and result of tests function.
  let coursework = cswork + tests(80, 80);

  console.log(coursework);
  //Return the value of coursework function.
  return coursework;
}

//Create a function avg with a parameter a.
function avg(a) {
  //Declare and assign avg to value of coursework divided by a.
  let avg = coursework(90) / a;

  //Return the value of avg.
  return avg;
}

//Create a function crsmark with a parameter a.
function crsmark(a) {
  //Declare exm and assign it to the product  of avg(2) and a/100.
  let exm = avg(2) * (a / 100);
  //Return the value exm.
  return exm;
}

//Create a function exam with parameter a.

function exam(a) {
  let fexam = (60 / 100) * a;

  //Return the value of fexam.
  return fexam;
}

//Create afunction fnal.

function fnal() {
  //Declare and assign fmark to the sum of functions exam(75) and crsmark(40).

  let fmark = exam(75) + crsmark(40);
  console.log(fmark);
}

//call the function fnal().

fnal();
/**
The programe does not excute.
Because braces opened at line 13 was not closed at the end of the function 
hence adding  closing brace enables the program to execute.

**/
