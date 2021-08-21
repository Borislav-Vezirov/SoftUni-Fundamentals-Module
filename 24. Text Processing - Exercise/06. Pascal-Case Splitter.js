function exercise(str) {
    let lower = str.toLowerCase();
    let result = [];
    let current = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== lower[i]) {
            if(current.length > 0){
                result.push(current);
            }
            current = str[i];
        }else{
            current += str[i];
        }
    }
    if(current.length > 0){
        result.push(current);
    }
    console.log(result.join(', '));
}
exercise('SplitMeIfYouCanHaHaYouCantOrYouCan');
//exercise('HoldTheDoor')