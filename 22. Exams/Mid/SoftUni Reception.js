function practice(input) {
    let studentsPerHour = input.slice(0,3).map(Number).reduce((a,b) => a+b);
    let students = +input.pop();
    hour = 0
    while(students > 0){
        hour++;
        if(hour % 4 === 0){
            hour++
        }
        students -= studentsPerHour
    }
    console.log(`Time needed: ${hour}h.`);
}
practice([ '1', '2', '3', '45' ]);