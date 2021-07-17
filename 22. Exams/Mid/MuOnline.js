function practice(str) {
    let tokens   = str.split('|');
    let bitcoins = 0;
    let health   = 100;
    let room     = 0;
    let isDead   = false;
    for (let el of tokens) {
        if(isDead){
            break;
        }
        room++;
        let [command, n] = el.split(' ');
        n = Number(n);
        switch(command){
            case 'potion' :
                potion(n); break;
            case 'chest'  :
                chest(n);break;
            default       :
                fight(command, n);break;
        }
    }

    if(!isDead){
        console.log(`You've made it!\nBitcoins: ${bitcoins}\nHealth: ${health}`);
    }

    function potion(n){
        if((health + n) > 100){
            n = 100 - health;
            health = 100;
        }else{
            health += n;
        }
        console.log(`You healed for ${n} hp.`);
        console.log(`Current health: ${health} hp.`);
    }

    function chest(n){
        bitcoins += n
        console.log(`You found ${n} bitcoins.`);
    }

    function fight(monster, attack){
        health -= attack;
        if(health > 0){
            console.log(`You slayed ${monster}.`);
        }else{
            console.log(`You died! Killed by ${monster}.`);
            console.log(`Best room: ${room}`);
            isDead = true;
        }
    }
}
practice('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');


