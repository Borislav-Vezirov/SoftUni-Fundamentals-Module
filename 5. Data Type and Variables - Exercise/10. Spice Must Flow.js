function practice(n1) {
    let days = 0
    let collectAmount = 0
    for (let i = n1; i >= 100; i-= 10) {
       days += 1;
       collectAmount += (i - 26);
    }
    if(collectAmount >= 26){
        collectAmount -= 26;
    }
    console.log(days);
    console.log(collectAmount);
}
practice(111)