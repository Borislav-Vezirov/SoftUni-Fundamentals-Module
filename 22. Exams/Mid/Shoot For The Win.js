function practice(arr) {
    let sequence = arr.shift().split(' ').map(Number);
    let count = 0
    for (let el of arr) {
        if(el === 'End'){
            break;
        }
        el = Number(el);
        let temp = sequence[el];
        if(el >= 0 && el < sequence.length && sequence[el] !== -1){
            sequence[el] = -1;
            count++;
            sequence = sequence.map(x => {
                if(x !== -1){
                    if(x > temp){
                        x -= temp;
                    }else{
                        x += temp
                    }
                }
                return x;
            })
        }
    }
    console.log(`Shot targets: ${count} -> ${sequence.join(' ')}`);
}
practice([ '24 50 36 70', '0', '4', '3', '1', 'End' ]);
//practice([ '30 30 12 60 54 66', '5', '2', '4', '0', 'End']);
