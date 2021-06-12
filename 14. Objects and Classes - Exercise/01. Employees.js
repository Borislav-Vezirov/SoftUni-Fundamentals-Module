function practice(param) {
    let results = {};
    for (const el of param) {
        let nameLength = el.length;
        results[el] = nameLength;
    }
    Object.entries(results).forEach(element =>{
        console.log(`Name: ${element[0]} -- Personal Number: ${element[1]}`);
    })
}
console.log(practice([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
]))