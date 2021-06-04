function practice(param) {

    let result = param.filter(isOdd);
    let doubled = result.map(x => x * 2).reverse().join(' ')
    console.log(doubled);

    function isOdd(value, index){
        return index % 2 !== 0;
    }
}
console.log(practice([3, 0, 10, 4, 7, 3]));
// console.log(practice([10, 15, 20, 25]));