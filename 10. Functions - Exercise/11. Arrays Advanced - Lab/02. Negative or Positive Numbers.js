function practice(param) {
    let result = [];
        let termp = param.map(x => {
        if(x < 0){
            result.unshift(x);
        }else{
            result.push(x);
        }
    })
    return result.join("\n")
}
console.log(practice([3, -2, 0, -1]));