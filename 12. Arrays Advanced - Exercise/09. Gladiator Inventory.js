function practice(param) {
    let inventory = param.shift().split(' ');
    for (let i = 0; i < param.length; i++) {
        let current = param[i].split(' ')
        switch(current[0]){
            case 'Buy'     : buy(current[1]); break;
            case 'Trash'   : trash(current[1]); break;
            case 'Repair'  : repair(current[1]); break;
            case 'Upgrade' : upgrade(current[1]); break;
        }
    }
    function buy(equipment){
        if(!inventory.includes(equipment)){
            return inventory.push(equipment);
        }
    }
    function trash(equipment){
        if(inventory.includes(equipment)){
            let index = inventory.indexOf(equipment);
            return inventory.splice(index, 1);
        }
    }
    function repair(equipment){
        if(inventory.includes(equipment)){
            let index = inventory.indexOf(equipment);
            let temp = inventory.splice(index, 1);
            return inventory.push(temp);
        }
    }
    function upgrade(equipment){
        let temp = equipment.split('-');
        if(inventory.includes(temp[0])){
            let index = inventory.indexOf(temp[0]);
            inventory.splice(index + 1, 0, `${temp[0]}:${temp[1]}`)
        } 
    }
    return inventory.join(' ');
}
console.log(practice(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']
));
