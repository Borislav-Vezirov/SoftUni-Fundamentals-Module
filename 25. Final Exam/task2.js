function practice(arr) {
    let n = +arr.shift();
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i].split(':').join('');
        let pattern = /\|(?<boss>[A-Z]{4,})\|#(?<title>[A-Za-z]+ [A-Za-z]+)#/g;
        let match = pattern.exec(current);
        if (match) {
            let name = match.groups.boss
            let title = match.groups.title
            console.log(`${name}, The ${title}`);
            console.log(`>> Strength: ${name.length}`);
            console.log(`>> Armor: ${title.length}`);
        } else {
            console.log('Access denied!');
        }
    }
}
practice(['3',
    '|PETER|:#Lead architect#',
    '|GEORGE|:#High Overseer#',
    '|ALEX|:#Assistant Game Developer#'
]);

// practice(['3',
// '|STEFAN|:#H1gh Overseer#',
// '|IVAN|:#Master detective#',
// '|KARL|: #Marketing lead#']);