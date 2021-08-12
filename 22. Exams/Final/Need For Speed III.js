function practice(arr) {
    let n = +arr.shift();
    let collection = {};
    let actions = {
        'Drive' : drive,
        'Refuel': refuel,
        'Revert': revert
    }

    for (let i = 0; i < n; i++) {
        let [car, mileage, fuel] = arr.shift().split('|');
        mileage = Number(mileage);
        fuel    = Number(fuel);
        collection[car] = {mileage, fuel};
    }

    let current;
    while((current = arr.shift()) !== 'Stop'){
        let [command, ...tokens] = current.split(' : ');
        let action = actions[command];
        action(tokens);
    }

    function drive(tokens){
        let [car, distance, fuel] = tokens;
        distance = Number(distance);
        fuel     = Number(fuel);
        if(collection[car].fuel < fuel){
            console.log('Not enough fuel to make that ride');
        }else{
            collection[car].mileage += distance;
            collection[car].fuel -= fuel;
            console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            if(collection[car].mileage >= 100000){
                delete collection[car];
                console.log(`Time to sell the ${car}!`);
            }
        }
    }

    function refuel(tokens){
        let [car, fuel] = tokens;
        fuel = Number(fuel);
        let temp = collection[car].fuel + fuel;
        if(temp > 75){
            fuel = 75 - collection[car].fuel;
            collection[car].fuel = 75
        }else{
            collection[car].fuel += fuel
        }
        console.log(`${car} refueled with ${fuel} liters`);
    }

    function revert(tokens){
        let [car, kilometers] = tokens;
        kilometers = Number(kilometers);
        collection[car].mileage -= kilometers;
        if(collection[car].mileage < 10000){
            collection[car].mileage = 10000
        }else{
            console.log(`${car} mileage decreased by ${kilometers} kilometers`);
        }
    }
    Object.entries(collection).sort((a,b) => b[1].mileage - a[1].mileage || a.localeCompare(b))
    .forEach(x => console.log(`${x[0]} -> Mileage: ${x[1].mileage} kms, Fuel in the tank: ${x[1].fuel} lt.`))
}
practice([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);