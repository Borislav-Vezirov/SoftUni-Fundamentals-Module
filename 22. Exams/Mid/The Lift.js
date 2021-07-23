function practice(arr) {

    let people = Number(arr.shift());
    let wagons = arr.shift().split(' ').map(Number);
    for (let i = 0; i < wagons.length; i++) {
        if (people <= 0) {
            break;
        }
        if (wagons[i] < 4 && people > 0) {
            let temp = 4 - wagons[i];
            if (temp > people) {
                temp = people;
            }
            people -= temp;
            wagons[i] += temp;
        }
    }
    let isEmptySlots = false;
    if (people > 0) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
    } else if (wagons.map(x => {
            if (x < 4) {
                isEmptySlots = true;
            }
        })) {
        if (isEmptySlots) {
            console.log(`The lift has empty spots!`);
        }
    }
    console.log(wagons.join(' '));
    let test
    
}
practice([ '15', '0 0 0 0' ]);
practice(['20', '0 2 0']);