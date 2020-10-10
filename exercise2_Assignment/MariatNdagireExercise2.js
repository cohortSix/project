    //This is a function called tests which takes 2 parameters test1 and test2.

    function tests(test1, test2) {
        // A local variable greater is assigned an if statement.
        //If test2 is greater than test1, return test 1, else return else2.
        //The if statement is written using a ternary operator ?.

        let greater = test2 > test1 ? test1 : test2;
        //The function should return the result of the greater variable.
        return greater;

    }

    // Function coursework takes one parameter cswork.
    function coursework(cswork) {
        //Local variable coursework 
        let coursework = cswork + tests(80, 80);

        console.log(coursework);
        // return the result of the coursework variable.
        return coursework;
    }
    //A function avg which has one parameter a.
    function avg(a) {

        //The course work function takes one argument  90 and its return value is divided by the parameter in the avg function.

        let avg = coursework(90) / a;

        //Return the value of the local variable avg.
        return avg;

    }

    //A function crsmark takes one parameter a.
    function crsmark(a) {
        /*The local variable exm is assigned the result from multiplying the return value of the avg function
        with the result after dividing parameter a by 100 . 
         */
        let exm = avg(2) * (a / 100);
        //Return the value of the local variable exm.
        return exm;
    }

    //Function exam takes one parameter a.

    function exam(a) {

        let fexam = (60 / 100) * a;

        //Return the value of the local variable fexam.
        return fexam;

    }

    //A non parameterized function fnal() is declared.

    function fnal() {

        //Local variable fmark is assigned the sum of the return values from the exam() and crsmark()functions.

        let fmark = exam(75) + crsmark(40);
        console.log(fmark);

    }

    //Calling the fnal() function

    fnal();


    /**
     * Function coursework() wasnt closed
     * After closing the coursework function, the results output on the console were
     * 170 and 79 from the coursework() function and fnal() function respectively.
     **/