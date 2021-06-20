function practice(param) {
    let words = {};

    for (const word of param) {
        if(!words.hasOwnProperty(word)){
            words[word] = 1;
        }else{
            words[word] += 1;
        }
    }
    let sortedArr = Object.entries(words).sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA);
    for (let [key, value] of sortedArr) {
        console.log(`${key} -> ${value} times`);
    }
}
practice(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);