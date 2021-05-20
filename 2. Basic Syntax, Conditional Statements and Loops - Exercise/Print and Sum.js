function exam(arg, arg2) {
    let start = +arg;
    let end = +arg2;
    let numbers = ''
    let sum = 0;
    for(let i = start; i <= end; i++){
        let n = i;
        numbers += `${n} `
        sum += n;
    }
    console.log(numbers);
    console.log(`Sum: ${sum}`);
}
exam(50, 60)