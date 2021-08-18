function exercise(param1, param2){
    let words    = param1.split(', ');
    let sentence = param2.split(' ');
    for (let word of words) {
        let temp = '*'.repeat(word.length);
        while(sentence.includes(temp)){
            let index = sentence.indexOf(temp);
            sentence[index] = word
        }
    } 
    console.log(sentence.join(' '));
}
exercise('great, learning', 'softuni is ***** place for ******** new programming languages');