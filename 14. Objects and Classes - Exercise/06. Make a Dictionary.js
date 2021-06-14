function practice(param) {
    let arr = param.map(JSON.parse);
    let result = {};
    for (const obj of arr) {
        Object.entries(obj).forEach(element => {
            result[element[0]] = element[1];
        });
    }
    let sortedItem = Object.entries(result).sort((a,b) => a[0].localeCompare(b[0]));
    for (const el of sortedItem) {
        console.log(`Term: ${el[0]} => Definition: ${el[1]}`);
    }
}
console.log(practice([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]));