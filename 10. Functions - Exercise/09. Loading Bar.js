function practice(param) {
    param = +param;
    let result = [];
    let percent = param / 10;
    for (let i = 1; i <=  10; i++) {
        if(i > percent){
            result.push('.')
        }else{
            result.push('%')
        }
    }
    result = result.join('')
    if(percent === 10){
        console.log('100% Complete!');
        console.log(`[${result}]`); 
    }else{
        console.log(`${param}% [${result}]`);
        console.log('Still loading...');
    }
}
practice(30);