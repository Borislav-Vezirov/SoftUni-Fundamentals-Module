function practice(param) {
    let collected = {};

    for (const element of param) {
        let [item, qty] = element.split(' ');
        qty = Number(qty);
        if(collected.hasOwnProperty(item)){
            collected[item] += qty;
        }else{
            collected[item] = qty;
        }
    }
    for(let item in collected){
        console.log(`${item} -> ${collected[item]}`);
    }
}
practice(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);