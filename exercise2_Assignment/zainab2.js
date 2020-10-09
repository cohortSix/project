//Statement declaring a function named tests with parameters named test1 and test2.
function tests(test1, test2) {
    // Declaring a variable 'greater' which returns test1 if test2 is greater.
    let greater = test2 > test1 ? test1 : test2
    //Stops the execution of the function and returns value that is greater.
    return greater

}

//Declares a function named coursework with parameter named cswork.
function coursework(cswork) {
    //Declares a variable coursework and has been assigned the sum of parameters 'cswork' and 'tests' with arguments(80,80).
    //Keyword is let.
    let coursework = cswork + tests(80, 80)
    //Outputs the value of the above variable in the terminal.
    console.log(coursework)
    //Stops execution of the function and returns value of the coursework.
    return coursework



    //Declares function named avg with pararmeter 'a'.
    function avg(a) {

        //Declares variable 'avg' and assign it the value of coursework(90) and divide it by a.
        let avg = coursework(90) / a

        //Stops execution of function and returns the value of avg.
        return avg

    }

    //Declares function named crsmark with parameter 'a'.
    function crsmark(a) {
        //Declares variable exm with values avg(2) and divide 'a' by 100 and multiply both values.
        let exm = avg(2) * (a / 100)
        //Stops execution of function and returns the value of exm.
        return exm
    }


    //Declares function named exam with parameter 'a'.
    function exam(a) {
        //Declares a variable fexam and assigns it value of(60/100) and multiply by a.
        let fexam = (60 / 100) * a

        //Stop execution and returns value of fexam.
        return fexam

    }


    //Declares function named fnal without any parameters.
    function fnal() {


        //Declares variable fmark and assigns it values 'exam(75)+crsmark(40).
        let fmark = exam(75) + crsmark(40)
        console.log(fmark)

    }

    //Function fnal is called.

    fnal();
/**
The code does not work because the function coursework has no closing bracket.

*/
