function practice(param) {
    let parkingLot = {};
    for (const element of param) {
        let [direction, carNumber] = element.split(', ');
        if(direction === "IN"){
            parkingLot[carNumber] = 1;
        }else if(direction === "OUT"){
             delete parkingLot[carNumber];
        }
    }
    let sortedArr = Object.keys(parkingLot).sort((a,b) => a.localeCompare(b));
    for (const key of sortedArr) {
        if(sortedArr === []){
            console.log(`Parking Lot is Empty`);
        }else{
            console.log(key);
        }
    }
}
practice(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);