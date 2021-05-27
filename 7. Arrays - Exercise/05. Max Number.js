function practice(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let isBigger = true
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                isBigger = false;
                break;
            }
        }
        if (isBigger) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr.join(' '));
}
practice([14, 24, 3, 19, 15, 17])