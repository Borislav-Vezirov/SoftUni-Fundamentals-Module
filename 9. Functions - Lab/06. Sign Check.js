function practice(a, b, c) {
    let isPositive = (x,y,z) => {
        if(x*y*z >= 0){
            return "Positive"
        }else{
            return "Negative"
        }
    }
    console.log(isPositive(a,b,c));
}
practice(-6, -12, 14)