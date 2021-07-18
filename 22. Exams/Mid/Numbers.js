function practice(input) {
    input = input.split(' ').map(Number);
    let average = input.reduce((a, b) => a + b) / input.length;
    let result  = input.filter(x => x > average).sort((a, b) => b - a);
    if (result.length >= 5) {
        let newArr = result.slice(0, 5).sort((a, b) => b - a);;
        console.log(newArr.join(' '));
    }else if(result.length < 1){
        console.log('No');
    }
     else{
        console.log(result.join(' '));
    }
}
practice('10 20 30 40 50');