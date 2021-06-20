function practice(arr) {
    let neighborhoods = {};
    arr.shift().split(', ').forEach(e => neighborhoods[e] = []);

    for (let el of arr) {
        let [neighborhood, name] = el.split(' - ');
        if(neighborhood in neighborhoods){
            neighborhoods[neighborhood].push(name)
        }
    }

    let sorted = Object.keys(neighborhoods).sort((a, b) => {
        return neighborhoods[b].length - neighborhoods[a].length
    })
    
    for (const el of sorted) {
        console.log(`${el}: ${neighborhoods[el].length}`);
        for (const name of neighborhoods[el]) {
            console.log(`--${name}`);
        }
    }
}
practice(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']);