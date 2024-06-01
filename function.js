function anuj() {
    console.log("HEllo this is a function");
}
anuj();
// function with argumets
function arg(a, b) {
  console.log(a - b);
}
arg(23, 4);
// global and scope variable
// if the name of the local and global variable is same inside a function then the preference 
// would be given to the local variable
var global = 34;//A global variable
var same = 3432;
function fun1() {
    oopsglobal = 2;//if we do not use the var keyword while the variable in the function then the variable automatically becomes the global variable
    var same = 23;
    console.log(same);
    console.log(global);
    var a = 43;
    console.log(a);
}
function fun2() {
    console.log(oopsglobal);
}
function mul5(a) {
    return a * 5;
}
mul5(34);
//  fun1();
fun2();
