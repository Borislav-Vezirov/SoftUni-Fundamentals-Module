function practice(param) {
    let arr = param.slice().map(Number);
    let result = [];
    let arrLength = arr.length;
    while(arrLength !== 0){
        let count = 0;
        let temp = 0;
        for (let i = 0; i < arr.length; i++) {
            let current = arr[i];
            if(current !== 30){
                arr[i]++;
                count += 195;
                if(current === 30){
                    temp++
                }
            }
        }
        if(temp!==0){
            arrLength--;
        }
        if(count !== 0){
            result.push(count);
        }
    }
    console.log(result.join(', ')); 
    return result.reduce((a,b) => a + b) * 1900 + " pesos";   
}
console.log(practice([21, 25, 28]));