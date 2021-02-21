// Declaring the tests function.
function tests(test1, test2) {
  // Asigning the greater test mark to greater.
  let greater = test2 > test1 ? test1 : test2;

  // Stores a greater test results.
  return greater;
}
//Declaring the Coursework function.
function coursework(cswork) {
  //Asigning the cswrk plus the test mark to coursework.
  let coursework = cswork + tests(80, 80);

  //Prints the coursework marks on the console.
  console.log(coursework);

  //Stores the coursework mark.
  return coursework;
}
// Declaring the avg function.
function avg(a) {
  //Asigning the 90 mark to coursework which will be added to the greatest mark(80) divided by 2.
  let avg = coursework(90) / a;

  //Stores the avg results.
  return avg;
}

//Declaring the crsmark function
function crsmark(a) {
  // Asigning 2 to avg function and multiply it by crsmark function.
  let exm = avg(2) * (a / 100);
  //Stores the exm mark.
  return exm;
}
//Decalaring the exam function.
function exam(a) {
  //Asigning 60/100 * a which is the exam function.
  let fexam = (60 / 100) * a;

  //Stores the fexam results
  return fexam;
}
//Declares the fnal function
function fnal() {
  //Asigning the sum of exam function and crsmark function to fmark
  let fmark = exam(75) + crsmark(40);

  //Prints the final mark on the console
  console.log(fmark);
}

//Invokes the fnal function
fnal();
//There was a missing closing tag on line 20 of function coursework.
// The above program calculates and prints the results of course work function(cswork) which is 170 as aresult of adding 90 to 80.
//And also calculates the reults of the final mark which is 79 as a result of adding the exam and crsmark functions.
