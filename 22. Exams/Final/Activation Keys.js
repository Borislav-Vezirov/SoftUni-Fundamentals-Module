function practice(arr) {
    let key = arr.shift();
    let actions = {
        'Slice'    : slice,
        'Flip'     : flip,
        'Contains' : contains
    }
    let current;
    while((current = arr.shift()) !== 'Generate'){
        let [command, ...rest] = current.split('>>>');
        let action = actions[command];
        action(rest);
    }

    console.log(`Your activation key is: ${key}`);

    function slice(rest){
        let startIndex = +rest[0];
        let endIndex   = +rest[1];
        let first  = key.slice(0, startIndex);
        let second = key.slice(endIndex); 
        key = first + second;
        console.log(key);
    }

    function flip(rest){
        let upOrLowCase = rest[0];
        let startIndex  = +rest[1]; 
        let endIndex    = +rest[2]; 
        let first  = key.slice(0, startIndex);
        let chars  = key.slice(startIndex, endIndex);
        let second = key.slice(endIndex);
        if(upOrLowCase === 'Upper'){
            chars = chars.toUpperCase();
        }else if(upOrLowCase === 'Lower'){
            chars = chars.toLowerCase();
        }
        key = first + chars + second;
        console.log(key); 
    }

    function contains(rest){
        let substring = rest[0];
        if(key.includes(substring)){
            console.log(`${key} contains ${substring}`);
        }else{
            console.log(`Substring not found!`);
        }
    }
}
practice(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"]);