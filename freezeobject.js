// const obj = {
//     PI: 3221,
//     "name": "Anuj"
// };
// obj.PI = 3;
// obj.name = "hero";
// console.log(obj);
// In the above example we can see that the value of the object can be changed even though it is const so that's why we use the object.freeze function to prevent mutation of the object
function freezeobj() {
    "use strict";
    const constant = {
        PI: 3.14
    };
    Object.freeze(constant);//this will freeze the object and will prevent the object from changing its values 
    try {
        constant.PI = 99;
    }
    catch (ex) {
        console.log(ex);
    }
    return constant.PI;
}
const PI=freezeobj();
console.log(PI);