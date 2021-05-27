function practice(arr, n) {
    let newArr = arr;
   for (let i = 1; i <= n; i++) {
        let temp = arr.shift();
        newArr.push(temp)
    }
    console.log(newArr.join(' '));
}
practice([2, 4, 15, 31], 5)