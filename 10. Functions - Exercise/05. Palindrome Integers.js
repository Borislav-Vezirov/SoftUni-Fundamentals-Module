function practice(param) {
    let resultT = ''
    for (let i = 0; i < param.length; i++) {
        let current = String(param[i]).split('').join('');
        let currentReverse = String(param[i]).split('').reverse().join('');
        let result = current === currentReverse ? true : false
        resultT +=  `${result}\n`
    }
    return resultT
}
console.log(practice([123,323,421,121]));