function practice(arr) {

    let collection = {};
    let current;
    while ((current = arr.shift()).includes('->')) {
        let [name, technique, skill] = current.split(' -> ');
        skill = Number(skill);
        if (!collection.hasOwnProperty(name)) {
            collection[name] = {};
        }
        if (!collection[name].hasOwnProperty(technique)) {
             collection[name][technique] = skill;
        }
        if (collection[name][technique] < skill) {
            collection[name][technique] = skill
        }
    }

    while (current !== 'Ave Cesar') {
        let [first, second] = current.split(' vs ');
        if (first in collection && second in collection) {
            for (let firstKey in collection[first]) {
                for (let secondKey in collection[second]) {
                    if (firstKey === secondKey) {
                        if (collection[first][firstKey] > collection[second][secondKey]) {
                            delete collection[second];
                        } else if (collection[first][firstKey] < collection[second][secondKey]) {
                            delete collection[first];
                        }
                    }
                }
            }
        }
        current = arr.shift();
    }

    let sortedArr = Object.entries(collection);
    let result = [];
    for (let el of sortedArr) {
        let pow = Object.entries(el[1]);
        let sum = pow.map(a => a[1]).reduce((a, b) => a + b);
        result.push([el[0], pow, sum]);
    }
    result.sort((a, b) => b[2] - a[2] || a.localeCompare(b))
    for (let el of result) {
        console.log(`${el[0]}: ${el[2]} skill`);
        el[1].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
            .map(a => console.log(`- ${a[0]} <!> ${a[1]}`))
    }
}
practice([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);