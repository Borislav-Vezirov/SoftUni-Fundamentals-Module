function practice(param1, param2) {
    let store = {};
    for (let i = 0; i < param1.length; i += 2) {
        let current = param1[i];
        store[current] = Number(param1[i + 1]);
    }
    for (let i = 0; i < param2.length; i += 2) {
        let current = param2[i];
        if(store.hasOwnProperty(current)){
            store[current] += Number(param2[i + 1]);
        }else{
            store[current] = Number(param2[i + 1]);
        }
    }
    Object.keys(store).forEach(el => {
        console.log(`${el} -> ${store[el]}`);
    })
}
console.log(practice(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']));