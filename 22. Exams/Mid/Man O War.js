function practice(arr) {
    let pirateShipStatus = arr.shift().split('>').map(Number);
    let warShipStatus    = arr.shift().split('>').map(Number);
    let healthCapacity   = Number(arr.shift());

    let ifStalemate = true;

   for (let el of arr) {
       let [command, ...tokens] = el.split(' ');
       if(command === 'Fire'){
           let index  = +tokens[0];
           let damage = +tokens[1];
           if(index >= 0 && index < warShipStatus.length){
               warShipStatus[index] -= damage;
               if(warShipStatus[index] <= 0){
                   console.log('You won! The enemy ship has sunken.');
                   ifStalemate = false;
                   break;
               }
           }
       }else if(command === 'Defend'){
           let startIndex = +tokens[0];
           let endIndex   = +tokens[1];
           let damage     = +tokens[2];
           if(startIndex >= 0 && startIndex < endIndex && endIndex < pirateShipStatus.length){
               for (let i = startIndex; i <= endIndex; i++) {
                  pirateShipStatus[i] -= damage;
                  if(pirateShipStatus[i] <= 0){
                      console.log('You lost! The pirate ship has sunken.');
                      ifStalemate = false;
                      break;
                  }
               }
           }
       }else if(command === 'Repair'){
           let index  = +tokens[0];
           let health = +tokens[1];
           if(index >= 0 && index < pirateShipStatus.length){
               pirateShipStatus[index] += health;
               if(pirateShipStatus[index] > healthCapacity){
                   pirateShipStatus[index] = healthCapacity
               }
           }
       }else if(command === 'Status'){
           let count = 0
           pirateShipStatus.map(x => {
               if(x < (healthCapacity * 0.2)){
                   count++
               }
               return;
           })
           console.log(`${count} sections need repair.`);
       }
   }

   if(ifStalemate){
       console.log(`Pirate ship status: ${pirateShipStatus.reduce((a,b) => a+b)}`);
       console.log(`Warship status: ${warShipStatus.reduce((a,b) => a+b)}`);
   }
}
practice([
    '2>3>4>5>2',
    '6>7>8>9>10>11',
    '20',
    'Status',
    'Fire 2 3',
    'Defend 0 4 11',
    'Repair 3 18',
    'Retire'
  ]
  );