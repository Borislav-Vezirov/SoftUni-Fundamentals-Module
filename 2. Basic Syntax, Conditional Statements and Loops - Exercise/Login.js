function exam(arg) {
    let username = arg.shift();
    let pass = username.split('').reverse().join('');
    let option = 0
    for (let j = 0; j < arg.length; j++) {
        option += 1;
        if(option === 4){
            console.log(`User ${username} blocked!`);
            break;
        }
        if(arg[j] === pass){
            console.log(`User ${username} logged in.`);
            break;
        }else{
            console.log('Incorrect password. Try again.');
        }
    }
}
exam(['sunny','rainy','cloudy','sunny','not sunny'])