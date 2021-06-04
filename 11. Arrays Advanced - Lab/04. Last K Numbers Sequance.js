function practice(param, param2) {
    let result = [1];
    for (let i = 1; i < param; i++) {
        let temp = result.slice(-param2);
        let sum = 0;
        for (let element of temp) {
            sum += element;
        }
        result.push(sum)
    }
    return result.join(' ')
}
console.log(practice(6, 3));