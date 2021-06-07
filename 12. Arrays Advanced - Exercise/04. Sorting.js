function practice(param) {
    let result = [];
    param = param.sort((a,b) => b - a);
    let newArr = param.slice();
    for (let i = 0; i < newArr.length; i++) {
        let current = newArr[i];
        if(i % 2 === 0){
            current = param.shift();
        }else{
            current = param.pop();
        }
        result.push(current)
    }
    console.log(result.join(' ')); 
}
practice([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);