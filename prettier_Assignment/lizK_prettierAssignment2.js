// Declare a function named 'tests' with 2 parameters 'test1' & 'test2'
function tests(test1, test2) {
  // Declare a control statement with the condition to check if the value of test2 is greater than test1, if the condition is true use 'test1' otherwise if false use 'test2'
  let greater = test2 > test1 ? test1 : test2;
  // Invoke return statement to run the function condition and display the greater value
  return greater;
}

// Declare a function named 'coursework' with one parameter 'cswork'
function coursework(cswork) {
  // Declare & assign the variable coursework with a function task that adds / concatenates the value in the 'cswork' parameter with the values in the 'tests' parameters which are defined as '80 & 80'
  let coursework = cswork + tests(80, 80);

  console.log(coursework);
  // Invoke return statement to run the function task and display the 'coursework' value
  return coursework;
}

// Declare a function named 'avg' with one parameter 'a'
function avg(a) {
  // Declare & assign the variable 'avg' with a function task that divides the 'coursework' parameter value '90' with the 'a' parameter value
  let avg = coursework(90) / a;

  // Invoke return statement to run the function task asigned to the variable 'avg'
  return avg;
}

// Declare a function named 'crsmark' with one parameter 'a'
function crsmark(a) {
  // Declare & assign the variable 'exm' with a function task that multiplies the 'avg' parameter value '2' with the percentage of the value in parameter 'a'
  let exm = avg(2) * (a / 100);
  // Invoke return statement to run the function task asigned to the variable 'exm'
  return exm;
}

// Declare a function named 'exam' with the parameter 'a'
function exam(a) {
  // Declare & assign the variable 'fexam' with a function task that multiplies 60% percent with the parameter value in 'a'
  let fexam = (60 / 100) * a;

  // Invoke return statement to run the function task asigned to the variable 'fexam'
  return fexam;
}

// Declare a function named 'fnal'
function fnal() {
  // Declare & assign the variable 'fmark' with a function task that adds / concatenates the values in 'exam' and 'crsmark' parameters ('75' & '40'), and print out the answer
  let fmark = exam(75) + crsmark(40);
  console.log(fmark);
}

// Call the function 'fnul'
fnal();

/**
 The block of code above is used to calculate a students coursework & final mark score.

 When you run the code as it is, it brings up a syntax error 'Unexpected end of input'. 
 This is because the 'coursework' function statement on lines 11 - 18 was missing the closing "}" to complete it.

 You can solve this syntax error by adding '}' on line 17 & run the code. 
 When the code is corrected and runs sucessfully, the console will dispaly the numbers '170' as the course work score & '79' as the final mark score.
 */
