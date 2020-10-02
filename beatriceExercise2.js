//Declare a function 'test' with two parameters 'test1' and 'test2'.
function tests(test1, test2) {
    //Declare a variable 'greater' and assign it to a conditional operation which checks if test2 is greater than test1 and if true return test1, if false return test2
    let greater = test2 > test1 ? test1 : test2
    //Return the result of the 'greater' variable.
    return greater
}

//Declare a function 'coursework' with a parameter 'cswork.
function coursework(cswork) {
    //Declare a variable 'coursework' and assign it to a function that adds the value of 'cswork' to the values 80 and 80 in the 'tests' parameter.
    let coursework = cswork + tests(80, 80)

    console.log(coursework)
    //Display the value of 'coursework' however lack of a closing curly bracket stops the code from running.
    return coursework



    //Declare a function'avg' with a parameter 'a'
    function avg(a) {

        //Declare a variable 'avg' and assign it with a function that divides 'coursework' value 90 by the value 'a'.
        let avg = coursework(90) / a

        //Return the value of the function assigned to 'avg" in line 24.
        return avg

    }

    //Declare a function 'crsmark' with a parameter 'a'
    function crsmark(a) {
        //Declare a variable 'exm' and assign it a function that multiplies the value '2' of parameter 'avg' to the percentage of the value of the parameter 'a'.
        let exm = avg(2) * (a / 100)
        //Return the value of 'exm' as a result of the function assigned in line 34.
        return exm
    }

    //Declare function 'exam" with a parameter 'a' on line 40 and declare a variable 'fexam' whose assigned function multiplies the percentage of 60 to the value of parameter 'a'.
    function exam(a) {

        let fexam = (60 / 100) * a

        //Return the value for 'fexam'
        return fexam

    }

    //Declare a function 'fnal'

    function fnal() {

        //Declare a function fmark and assign it a function that sums up the value '75' of parameter 'exam' and value '40' of parameter 'crsmark'

        let fmark = exam(75) + crsmark(40)
        console.log(fmark)

    }

    //Call the function fnal to be displayed in the console.

    fnal()
/*
This code at first did not run because of the missing closing curly bracket '}' on line 17,
when added this code was able to run and displayed coursework and final mark scores
**/