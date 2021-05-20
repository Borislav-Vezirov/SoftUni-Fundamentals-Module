function practice(n,m,k){
    let result = n + m + k;
    if(result % 1 === 0){
        console.log(`${result}-Integer`);
    }else{
        console.log(`${result}-Float`);
    }
}
practice(9,100,1.1)