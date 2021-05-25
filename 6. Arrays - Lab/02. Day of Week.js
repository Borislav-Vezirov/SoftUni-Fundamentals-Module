function practice(n) {
    let arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if(n >= 1 && n <= 7){
        console.log(arr[n - 1]);
    }else{
        console.log('Invalid day');
    }
}
practice(6)