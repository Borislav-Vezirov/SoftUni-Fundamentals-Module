function practice(arr) {
    let guests = {
        "VIP": [],
        "regular": []
    }
    let current = arr.shift();
    while (current !== "PARTY") {
        if (isNaN(current[0])) {
            guests["regular"].push(current);
        } else {
            guests["VIP"].push(current)
        }
        current = arr.shift();
    }
    for (let element of arr) {
        if (guests["VIP"].includes(element)) {
            let i = guests["VIP"].indexOf(element);
            guests["VIP"].splice(i, 1);
        } else if (guests["regular"].includes(element)) {
            let i = guests["regular"].indexOf(element);
            guests["regular"].splice(i, 1);
        }
    }
    console.log(guests["VIP"].length + guests["regular"].length);
    console.log(guests["VIP"].join("\n"));
    console.log(guests["regular"].join("\n"));
}
practice(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);