/*This is 
    equaltiy operator
    == operator which means 7==7 & 7=='7' will be considered true
    === operator which means 7===7 & 7===7 will be true but 7==='7' will be false

    inequaltiy operator
    !=  normal(does type conversion)
    !== strict (does not do type conversion)
*/
function check(a) {
    if (a < 5 && a > 0) {
        console.log("smaller than 5");
    }
    else if (a < 10 && a > 5) {
        console.log("smaller than 10 and greater than 5");
    }
    else {
        console.log("Iske aage to aata hi nhi hai");
    }
}
check(34);