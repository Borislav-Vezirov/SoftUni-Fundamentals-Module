function practice(arr) {
    let str = arr.shift();
    let regex = /(@|#)(?<word>[A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;
    let match = str.match(regex);
    if (match !== null) {
        console.log(`${match.length} word pairs found!`);
    } else {
        console.log('No word pairs found!');
    }
    let collection = [];
    for (let el of match) {
        let [...tokkens] = el.split('');
        tokkens.shift();
        tokkens.pop();
        tokkens.splice((tokkens.length / 2 - 1), 2)
        tokkens    = tokkens.join('')
        let first  = tokkens.substring(0, tokkens.length / 2);
        let temp   = tokkens.substring(tokkens.length / 2, tokkens.length);
        let second = temp.split('').reverse().join('');
        if (first === second) {
            collection.push({
                first,
                temp
            })
        }
    }
    if(collection.length > 0){
        console.log('The mirror words are:');
        let result = [];
        for (const el of collection) {
            result.push(`${el.first} <=> ${el.temp}`);
        }
        console.log(result.join(', '));
    }else{
        console.log('No mirror words!');
    }
}
practice([
    '@mix#tix3dj#poOl##loOp#wl@@bongsong%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);