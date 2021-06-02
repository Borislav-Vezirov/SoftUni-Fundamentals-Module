function practice(param) {
    let k = param.shift();
    let result = param.slice(0, k);
    let secondResult = param.slice(-k)
    return result.join(' ')+'\n'+secondResult.join(' ');
}
console.log(practice([3,
    6, 7, 8, 9]
   ));