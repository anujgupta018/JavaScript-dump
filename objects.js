// example
// var mydog = {
//     "name": "tom",
//     "legs": 4,
//     "tails": 1,
//     "details": ["near effiel tower jhansi", 33]
// };
// console.log(mydog);

// accesing objec
// 1.dot notation: By using dot operator with the object name
// console.log(mydog.name);
// 2.Bracket notation
// console.log(mydog["legs"]);
//accessing objects with the help of variables
var aisehi = {
    //property:value
    "naam": "naruto",
    "goli se kisko maara tha": "Gandhi",
    "goat": "ronaldo"
};
var hike = "goli se kisko maara tha";
var waah = aisehi[hike];
console.log(waah);
// *****updating the object******
aisehi.naam = "leoenl messi";
console.log(aisehi);
//adding poperties in the object
aisehi.kaiseho = "badiya aap btao";
console.log(aisehi);
// deleting property from the object
delete aisehi.naam;
console.log(aisehi)
// accesing nested objects
var mystorage = {
    "car": {
        "inside": {
            "glove box": "map",
            "passenger seat": "Crumbs"
        },
        "outside": {
            "trunk":"jack"
        }
    }
};
var gloveboxcontents = mystorage.car.inside["glove box"];
console.log(gloveboxcontents);
// accesing neseted array containing objects
var a = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "Trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];
// now if we want to access the second tree which is pine then
var content = a[1].list[1];//a ke 1st index ki list me 1st index pr access krna 
console.log(content);