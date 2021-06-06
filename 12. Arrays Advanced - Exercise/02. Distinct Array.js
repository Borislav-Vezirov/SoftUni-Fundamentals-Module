function practice(param) {
    let result = []
    for (let i = 0; i < param.length; i++) {
        let current = param[i];
        if(!result.includes(current)){
            result.push(current)
        }
    }
    return result.join(' ')
}
console.log(practice([20, 8, 12, 13, 4, 4, 8, 5]));