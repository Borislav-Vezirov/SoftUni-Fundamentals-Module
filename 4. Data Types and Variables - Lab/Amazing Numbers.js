function practice(n){
    n = n.toString(); 
    let sum = 0
    let k = ''
    for (let i = 0; i < n.length; i++) {
        k += n[i];
        sum += Number(n[i]);
    }
    let result = sum.toString().includes('9')
    console.log(result 
        ? `${n} Amazing? True` 
        : `${n} Amazing? False`);
}
practice(1233)