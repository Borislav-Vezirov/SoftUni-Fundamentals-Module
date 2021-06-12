function practice(param) {
    for (const el of param) {
        let [town, latitude, longitude] = el.split(' | ');
        let result = {
            town,
            latitude : Number(latitude).toFixed(2),
            longitude : Number(longitude).toFixed(2)
        }
        console.log(result);
    }
}
console.log(practice(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']));