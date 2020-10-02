// The function test declared and assigned two parameters namely: test1 & test2.
function tests(test1, test2) {
    // 
    /// The variable greater declared and assigned a ternary operator to evaluate the values.
    let greater = test2 > test1 ? test1 : test2
    //A return statement to output the value of the variable greater if the condition/ evaluation of the ternary operator is either true or false. 
    return greater

}

// The function course decalred and assinged a parameter called cswork.
function coursework(cswork) {
    //The variable coursework declared and assigned the values: cswork and tests.
    let coursework = cswork + tests(80, 80)

    console.log(coursework)
    //A return statement to produce the value of the function coursework. 
    return coursework
}

    //The function avg declared and assign the parameter a.
    function avg(a) {

        //The variable avg declared and assigned the values coursework
        let avg = coursework(90) / a

        //A return statement to produce the value of the functoin avg.
        return avg

    }

    //The fucntion crsmark declared and assigned the parameter a.
    function crsmark(a) {
        //The variable exm declared and assigned the product of 2 values.  
        let exm = avg(2) * (a / 100)
        //A return statement to produce the value of the varaible return.
        return exm
    }

    //The function exam declared and assigned the parameter a.

    function exam(a) {

        let fexam = (60 / 100) * a

        //A return statement to produce the value of the variable fexam.
        return fexam

    }

    //The function fnal declared but with no parameter.

    function fnal() {

        //The variable fmark declared and assigned values.

        let fmark = exam(75) + crsmark(40)
        console.log(fmark)

    }

    //Invoking the function fnal.

    fnal()
/**
/ The function coursework was not closed, hence,  the calling of the functon  fnal() produced error
/// So I closed the function coursework
**/
