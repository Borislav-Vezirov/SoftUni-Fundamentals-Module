function practice(arr) {
    let newArr = arr[0].split('|')
    let health = 100;
    let bestRoom = 0;
    let coins = 0;
    let isDead = false;
    for (let i = 0; i < newArr.length; i++) {
        let currArr = newArr[i].split(' ');
        bestRoom += 1;
        if(currArr[0] === 'potion'){
            if(health + Number(currArr[1]) > 100){
                console.log(`You healed for ${100 - health} hp.`);
                console.log(`Current health: 100 hp.`);
                health = 100;
            }else{
                console.log(`You healed for ${currArr[1]} hp.`); 
                console.log(`Current health: ${health += Number(currArr[1])} hp.`);
            }
        }else if(currArr[0] === 'chest'){
            console.log(`You found ${Number(currArr[1])} coins.`);
            coins += Number(currArr[1]);
        }else{
            health -= Number(currArr[1]);
            if(health <= 0){
                console.log(`You died! Killed by ${currArr[0]}.`);
                console.log(`Best room: ${bestRoom}`);
                isDead = true;
                break;
            }else{
                console.log(`You slayed ${currArr[0]}.`);
            }
        }
    }
    if(!isDead){
        console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`);
    }
}
practice(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])