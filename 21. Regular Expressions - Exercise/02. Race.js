function practice(arr) {
    let collection = {};
    let names = arr.shift().split(', ');
    for (const el of names) {
        collection[el] = 0;
    }
    let current;
    while((current = arr.shift()) !== 'end of race'){
        let word  = /[A-Za-z]/g;
        let digit = /\d/g;
        let name  = current.match(word).join("");
        let run   = current.match(digit).map(Number).reduce((a,b) => a + b);
        if(name in collection){
            collection[name] += run;
        }
    }
    let result = Object.keys(collection)
    .sort((a, b) => collection[b] - collection[a]);
    console.log(`1st place: ${result[0]}`);
    console.log(`2nd place: ${result[1]}`);
    console.log(`3rd place: ${result[2]}`);
}
practice([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
])