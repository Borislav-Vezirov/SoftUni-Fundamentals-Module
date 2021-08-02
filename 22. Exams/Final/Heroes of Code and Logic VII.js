function practice(arr) {
    let n = +arr.shift();
    let heroes = {};
    for (let i = 1; i <= n; i++) {
       let [hero, hitPoints, manaPoints] = arr.shift().split(' ');
       hitPoints  = Number(hitPoints);
       manaPoints = Number(manaPoints);
       heroes[hero] = {hitPoints, manaPoints};
    }
    let current;
    while((current = arr.shift()) !== 'End'){
        let tokkens  = current.split(' - ');
        let command  = tokkens[0];
        let heroName = tokkens[1];
        switch(command){
            case 'Heal'       :
                heal(heroName, tokkens[2]);break;
            case 'Recharge'   :
                recharge(heroName, tokkens[2]);break;
            case 'TakeDamage' :
                takeDamage(heroName, tokkens[2], tokkens[3]);break;
            case 'CastSpell'  :
                castSpell(heroName, tokkens[2], tokkens[3]);break;
        }
    }

    let sorted = Object.entries(heroes).sort(sort);

    for (let el of sorted) {
        let name = el[0];
        let hp = el[1].hitPoints;
        let mp = el[1].manaPoints;
        console.log(name);
        console.log(`HP: ${hp}`);
        console.log(`MP: ${mp}`);
    }

    function sort([keyA, valueA],[keyB, valueB]){
        return valueB.hitPoints - valueA.hitPoints ||
               keyA.localeCompare(keyB);
    }

    function heal(hero, amount){
        amount   = Number(amount);
        let temp = heroes[hero].hitPoints;
        heroes[hero].hitPoints += amount;
        if(heroes[hero].hitPoints > 100){
            heroes[hero].hitPoints = 100;
            temp = heroes[hero].hitPoints - temp;
            console.log(`${hero} healed for ${temp} HP!`);
        }else{
            console.log(`${hero} healed for ${amount} HP!`);
        }
    }

    function recharge(hero, amount){
        amount    = Number(amount);
        let temp  = heroes[hero].manaPoints;
        heroes[hero].manaPoints += amount;
        if(heroes[hero].manaPoints > 200){
            heroes[hero].manaPoints = 200;
            temp = heroes[hero].manaPoints - temp;
            console.log(`${hero} recharged for ${temp} MP!`);
        }else{
            console.log(`${hero} recharged for ${amount} MP!`);
        }
    }

    function takeDamage(hero, damage, attacker){
        damage = Number(damage);
        heroes[hero].hitPoints -= damage;
        if(heroes[hero].hitPoints <= 0){
            delete heroes[hero];
            console.log(`${hero} has been killed by ${attacker}!`);
        }else{
            console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${heroes[hero].hitPoints} HP left!`);
        }
    }

    function castSpell(hero, manaNeeded, spellName){
        manaNeeded = Number(manaNeeded);
        if(heroes[hero].manaPoints >= manaNeeded){
            heroes[hero].manaPoints -= manaNeeded;
            console.log(`${hero} has successfully cast ${spellName} and now has ${heroes[hero].manaPoints} MP!`);
        }else{
            console.log(`${hero} does not have enough MP to cast ${spellName}!`);
        }
    }
}
practice([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End']);