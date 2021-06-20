function practice(arr) {
    let garages = {};

    for (let el of arr) {
        let [garage, tokkens] = el.split(' - ');
        if(!garages.hasOwnProperty(garage)){
            garages[garage] = [];
        }
        garages[garage].push(`${tokkens}`)
    }
    for (let key in garages) {
       console.log(`Garage № ${key}`);
       for (let value of garages[key]) {
           value = value.split(': ').join(' - ')
           console.log(`--- ${value}`);
       }
    }
}
practice([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);