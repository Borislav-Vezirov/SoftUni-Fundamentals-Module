function practice(arr) {
    let result = '';
    let last = arr.pop();
    for (let i = 0; i < arr.length; i+= Number(last)) {
        result += `${arr[i]} `;
    }
    console.log(result);
}
practice(['1', '2', '3', '4', '5', '6'])