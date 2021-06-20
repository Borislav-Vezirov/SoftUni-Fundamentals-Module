function practice(param) {
    let students = {};

    for (const student of param) {
        let tokens = student.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);
        if (!students.hasOwnProperty(name)) {
            students[name] = [];         
        } 
        let temp = students[name];
        for (let grade of grades) {
            temp.push(grade);
        }
    }

    let sorted = Object.entries(students);
    sorted.sort(avg);

    for (let [name, grades] of sorted) {
        console.log(`${name}: ${grades.join(', ')}`);
    }

    function avg( [nameA, gradesA], [nameB, gradesB] ){
        let avgA = 0;
        gradesA.forEach(x => avgA += x);
        avgA /= gradesA.length; 
        
        let avgB = 0;
        gradesB.forEach(x => avgB += x);
        avgB /= gradesB.length;
        
        return avgA - avgB;
    }
}
practice(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]);