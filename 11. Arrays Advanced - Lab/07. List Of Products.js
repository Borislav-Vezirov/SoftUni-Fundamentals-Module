function practice(param) {
    let newArr = param.sort();
    let result = [];
    let index = 1;
    for (let element of newArr) {
        result += `${index}.${element}\n`
        index++
    }
    return result
}
console.log(practice(["Potatoes", "Tomatoes", "Onions", "Apples"]));