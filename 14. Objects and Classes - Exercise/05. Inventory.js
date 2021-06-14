function practice(param) {

    let objects = [];
    for (const el of param) {
        let [name, level, items] = el.split(' / ');
        items = items.split(', ').sort((a, b) => a.localeCompare(b)).join(', ')
        let currObj = {
            Hero: name,
            level,
            items
        }
        objects.push(currObj);
    }
    objects.sort((a,b) => a.level - b.level)
    objects.forEach(el => {
        console.log(`Hero: ${el.Hero}`);
        console.log(`level => ${el.level}`);
        console.log(`items => ${el.items}`);
    })
}
console.log(practice([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]));