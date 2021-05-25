function practice(n, arr) {
    let newArr = arr.splice(0,n).reverse().join(' ')
    console.log(newArr);
}
practice(3, [10, 20, 30, 40, 50])