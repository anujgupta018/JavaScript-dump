class test{
    constructor(a){
     this.a = a;
    }
}
var p = new test(3);
console.log(p.a);
//another example
function makeclass() {
    class vegetable{
        constructor(name) {
            this.name = name;
        }
    }
    return vegetable;
}
const vegetable = new makeclass();
const carrot = new vegetable('carrot');
console.log(carrot.name);