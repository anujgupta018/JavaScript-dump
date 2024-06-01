// condition ? statement -if-true: statement -if-false;
function check(a, b) {
    return a === b ? true : false;
}
console.log(check(4, 4));
// mutliple ternary operator
function checksign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(checksign(0));