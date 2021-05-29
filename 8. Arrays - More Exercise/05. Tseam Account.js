function practice(arr) {
    let games = arr.shift().split(" ");
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i].split(' ')
        let command = current[0];
        let game = current[1];
        if (command === 'Play!') {
            break;
        }
        if (command === 'Install') {
            if (games.includes(game)) {} else {
                games.push(game);
            }
        } else if (command === 'Uninstall') {
            if (games.includes(game)) {
                let index = games.indexOf(game);
                games.splice(index, 1)
            }
        } else if (command === 'Update') {
            if (games.includes(game)) {
                let index = games.indexOf(game);
                games.splice(index, 1);
                games.push(game);
            }
        } else if (command === 'Expansion') {
            let temp = game.split('-');
            if (games.includes(temp[0])) {
                let index = games.indexOf(temp[0]);
                games.splice(index + 1, 0, `${temp[0]}:${temp[1]}`)
            }
        }
    }
    console.log(games.join(' '));
}
practice(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'
])