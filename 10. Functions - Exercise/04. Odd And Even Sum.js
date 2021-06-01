function practice(a) {
    let b = a.toString();
    let odd = 0;
    let even = 0;
    for (let i = 0; i < b.length; i++) {
        let curr = Number(b[i])
        if(curr % 2 === 0){
            even += curr;
        }else{
            odd += curr;
        }
    }
    return `Odd sum = ${odd}, Even sum = ${even}`
}
console.log(practice(1000435));