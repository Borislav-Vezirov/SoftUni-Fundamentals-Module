function practice(param, param2) {
    let newArr = param.slice();
    for (let i = 0; i < param2.length; i++) {
        let current = param2[i].split(' ')
        let command = current.shift();
        switch (command) {
            case 'add'     : add(current[0], current[1]); break;
            case 'addMany' : 
                let index = Number(current.shift());
                current = current.map(Number);
                addMany(index, current); break;
            case 'contains': contains(Number(current[0])); break;
            case 'remove'  : remove(current[0])
            case 'shift'   : shift(current[0]); break;
            case 'sumPairs': sumPairs(); break;
            case 'print'   : return newArr;
        }
    }

    function add(index, element) {
        return newArr.splice(index, 0, ...Number(element));
    }

    function addMany(index, elements) {
        newArr.splice(index, 0, elements)
        return newArr;
    }

    function contains(element) {
        if (newArr.includes((Number(element)))) {
            let index = newArr.indexOf(element);
            console.log(index);
        } else {
            console.log("-1");
        }
    }

    function remove(index) {
        return newArr.splice(index, 1);
    }

    function shift(position) {
        let shifted = newArr.splice(position, 0);
        return newArr.unshift(shifted);
    }

    function sumPairs() {
        let result = [];
        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i + 1] === "undefined" || newArr[i + 1] === NaN) {
                break;
            } else {
                result.push(i + (i + 1))
            }
        }
        return result;
    }

    function print() {
        return newArr;
    }

}
console.log(practice([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'] ));


// let m = [1,2,3,4];
// let n = [5,6,7]
// m.splice(3, 0, ...m);