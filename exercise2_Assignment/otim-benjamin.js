  /**
 * A function called tests that takes two parameters and uses a
 * tenary operator to compare them and return the least value.
 * @param {*} test1
 * @param {*} test2
 */
function tests(test1, test2) {
  //Declaring a local variable greater and assigning the value of the result of the tenary operation.

  let greater = test2 > test1 ? test1 : test2;
  return greater;
}

/**
 * A function coursework that takes one parameter and adds it to the result of the test function that takes
 * two parameters and returns the least of two values.
 * The coursework returns the value of course work
 *
 */
function coursework(cswork) {
  //Local variable coursework is assigned the value of adding the arguments passed to coursework to the test funcion.
  let coursework = cswork + tests(80, 80);
  console.log(coursework);
  return coursework;
}
/**
 * A function avg that accepts one parameter and divides the return value of the coursework function that takes one argument with the parameter.
 */
function avg(a) {
  let avg = coursework(90) / a;
  return avg;
}

/**
 * A function crsmark that accepts one argument.
 * The value of avg multiplied by the argument supplied to the function divide by 100 is assigned to exm variable and the value of exm is returned
 */

function crsmark(a) {
  let exm = avg(2) * (a / 100);
  return exm;
}

/**
 * A function exam that accepts one parameter and multiplies the parameter with the result of 60/100 and assigns the value to fexam.
 */

function exam(a) {
  let fexam = (60 / 100) * a;

  return fexam;
}

/**
 * A function fnal that assigns to fmark the value of calling two functions exam(a) and crsmark(a) and console logs the result.
 */

function fnal() {
  let fmark = exam(75) + crsmark(40);
  console.log(fmark);
}

fnal();
