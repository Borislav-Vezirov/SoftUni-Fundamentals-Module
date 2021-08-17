function practice(arr) {

    let message = arr.shift();
    let current = arr.shift();

    let actions = {
        'InsertSpace': insertSpace,
        'Reverse': reverse,
        'ChangeAll': changeAll
    }

    while (current !== 'Reveal') {
        let [command, ...tokens] = current.split(':|:');
        let action = actions[command];
        action(tokens);
        current = arr.shift();
    }

    console.log(`You have a new text message: ${message}`);

    function insertSpace(tokens){
        let index = Number(tokens[0]);
        let first = message.substring(0, index);
        let last  = message.substring(index);
        message   = first + ' ' + last;
        console.log(message);
    }

    function reverse(tokens){
        let str = tokens[0];
        if(message.includes(str)){
            let index = message.indexOf(str);
            let first = message.substring(0, index);
            let last  = message.slice(index + str.length);
            str = str.split('').reverse().join('');
            message = first + last + str;
            console.log(message);
        }else{
            console.log('error');
        }
    }

    function changeAll(tokens){
        let [str, replacement] = tokens;
        let pattern = new RegExp(str, 'g');
        message = message.replace(pattern, replacement);
        console.log(message);
    }
}
practice([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);