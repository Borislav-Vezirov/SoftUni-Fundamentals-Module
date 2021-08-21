function practice(arr) {
    let cookies = arr.shift().split(', ');

    for (let el of arr) {
        let [command, ...tokens] = el.split(' ');
        if (command === 'OutOfStock') {
            for (let i = 0; i < cookies.length; i++) {
                if(cookies[i] === tokens[0]){
                    cookies[i] = 'None'
                }
            }
        }else if(command === 'Required'){
            let cookie = tokens[0];
            let index  = Number(tokens[1]);
            if(index > 0 && index < cookies.length && cookies[index] !== 'None'){
                cookies.splice(index, 1, cookie);
            } 
        }else if(command === 'Last'){
            cookies.push(tokens[0]);
        }
    }
    console.log(cookies.filter(x => x !== 'None').join(' '));
}
practice(["Vanilla, Chocolate, Raspberry, Vegan",
"Required SB 3",
"OutOfStock Walnuts",
"No More Money"])

// practice(["Vanilla, Chocolate, Raspberry, Chocolate",
//     "OutOfStock Chocolate",
//     "Required BBB 3",
//     "No More Money"
// ])