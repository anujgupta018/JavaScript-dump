const createperson = (name, age, gender) => ( { name, age, gender } );
console.log(createperson("Anuj", 20, "M"));

const bicycle = {
    gear: 2,
    setgear(newgear) {//declaring function inside an object
        "use strict";
        this.gear = newgear;
    }
};
bicycle.setgear(3);
console.log(bicycle.gear);