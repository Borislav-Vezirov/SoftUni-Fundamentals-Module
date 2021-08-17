function practice(arr) {
    let message = arr.shift();
    let current;
    while((current = arr.shift()) !== 'Decode'){
        let [command, ...tokens] = current.split('|');
        if(command === 'Move'){
            tokens[0] = Number(tokens[0]);
            let letters = message.slice(0, tokens[0]);
            message = message.slice(tokens[0])
            message = message + letters 
        }else if(command === 'Insert'){
            let index = Number(tokens[0]);
            let value = tokens[1];
            let firstPart = message.substring(0, index);
            message = message.slice(index);
            message = firstPart + value + message;
        }else if(command === 'ChangeAll'){
            let oldStr = tokens[0];
            let newStr = tokens[1];
            while(message.includes(oldStr)){
               message = message.replace(oldStr, newStr);
            }
        }
    }
    console.log(`The decrypted message is: ${message}`);
}
practice([ 'zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode' ]);