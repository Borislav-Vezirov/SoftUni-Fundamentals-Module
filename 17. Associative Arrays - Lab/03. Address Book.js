function practice(param) {
    let listOfAddress = {};

    for (const current of param) {
        let [ name, address ] = current.split(':');
        listOfAddress[name] = address;
    }
    let sorted = Object.keys(listOfAddress);
    sorted.sort((a,b) => a.localeCompare(b));
    for (let name of sorted) {
        console.log(`${name} -> ${listOfAddress[name]}`);
    }  
}
practice(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);