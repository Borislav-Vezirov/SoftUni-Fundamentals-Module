function practice(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === n){
                console.log(`${arr[i]} ${arr[j]}`);
            }
        }
    }
}
practice([6,5,3,4,3,3], 7)