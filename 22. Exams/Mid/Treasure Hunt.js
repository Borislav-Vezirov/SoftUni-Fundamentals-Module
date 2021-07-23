function practice(arr) {
    let initialStateOfChest = arr.shift().split('|');
    let isAllSteal = false;
    for (let el of arr) {
        let [command, ...tokens] = el.split(' ');
        if(command === 'Loot'){
            for (let item of tokens) {
                if(!initialStateOfChest.includes(item)){
                    initialStateOfChest.unshift(item);
                }
            }
        }else if(command === 'Drop'){
            let index = Number(tokens[0]);
            if(index > 0 && index < initialStateOfChest.length){
                let temp = initialStateOfChest.splice(index, 1).join(' ');
                initialStateOfChest.push(temp);
            }
        }else if(command === 'Steal'){
            let count = Number(tokens[0]);
            if(count < initialStateOfChest.length){
                let removed  = initialStateOfChest.slice(-count);
                initialStateOfChest.splice(initialStateOfChest.length - count, count)
                console.log(removed.join(', '));
            }else{
                console.log(initialStateOfChest.join(', '));
                isAllSteal = true;
                initialStateOfChest = [];
            }
        }
    }
    let sum = 0
    if(isAllSteal){
        console.log('Failed treasure hunt.');
    }else{
        for (const el of initialStateOfChest) {
            sum += el.length   
        }
        console.log(`Average treasure gain: ${(sum / initialStateOfChest.length).toFixed(2)} pirate credits.`);
    }
}
practice([
    'Diamonds|Silver|Shotgun|Gold',
    'Loot Silver Medals Coal',
    'Drop -1',
    'Drop 1',
    'Steal 6',
    'Yohoho!']);