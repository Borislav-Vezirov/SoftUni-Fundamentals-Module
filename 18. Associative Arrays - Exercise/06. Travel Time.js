function practice(arr) {

    let collection = {};

    for (let el of arr) {
        let [country, town, price] = el.split(' > ');
        price = Number(price);
        if(!collection.hasOwnProperty(country)){
            collection[country] = {}; 
        }
        if(!collection[country].hasOwnProperty(town)){
            collection[country][town] = price;
        }else{
            if(collection[country][town] > price){
                collection[country][town] = price;
            }
        }
    }
    Object.entries(collection).sort(([a, b], [c, d]) => {
        return a.localeCompare(c) || collection[b] - collection[d] 
    }).forEach(el => {
        let result = `${el[0]} -> `
        for (const town in el[1]) {
            result += `${town} -> ${el[1][town]} `
        }
        console.log(result);
    })
}
practice([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);