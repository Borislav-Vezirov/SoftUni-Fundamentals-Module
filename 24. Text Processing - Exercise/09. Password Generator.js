function exercise(arr) {
    let str1 = arr.shift();
    let str2 = arr.shift();
    let word = arr.shift().toUpperCase().split('');
    let pattern = /[aeiou]/g;
    let match = str1.match(pattern);
    let match2 = str2.match(pattern);
    let index = 0
    for (const vowels of match) {
        str1 = str1.replace(vowels, word[index])
        index++
        if(index > word.length){
            index = 0;
        }
    }

    for (const vowels of match2) {
        if(index >= word.length){
            index = 0;
        }
        str2 = str2.replace(vowels, word[index])
        index++
    }
    let pass = str2.split('').reverse().join('') + str1.split('').reverse().join('') 
    console.log(`Your generated password is ${pass}`);
}
exercise([
    'ilovepizza', 'ihatevegetables',
    'orange'
]);