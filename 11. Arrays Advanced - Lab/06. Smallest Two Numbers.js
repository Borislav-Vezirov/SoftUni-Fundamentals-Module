function practice(param) {
    let newArr = param.sort((a,b) => a-b);
    let result = newArr.slice(0,2);
    return result.join(' ')
}
console.log(practice([30, 15, 50, 5]));