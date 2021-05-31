function practice(a, b, c) {
    let add = (a,b) => a+b;
    let subtract = c => add(a,b) - c;
    console.log(subtract(c));
}
practice(23, 6, 10)