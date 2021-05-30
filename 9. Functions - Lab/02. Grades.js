function practice(a) {
    if( a < 3){
        console.log(`Fail (2)`);
    }else if(a < 3.5){
        console.log(`Poor (${a.toFixed(2)})`);
    }else if(a < 4.5){
        console.log(`Good (${a.toFixed(2)})`);
    }else if(a < 5.5){
        console.log(`Very good (${a.toFixed(2)})`);
    }else if(a <= 6){
        console.log(`Excellent (${a.toFixed(2)})`);
    }
}
practice(4.50)