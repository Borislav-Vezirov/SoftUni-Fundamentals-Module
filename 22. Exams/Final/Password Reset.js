function practice(arr) {
    let sequence = arr.shift();
    let current;
    let actions = {
        "TakeOdd"   : takeOdd,
        "Cut"       : cut,
        "Substitute": substitute
    }

    while ((current = arr.shift()) !== "Done") {
        let [command, ...tokens] = current.split(' ');
        let action = actions[command];
        action(tokens);
    }

    console.log(`Your password is: ${sequence}`);

    function takeOdd() {
        let result = ''
        for (let i = 0; i < sequence.length; i++) {
            if(i % 2 !== 0){
                result += sequence[i];
            }
        }
        sequence = result;
        console.log(sequence);
    }

    function cut(tokens) {
        let index  = +tokens[0];
        let length = index + (+tokens[1]);
        let first  = sequence.substring(0, index);
        let last   = sequence.slice(length);
        sequence   = first + last;
        console.log(sequence);
    }

    function substitute(tokens) {
        let substring  = tokens[0];
        let substitute = tokens[1];
        if(sequence.includes(substring)){
            let pattern = new RegExp(substring, 'g');
            sequence = sequence.replace(pattern, substitute);
            console.log(sequence);
        }else{
            console.log('Nothing to replace!');
        }
    }
}
practice([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
]);