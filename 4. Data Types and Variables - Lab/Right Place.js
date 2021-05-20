function practice(n,m,k){
    let result = '';
    for (let i = 0; i <n.length; i++) {
        if(n[i] === '_'){
            result += m;
        }else{
            result += n[i];
        } 
    }
    if(result === k){
        console.log('Matched');
    }else{
        console.log('Not Matched');
    }
}
practice('Str_ng', 'I', 'Strong')