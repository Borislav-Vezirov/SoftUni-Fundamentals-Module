function practice(arr) {

    let resourses = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            let resourse = arr[i];
            let qty      = Number(arr[i + 1]);
            if (!resourses.has(resourse)) {
                resourses.set(resourse, qty)
            } else {
                let existing = resourses.get(resourse) + qty;
                resourses.set(resourse, existing)
            }
        }
    }
    for (const [key, value] of resourses) {
        console.log(`${key} -> ${value}`);
    }

    // let collection = [];
    // for (let i = 0; i < arr.length; i += 2) {
    //     if(i % 2 === 0){
    //         if(collection.includes(arr[i])){
    //             let index = collection.indexOf(arr[i]);
    //             collection[index + 1] += Number(arr[i + 1]);
    //         }else{
    //             collection.push(arr[i]);
    //             collection.push(Number(arr[i + 1]));
    //         }
    //     }
    // }
    // for (let i = 0; i < collection.length; i+=2) {
    //   console.log(`${collection[i]} -> ${collection[i + 1]}`); 
    // }
}
practice([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15']);