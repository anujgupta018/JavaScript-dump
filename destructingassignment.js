var voxel = {
    x: 3.5,
    y: 3.1,
    z: 2.4
};
// a way of assigning the variable from the object
var abc = voxel.x;
var def = voxel.y;
var ghi = voxel.z;
console.log(abc + " " + def + " " + ghi + " ");
//*****  now the destructing syntax
var assign = {
    x: a,
    y: b,
    z: c
} = voxel;

// destructing assignment from the nested object
const forecast = {
    today: { min: 10, max: 14 },
    tomorrow: { min: 2, max: 5 }
};
function getmaxoftomorrow() {
    "use strict";
    const { tomorrow: { max: maxoftomorrow } } = forecast;
    return maxoftomorrow;
}
console.log(getmaxoftomorrow());