function bitcoin(arg){
    let countDays = 0;
    let flag = 0;
    let total = 0;
    let boughtBitcoin = 0;
    for (let i = 0; i < arg.length; i++) {
        countDays++   
        let mining = arg[i]; 
        if(countDays % 3 === 0){
            mining *= 0.7;
        }
        mining *=  67.51
        total += mining
        if(total >= 11949.16){
            boughtBitcoin += Math.floor(total / 11949.16)
            total %= 11949.16;
            if(flag === 0){
                flag = countDays;
            }
        }
    }
    console.log(`Bought bitcoins: ${boughtBitcoin}`);
    if(flag !== 0){
        console.log(`Day of the first purchased bitcoin: ${flag}`);
    }
    console.log(`Left money: ${total.toFixed(2)} lv.`);
    
}
bitcoin([3124.15, 504.212, 2511.124])