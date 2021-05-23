function practice(n1, n2, n3) {
    if(n2 === '+'){
        console.log((n1 + n3).toFixed(2));
    }else if(n2 === '-'){
        console.log((n1 - n3).toFixed(2));
    }else if(n2 === '/'){
        console.log((n1 / n3).toFixed(2));
    }else if(n2 === '*'){
        console.log((n1 * n3).toFixed(2));
    }
  }
  practice(5, '+', 10)