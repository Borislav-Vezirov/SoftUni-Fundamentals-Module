function practice(arr) {
    let collection = {};
    let words  = arr.shift();
    let tokens = words.split(' | ');
    for (let el of tokens) {
        let [word, definition] = el.split(': ');
        if(!collection.hasOwnProperty(word)){
            collection[word] = []
        }
        collection[word].push(definition);
    }
    
    let testWords = arr.shift().split(' | ');

    let command = arr.shift();
    if(command === 'Test'){
        for (const el of testWords) {
            if(collection.hasOwnProperty(el)){
                console.log(el + ":");
                collection[el].sort((a, b) => b.length - a.length).forEach(x => {
                    console.log("-" + x);
                })
            }
        }
    }else if(command === 'Hand Over'){
        let result = [];
        Object.keys(collection).sort((a, b) => a.localeCompare(b)).forEach(x => {
            result.push(x);
        })
        console.log(result.join(' '));
    }
}
// practice(["programmer: an animal, which turns coffee into code | developer: a magician",
// "fish | domino",
// "Hand Over"]);

// practice(["care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
// "care | kitchen | flower",
// "Test"])

practice(["tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance",
"bit | code | tackle",
"Test"])