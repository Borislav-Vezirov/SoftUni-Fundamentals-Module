function practice(arr) {
    let collection = {};
    let current;
    while((current = arr.shift()) !== 'Sail'){
        let [city, population, gold] = current.split('||');
        population = Number(population);
        gold       = Number(gold);
        if(!collection.hasOwnProperty(city)){
            collection[city] = {
                population,
                gold
            }
        }else{
            collection[city].population += population;
            collection[city].gold       += gold;
        }
    }

    while((current = arr.shift()) !== 'End'){
        let tokkens = current.split('=>');
        let command = tokkens.shift();
        switch(command){
            case 'Plunder' :
                plunder(tokkens); break;
            case 'Prosper' :
                prosper(tokkens); break;
        }
    }
    
    let townNumber = Object.keys(collection);
    if(townNumber.length > 0){
        console.log(`Ahoy, Captain! There are ${townNumber.length} wealthy settlements to go to:`);
        Object.entries(collection).sort(([a,b], [c,d]) =>{
            return d.gold - b.gold || a.localeCompare(c)
        })
        .forEach(el => {
            console.log(`${el[0]} -> Population: ${el[1].population} citizens, Gold: ${el[1].gold} kg`);
        })
    }else{
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }


    function plunder(tokkens){
        let town   = tokkens.shift();
        let people = Number(tokkens.shift());
        let gold   = Number(tokkens.shift());
        collection[town].population -= people;
        collection[town].gold       -= gold;
        console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
        if(collection[town].population <= 0 || collection[town].gold <= 0){
            delete collection[town];
            console.log(`${town} has been wiped off the map!`);
        }
    }

    function prosper(tokkens){
        let town = tokkens.shift();
        let gold = Number(tokkens.shift());
        if(gold > 0){
            collection[town].gold += gold;
            console.log(`${gold} gold added to the city treasury. ${town} now has ${collection[town].gold} gold.`);
        }else{
            console.log('Gold added cannot be a negative number!');
        }
    }
}
practice([
    'Tortuga||345000||1250',
    'Santo Domingo||240000||630',
    'Havana||410000||1100',
    'Sail',
    'Plunder=>Tortuga=>75000=>380',
    'Prosper=>Santo Domingo=>180',
    'End']);