function practice(param) {
    let result = [];
    for (let element of param) {
        let current = element.split(' ');
        let name = current.shift();
        let isGoing = current.join(' ');
        switch(isGoing){
            case 'is going!'     : going(name); break;
            case 'is not going!' : notGoing(name); break;
        }
    }

    function going(name){
        if(result.includes(name)){
            console.log(`${name} is already in the list!`); 
        }else{
            return result.push(name);
        }
    }
    function notGoing(name){
        if(result.includes(name)){
            let index = result.indexOf(name);
            return result.splice(index, 1)
        }else{
            console.log(`${name} is not in the list!`); 
        }
    }
    return result.join('\n');
}
console.log(practice(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
));