function practice(a, b,) {
    let first = a.charCodeAt();
    let second = b.charCodeAt();
    let start = first < second ?  first : second;
    let end  = first > second ? first : second;
    let result = ''
    for (let i = start +1; i < end; i++) {
        result += String.fromCharCode(i) + " "
    }
    return result;
}
console.log(practice('a', 'd'));