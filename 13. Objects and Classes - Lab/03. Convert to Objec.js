function practice(param) {
    let parseParam = JSON.parse(param);
    let getKeys = Object.keys(parseParam);
    let result = ''
    for (const key of getKeys) {
        let value = parseParam[key];
        result += `${key}: ${value}\n`
    }
    return result
}
let input = '{"name": "George", "age": 40, "town": "Sofia"}'

console.log(practice(input));