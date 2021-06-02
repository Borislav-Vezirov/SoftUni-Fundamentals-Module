function practice(param) {
    let first = +param.shift();
    let end = +param.pop();
    return first + end
}
console.log(practice(['20', '30', '40']));