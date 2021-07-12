function practice(input) {
    let sequence = input.shift().split(' ').map(Number);
    let current  = input.shift();
    while(current !== 'end'){

        let [command, index1, index2] = current.split(' ');
        index1 = Number(index1);
        index2 = Number(index2);

        switch(command){
            case 'swap'     :
                swap(index1, index2);break;
            case 'multiply' :
                multiply(index1, index2);break;
            case 'decrease' :
                decrease();break;
                let m
        }

        current = input.shift();
    }

    console.log(sequence.join(', '));

    function swap(a, b){
        let first  = sequence[a];
        let second = sequence[b];
        sequence.splice(b, 1, first);
        sequence.splice(a, 1, second);
    }

    function multiply(a,b){
        let result = sequence[a] * sequence[b];
        sequence.splice(a, 1, result);
    }

    function decrease(){
        sequence = sequence.map(x => x - 1);
    }
}
practice([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end']);