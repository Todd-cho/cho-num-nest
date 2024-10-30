function avg(numbers) {
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}

function prime(num) {
    if(num===2)
        return true;

    for(let i = 2; i<num; i++){
        if(num%i === 0)
            return false;
    }
    return true;
}

function factorial(num) {
    if(num<=1) return 1;
    return num*factorial(num-1);
}

module.exports = {
    avg,
    prime,
    factorial
}