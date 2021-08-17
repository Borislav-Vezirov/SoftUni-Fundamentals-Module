function practice(arr) {
    let n = Number(arr.shift());
    let collection = {};
    for (let i = 0; i < n; i++) {
        let current = arr.shift();
        let [piece, composer, key] = current.split('|')
        collection[piece] = {composer, key};
    }
    for (let el of arr) {
        let [command, ...tokens] = el.split('|');
        if(command === 'Add'){
            let [piece, composer, key] = tokens;
            if(collection[piece]){
                console.log(`${piece} is already in the collection!`);
            }else{
                collection[piece] = {composer, key};
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        }else if(command === 'Remove'){
            if(collection[tokens[0]]){
                delete collection[tokens[0]]
                console.log(`Successfully removed ${tokens[0]}!`);
            }else{
                console.log(`Invalid operation! ${tokens[0]} does not exist in the collection.`);
            }
        }else if(command === 'ChangeKey'){
            let [piece, newKey] = tokens;
            if(collection[piece]){
                collection[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            }else{
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }
    Object.entries(collection).sort((a, b) => {
        return a[0].localeCompare(b[0]) || a[1].composer.localeCompare(b[1].composer)
    }).forEach(x => {
        console.log(`${x[0]} -> Composer: ${x[1].composer}, Key: ${x[1].key}`);
    })
    
}
practice([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);