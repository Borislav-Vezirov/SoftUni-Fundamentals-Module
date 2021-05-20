function exam(arg) {
    for (let i = 1; i <= arg; i++) {
        let result = '';
        for (let j = 1; j <= i; j++) {
            result += `${i} `;
        }
        console.log(result);
    }
}
exam(3)