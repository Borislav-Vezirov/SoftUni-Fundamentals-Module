function exercise(word, text) {
    word2 = word.toLowerCase();
    text2 = text.toLowerCase().split(' ');
    let notFound = true;
    for (const el of text2) {
        if(el === word2){
            console.log(word);
            notFound = false
            break;
        }
    }
    if(notFound){
        console.log(`${word} not found!`);
    }
}
exercise('javascript', 'JavaScript is the best programming language');
exercise('python', 'JavaScript is the best programming language');