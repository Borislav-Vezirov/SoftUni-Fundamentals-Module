function practice(arr) {
    let countOfOreders = Number(arr.shift())
    let total = 0;
    for (let i = 1; i <= countOfOreders; i++) {
        let pricePerCapsule = Number(arr.shift()); 
        let days            = Number(arr.shift()); 
        let capsulesCount   = Number(arr.shift());
        let sum = (days * capsulesCount) * pricePerCapsule;
        total += sum;
        console.log(`The price for the coffee is: $${sum.toFixed(2)}`); 
    }
    console.log(`Total: $${total.toFixed(2)}`);
}
// practice(["2",
// "4.99",
// "31",
// "3",
// "0.35",
// "31",
// "5"]);

practice(["1",
"1.53",
"30",
"8"])
  