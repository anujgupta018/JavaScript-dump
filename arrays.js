var Array = ["Anuj", 20];
console.log(Array);

var a = ["hello", 3.3243, "Aur bhai kaise ho"];
console.log(a);

// nested array
var nested = [Array, a,"Ye hai nested array"];
console.log(nested);
var n= [34, 324, 323];
console.log(n[2]);
n[1] = 234;
console.log(n);
//TO access a multi directional array
var multidim = [[1, 2, 3], [4, 5, 6], ["anuj", "gupta", 20], 324, [[7,8,9],"hi", 34]];
console.log(multidim[4][0][1]);//This is how you access array inside array which are mutlidirectional
