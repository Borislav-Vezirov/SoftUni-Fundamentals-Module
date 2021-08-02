function practice(arr) {
    let n = arr.shift();
    for (let el of arr) {
        let regex = /@#+([A-Z][A-Za-z\d]{4,}[A-Z])@#+/g;
        let match = el.match(regex);
        if(match){
            let splitedMatch = match[0].split('');
            let isDigit      = false;
            let concatDigits = '';
            for (let char of splitedMatch) {
                if(!isNaN(char)){
                    isDigit      = true;
                    concatDigits += char;
                }
            }
            isDigit ? console.log(`Product group: ${concatDigits}`) : console.log('Product group: 00');
        }else{
            console.log('Invalid barcode');
        }
    }
}
practice([ '3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che46sE@##' ]);