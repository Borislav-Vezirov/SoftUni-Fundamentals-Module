function practice(param) {
    let num = ((' '+ param).repeat(param) + '\n').repeat(param);
    
    return num
}
console.log(practice(7)) ;