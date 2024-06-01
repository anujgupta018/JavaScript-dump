// This is the use of the destruction assignment operator to extract the value from the array from the front
const [z, x, , s] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(z, x, s);
let a = 3, b = 34;
console.log(a, b);
[a, b] = [b, a];
console.log("After swapping");
console.log(a, b);

// using destruction assignment operator with the rest operator
var source = [1, 2, 3, 4, 5, 6, 7];
function remove_first_two_elements(list) {
    const [, , ...arr] = list;
    return arr;
};
const arr = remove_first_two_elements(source);
console.log(arr);
console.log(source);
// using destruction assignment as the function parameter
var stats = {
    min: 32,
    avg: 321,
    cv: 28,
    max: 100,
    gid: 23
};
var star = (stats) => {
    var mid = (stats.min + stats.max) / 2;
    return mid;
}
console.log(star(stats));
// instead of this way we can pass the parameters of the object which is to be used rather than passing
// the whole object into the function. It can be done using the destruction assignment operator shown below
var star2 = ({ min, max }) => {
    var midd = (min + max) / 2;
    return midd;
}
console.log(stats);
console.log(star2(stats))