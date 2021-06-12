function practice(param) {
    let result = []
    for (const el of param) {
        let currentObj = {};
        if (el.includes('addMovie')) {
            let name = el.substring(9);
            currentObj.name = name;
            result.push(currentObj)
        } else if (el.includes('directedBy')) {
            let [name, director] = el.split(' directedBy ');
            let currMovie = result.find(x => x.name === name)
            if (currMovie) {
                currMovie.director = director;
            }
        } else {
            let [name, date] = el.split(' onDate ');
            let currMovie = result.find(x => x.name === name);
            if (currMovie) {
                currMovie.date = date;
            }
        }
    }
    result.forEach(x => {
        if (x.name && x.date && x.director) {
            console.log(JSON.stringify(x));
        }
    })
}
console.log(practice([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]));