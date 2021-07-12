function practice(arr) {
    let initialEnergy = Number(arr.shift());
    let wins = 0
    let isEnough = true;
    for (let el of arr) {
        if(el === 'End of battle'){
            break;
        }
        el = Number(el);
        if(el <= initialEnergy){
            initialEnergy -= el;
            wins++;
            if(wins % 3 === 0){
                initialEnergy += wins;
            }
        }else{
            console.log(`Not enough energy! Game ends with ${wins} won battles and ${initialEnergy} energy`);
            isEnough = false;
            break;
        }
    }

    if(isEnough ){
        console.log(`Won battles: ${wins}. Energy left: ${initialEnergy}`);
    }
}
//practice([ '200', '54', '14', '28', '13', 'End of battle' ]);

practice(['100', '10', '10', '10',  '1',  '2', '3', '73', '10'])
  