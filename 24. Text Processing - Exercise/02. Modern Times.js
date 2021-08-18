function exercise(param){ 
    param.match(/#[A-Za-z]+/g).map(x => console.log(x.split('#').join('')));
}
exercise('Nowadays everyone uses # to tag a #special word in #socialMedia');