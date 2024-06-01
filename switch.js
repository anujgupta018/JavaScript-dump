function caseinswitch(num) {
    var answer = "";
    switch (num) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        default:
            answer = "hello how are you?";
    }
    return answer;
}

console.log(caseinswitch(1));