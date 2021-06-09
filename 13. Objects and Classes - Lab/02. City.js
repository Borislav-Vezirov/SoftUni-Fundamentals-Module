function practice(param) {
    let obj = Object.keys(param)
    let result = '';
    for (let key of obj) {
        let value = param[key];
        result += (`${key} -> ${value}\n`);
    }
    return result;
}
let input = {
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}

console.log(practice(input));