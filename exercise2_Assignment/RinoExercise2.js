//Initialising a function tests with parameters test1 and test2.
function tests(test1, test2) {
  // Declaring a statement if test2 is greater than test1, print test1 else print test2.
  let greater = test2 > test1 ? test1 : test2;
  //Returns vaalue greater to function call and denotes end of function.
  return greater;
}

//Initialising a function coursework with a parameter cswork.
function coursework(cswork) {
  //Declaring a variable coursework which is assigned to the sum of cswork and parameters of the function tests.
  let coursework = cswork + tests(80, 80);
  console.log(coursework);
  //Returns value coursework to function call and denotes end of function.
  return coursework;
}

//Initialising a function avg with parameter a.
function avg(a) {
  //Declaring a variable avg, assigned to the function coursework with parameter 90 divided by the parameter a.
  let avg = coursework(90) / a;

  //Returns value avg to function call and denotes end of function.
  return avg;
}

//Initialising a function crsmark with the parameter a.
function crsmark(a) {
  //Declaring a variable exm, assigned to the value of the function avg 2, multiplied by the parameter which was divided by 100.
  let exm = avg(2) * (a / 100);
  //Returns value of function exm and denotes end of function.
  return exm;
}

//Initialising a function exam with the parameter a.
function exam(a) {
  //Declaring a variable fexa, assigned to the value of the result of 60 divided by 100 multiplied by parameter a.
  let fexam = (60 / 100) * a;

  //Returns value of function fexam and denotes end of function.
  return fexam;
}

//Initialising a function final.
function fnal() {
  //Declaring a variable fmark, assigned to the value of the result of sum of exam function parameter 75 and crsmark function parameter 40.
  let fmark = exam(75) + crsmark(40);
  console.log(fmark);
}

//Prints out the final value of the function.
fnal();

/* At line 21, the body of the function was enclosed with the curly bracket, so the whole code wouldn't run, but fixing is as shown in the code 
below makes it run. Plus most of the statements not being terminated even though it doesnt affesct the running 
of the code.*/

function tests(test1, test2) {
  let greater = test2 > test1 ? test1 : test2;
  return greater;
}

function coursework(cswork) {
  let coursework = cswork + tests(80, 80);
  console.log(coursework);
  return coursework;
}

function avg(a) {
  let avg = coursework(90) / a;
  return avg;
}

function crsmark(a) {
  let exm = avg(2) * (a / 100);
  return exm;
}

function exam(a) {
  let fexam = (60 / 100) * a;
  return fexam;
}

function fnal() {
  let fmark = exam(75) + crsmark(40);
  console.log(fmark);
}

fnal();
