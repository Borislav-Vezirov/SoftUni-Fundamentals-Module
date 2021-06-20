function practice(arr) {

    let collection = {};

    let cardPower = {
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    }
    let cardType = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    }

    for (let el of arr) {
        let [name, cards] = el.split(': ');
        cards = cards.split(', ')
        if (!collection.hasOwnProperty(name)) {
            collection[name] = [];
        }
        for (let card of cards) {
            if(!collection[name].includes(card)){
                collection[name].push(card)
            }
        }
    }
     Object.keys(collection).forEach(el => {
        let sum = 0;
        for (let card of collection[el]) {
            let tokens = card.split('')
            let type   = tokens.pop();
            let power  = tokens.join('')
            if(cardPower.hasOwnProperty(power)){
                power  = cardPower[power];
            }
            type   = cardType[type];            
            sum   += Number(power) * type;
        }
        console.log(`${el}: ${sum}`);
    })
}
practice([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);