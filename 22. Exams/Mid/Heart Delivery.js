function practice(arr) {
    let neigborhood = arr.shift().split('@').map(Number)
    let start = 0
    for (let el of arr) {
        if(el === 'Love!'){
            break;
        }
        let [command, index] = el.split(' ');
        index = Number(index);
        start += index;

        if(start >= neigborhood.length){
            start = 0
        }
        
        if(neigborhood[start] !== 0){
            neigborhood[start] -= 2;
            if(neigborhood[start] <= 0){
                neigborhood[start] = 0;
                console.log(`Place ${start} has Valentine's day.`);
            }
        }else{
            console.log(`Place ${start} already had Valentine's day.`);
        }
    }

    console.log(`Cupid's last position was ${start}.`);
    let count = 0
    let isSuccessfull = true;
    neigborhood.forEach(el => {
        if(el !== 0){
            count ++
            isSuccessfull = false;
        }
    })
    isSuccessfull ? console.log(`Mission was successful.`)
                  : console.log(`Cupid has failed ${count} places.`);

}
// practice([
//     '2@4@2', 'Jump 2',
//     'Jump 2', 'Jump 8',
//     'Jump 3', 'Jump 1',
//     'Love!'
// ]);
practice([ '10@10@10@2', 'Jump 1', 'Jump 2', 'Love!' ]);