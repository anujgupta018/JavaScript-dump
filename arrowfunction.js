var magic = () => {
    console.log("This is a arrow function without any parameter");
}
magic();

var fun = (arr1, arr2) => {
    //this is a parametrized arrow function 
    return arr1.concat(arr2);
}
console.log(fun([2, 3], [4, 5]));


// rest operator
const sum = (function () {
    return function sum(...args) {//this statement will take n number of arguements and then will store in the array args
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1,2,3,4));