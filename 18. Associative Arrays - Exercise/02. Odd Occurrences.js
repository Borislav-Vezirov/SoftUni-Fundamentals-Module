function practice(str) {
    let result = new Map();
    let arr = str.split(' ');
    for (let element of arr) {
        element = element.toLowerCase();
        if (!result.has(element)) {
            result.set(element, 0)
        }
        result.set(element, result.get(element) + 1);

    }
    let sort = Array.from(result).sort(([a, b], [c, d]) => a - c);
    let sortedArr = [];
    for (let [key, value] of sort) {
        value = Number(value);
        if (value % 2 !== 0) {
            sortedArr.push(key)
        }
    }
    console.log(sortedArr.join(' '));
}
practice('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');