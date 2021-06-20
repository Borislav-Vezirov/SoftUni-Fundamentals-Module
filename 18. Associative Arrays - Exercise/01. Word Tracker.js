function practice(param) {
    let words = {};
    let selectedWords = param.shift().split(' ');
    for (const word of selectedWords) {
        words[word] = 0;
    }
    for (const element of param) {
        if(words.hasOwnProperty(element)){
            words[element]++;
        }
    }
    let sortedArr = Object.entries(words).sort(([kA, vA], [kB, vB]) => vB - vA);
    for (let [key, value] of sortedArr) {
        console.log(`${key} - ${value}`);
    }
}
practice(['this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
,'words','this','and','sentence','because','this','is','your','task']);