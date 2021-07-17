function practice(arr) {
    let sequence = arr.shift().split(' ');
    let moves    = 0;
    for (let el of arr) {
        if (el === 'end') {
            console.log(`Sorry you lose :(\n${sequence.join(' ')}`);
            break;
        }

        let [index1, index2] = el.split(' ');
        moves++
        
        if (index1 < 0 || index1 >= sequence.length || index2 < 0 || index2 >= sequence.length ||
            index1 === index2) {
                sequence.splice(sequence.length / 2, 0, `-${moves}a`,`-${moves}a`)
                console.log('Invalid input! Adding additional elements to the board');
            }else{
                if(sequence[index1] === sequence[index2]){
                    console.log(`Congrats! You have found matching elements - ${sequence[index1]}!`);
                    if(index1 > index2){
                        let temp = index2;
                        index2   = index1;
                        index1   = temp;
                    }
                    sequence.splice(index2, 1);
                    sequence.splice(index1, 1);
                }else{
                    console.log('Try again!');
                }
            }
            if(sequence.length <= 0){
                console.log(`You have won in ${moves} turns!`);
                break;
            }
        }
    }
    practice([
        '1 1 2 2 3 3 4 4 5 5 ',
    '1 0',
    '-1 0',
    '1 0 ',
    '1 0 ',
    '1 0 ',
    'end'
]);