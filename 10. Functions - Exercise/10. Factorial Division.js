function practice(param, param2) {

    return (result(param) / result(param2)).toFixed(2)

    function result(num) {
        let result = 1
        for (let i = 1; i <= num; i++) {
            result *= i
        }
        return result
    }
}
console.log(practice(5, 2));