function practice(arr) {
    let newArr = arr[0].split('');
    let result = '';
    for (let el of newArr) {
        if(!isNaN(el) && el !== ' '){
            el = Number(el);
            result += el; 
        }
    }
    result = result.split('').reduce((a,b) => a *b);
    console.log(`Cool threshold: ${result}`);
    let regex = /(::|\*\*)([A-Z][a-z]{2,})\1/g;
    let match = arr[0].match(regex);
    console.log(`${match.length} emojis found in the text. The cool ones are:`);
    if(match){
        for (let el of match) {
            let emoji = el.split('');
            emoji.splice(0, 2);
            emoji.splice(emoji.length - 2, 2);
            let sumOFChars = 0
            for (let char of emoji) {
                sumOFChars += char.charCodeAt();                
            }
            if(sumOFChars >= result){
                console.log(el);
            }
        }    
    }
}
practice([
    "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."
  ]);