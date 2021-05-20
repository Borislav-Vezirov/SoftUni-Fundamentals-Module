function exam(arg1, arg2) {
    if( arg2 >= 15){
        arg2 = 15;
    }
    arg1 = arg1.toFixed(arg2);
    console.log(parseFloat(arg1));
}
exam(30)