function practice(param) {
    let calendar = {};

    for (const meeting of param) {
        let [day, name] = meeting.split(' ');
        if(calendar.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        }else{
            calendar[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for(let meetings in calendar){
        console.log(`${meetings} -> ${calendar[meetings]}`);
    }
}
practice(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);