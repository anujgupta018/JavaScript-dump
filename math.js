// Math function for returning random fraction numbers
function randomfraction() {
    return Math.random();//This will return random numbers between 0-1 but it cannot be equal to 1
}
console.log(randomfraction());
// random whole number between 0-9 can be achieved by using random=Math.floor(math.random()*20)
var random = Math.floor(Math.random() * 20);
console.log(random);//This will return numbers between 0-20