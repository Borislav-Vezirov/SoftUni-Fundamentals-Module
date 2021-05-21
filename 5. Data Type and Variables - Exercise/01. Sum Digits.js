function practice(n) {
    n = n.toString();
    let result = 0
    for (let i = 0; i < n.length; i++) {
        result += Number(n[i]);        
    }
    console.log(result);
}
practice(245678)