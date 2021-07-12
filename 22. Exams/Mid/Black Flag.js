function practice(arr) {

    let pirating        = Number(arr.shift());
    let plunderForDay   = Number(arr.shift());
    let expectedPlunder = Number(arr.shift());

    let totalPlunder = 0;

    for (let i = 1; i <= pirating; i++) {
        totalPlunder += plunderForDay;

        if(i % 3 === 0){
            totalPlunder += plunderForDay * 0.5;
        }

        if(i % 5 === 0){
            totalPlunder *= 0.7
        }
    }
    if(totalPlunder >= expectedPlunder){
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    }else{
        let percentLeft = (totalPlunder / expectedPlunder) * 100
        console.log(`Collected only ${percentLeft.toFixed(2)}% of the plunder.`);
    }
}
practice([ '10', '20', '380']);