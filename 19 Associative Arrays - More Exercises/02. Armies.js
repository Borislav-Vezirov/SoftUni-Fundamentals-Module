function practice(arr) {
    let collection = {};
    let leader     = [];

    for (let element of arr) {
        if (element.includes('arrives')) {
            let tokkens = element.split(' ')
            tokkens.pop();
            let name = tokkens.join(' ');
            if(!collection.hasOwnProperty(name)){
                collection[name] = {
                    army: {},
                    totalArmyCount: 0
                }
            }
        } else if (element.includes('defeat')) {
            let tokkens = element.split(' ')
            tokkens.pop();
            let name = tokkens.join(' ');
            if (collection.hasOwnProperty(name)) {
                delete collection[name];
            }
        } else if (element.includes('+')) {
            let tokkens = element.split(' + ');
            tokkens[1] = Number(tokkens[1]);
            for (let key in collection) {
                if (collection[key].army.hasOwnProperty(tokkens[0])) {
                    collection[key].army[tokkens[0]] = Number(tokkens[1])
                    collection[key].totalArmyCount  += Number(tokkens[1]);
                }
            }
        } else {
            let [name, tokkens] = element.split(': ');
            tokkens = tokkens.split(', ')
            tokkens[1] = Number(tokkens[1]);
            if (collection.hasOwnProperty(name)) {
                collection[name].army[tokkens[0]] = tokkens[1];
                collection[name].totalArmyCount  += tokkens[1];
            }
        }
    }

    let sorted = Object.entries(collection)//.sort(([a,b], [c,d]));
    console.log(sorted);
    
}
practice([
    'Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'
]);