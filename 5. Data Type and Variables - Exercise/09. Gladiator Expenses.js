function practice(n1, n2, n3, n4, n5,) {
    let brokenHelmet = 0;
    let brokenSword = 0;
    let brokenShield = 0;
    let brokenArmour = 0;

    for (let i = 1; i <= n1; i++) {
        if(i % 2 === 0){
            brokenHelmet += 1;
        }
        if(i % 3 === 0){
            brokenSword += 1;
        }
        if(i % 2 === 0 && i % 3 === 0){
            brokenShield += 1;
        }
    }
    brokenArmour = Math.floor(brokenShield / 2);
    let total = (brokenHelmet * n2) + (brokenSword * n3) + (brokenShield * n4) + (brokenArmour * n5)
    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
  }
  practice(7, 2, 3, 4, 5)