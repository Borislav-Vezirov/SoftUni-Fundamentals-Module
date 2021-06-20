function practice(str) {
    let items = {
        'motes': 0,
        'shards': 0,
        'fragments': 0
    }
    let junkItems = {};

    let tokkens = str.split(' ');
    while (tokkens.length > 0) {
        let n        = Number(tokkens.shift());
        let material = tokkens.shift().toLowerCase();
        if (material in items) {
            items[material] += n;
        } else {
            junkItems[material] = n
        }
        if (material in items && items[material] >= 250) {
            obtained(material);
            items[material] -= 250
            break;
        }
    }

    Object.entries(items)
        .sort(([a, b], [c, d]) => d - b || a.localeCompare(c))
        .forEach(el => {
            console.log(`${el[0]}: ${el[1]}`);
        })

    Object.keys(junkItems)
        .sort((a, b) => a.localeCompare(b))
        .forEach(el => {
            console.log(`${el}: ${junkItems[el]}`);
        })

    function obtained(material) {
        if (material === 'motes') {
            console.log('Dragonwrath obtained!');
        } else if (material === 'fragments') {
            console.log('Valanyr obtained!');
        } else if (material === 'shards') {
            console.log('Shadowmourne obtained!');
        }
    }
}
practice('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');