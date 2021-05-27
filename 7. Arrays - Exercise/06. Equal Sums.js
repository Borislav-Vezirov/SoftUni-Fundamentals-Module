function practice(arr) {
    let isEqual = false;
    let isNull = false;
    let isNo = false;
    let index = 0
    for (let i = 0; i < arr.length; i++) {
        isNo = false;
        let tempLeft = 0;
        let tempRight = 0;
        for (let j = 0; j < i; j++) {
            tempLeft += +arr[j]
        }
        for (let k = i + 1; k < arr.length; k++) {
            tempRight += +arr[k]
        }
        if (tempLeft === 0 && tempRight === 0) {
            isNull = true;
        } else if (tempLeft === tempRight) {
            isEqual = true;
            index = i;
            break;
        } else {
            isNo = true;
        }
    }
    if(isNo){
        console.log('no');
    }else if(isNull){
        console.log(0);
    }else if(isEqual){
        console.log(index);
    }
}
practice([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])
