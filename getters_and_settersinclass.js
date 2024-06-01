// whenever we use _ before a variable in class it indicates that the variable is been declared privatly
function makeclass() {
    class thermostat{
        constructor(temp){
            this._temp = 5 / 9 * (temp - 32);
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedtemp) {
            this._temp = updatedtemp;
        }
    }
    return thermostat;
}
const thermostat = makeclass();
const thermos = new thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);