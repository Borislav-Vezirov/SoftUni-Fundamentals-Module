function practice(param) {
    let result = 0;
    for (let i = param; i > 1; i--) {
        let curr = param / i;
        if(param % i === 0){
            result += curr
        }
    }
    if(result === param){
        return 'We have a perfect number!'
    }else{
        return 'It\'s not so perfect.'
    }
}
console.log(practice(496));