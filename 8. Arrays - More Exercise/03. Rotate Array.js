function practice(arr) {
    let rotation = Number(arr.pop());
    let usefullRotation = rotation % arr.length;
    for (let i = 1; i <= usefullRotation; i++) {
        let curr = arr.pop();
        arr.unshift(curr);
    }
    console.log(arr.join(' '));
}
practice(['Banana', 'Orange', 'Coconut', 'Apple', '15'])

// ['1', '2', '3', '4', '2']
// ['Banana', 'Orange', 'Coconut', 'Apple', '15']
