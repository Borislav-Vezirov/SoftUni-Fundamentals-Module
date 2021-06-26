function practice(arr) {
    let regEx = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let match = regEx.exec(arr);
    let result = []
    while(match !== null){
        result.push(match);
        match = regEx.exec(arr)
    }
    console.log(result.join(' '));
}
practice([
  'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan\tIvanov']);