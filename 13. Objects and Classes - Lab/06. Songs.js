function practice(param) {
    class Song{
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    let numbersOfSongs = param.shift();
    let result = [];
    let type = param.pop();

    for (const el of param) {
        let [typeOfSong, name, duration] = el.split('_');
        let song = new Song(typeOfSong, name, duration);
        result.push(song);
    }
    if(type === 'all'){
        result.forEach(x => console.log(x.name)); 
    }else{
        let filtered = result.filter(x => x.typeList === type);
        filtered.forEach(x => console.log(x.name));
    }
}
console.log(practice([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']));