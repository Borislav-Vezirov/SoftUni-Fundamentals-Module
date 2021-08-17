function practice(arr) {
    let collection = {};
    let n = +arr.shift();
    for (let i = 0; i < n; i++) {
       let current = arr.shift().split('<->');
       let plant   = current[0];
       let rarity  = +current[1] ;
       collection[plant] = {rarity, rating: [], average: 0}
    }

    for (let el of arr) {
        if(el === 'Exhibition'){
            break;
        }
        let [command, ...tokens] = el.split(': ');
        let [plant, number] = tokens[0].split(' - ');
        let rating = +number;
        if(command === 'Rate'){
            collection[plant].rating.push(rating);
            let sum = 0
            for (let el of collection[plant].rating) {
                sum += el;
                collection[plant].average = sum / collection[plant].rating.length;
            }
        }else if(command === 'Update'){
            collection[plant].rarity = rating
        }else if(command === 'Reset'){
            collection[plant].rating = [];
            collection[plant].average = 0
        }else{
            console.log('error');
        }
    }
    console.log('Plants for the exhibition:');
    Object.entries(collection).sort((a,b) => {
        return b[1].rarity - a[1].rarity || b[1].average - a[1].average
    }).forEach(x => {
        console.log(`- ${x[0]}; Rarity: ${x[1].rarity}; Rating: ${x[1].average.toFixed(2)}`);
    })
}
practice([
    '3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition']);