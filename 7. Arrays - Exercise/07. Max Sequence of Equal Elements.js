function practice(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let tempArr = [+arr[i]];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                tempArr.push(arr[j]);
            } else {
                break;
            }
        }
        if(tempArr.length > newArr.length){
            newArr = tempArr;
        }
    }
    console.log(newArr.join(' '));
}
practice([1, 1, 1, 2, 3, 1, 3, 3])