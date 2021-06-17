function practice(param) {
    let contacts = {};

    for (const contact of param) {
        let [name, number] = contact.split(' ');
        contacts[name] = number;
    }
    for (let name in contacts) {
        console.log(`${name} -> ${contacts[name]}`);
    }
}
practice(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);