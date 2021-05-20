function exam(arg) {
    if(arg % 4 === 0 && arg % 100 !== 0 || arg % 400 === 0){
        console.log('yes');
    }else{
        console.log('no');
    }
}
exam(4)