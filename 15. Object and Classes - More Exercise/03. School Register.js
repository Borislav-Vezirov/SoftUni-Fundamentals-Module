function practice(param) {
    let result = {};
    for (const element of param) {
        let temp = element.split(',');
        let name = temp[0].split(': ')[1];
        let grade = Number(temp[1].split(': ')[1]) + 1;
        let score = Number(temp[2].split(': ')[1]);
        if (score > 3) {
            let student = {
                name,
                score
            };
            if (!result.hasOwnProperty(grade)) {
                result[grade] = [];
            }
            result[grade].push(student);
        }
    }
    let sortedResult = Object.keys(result).sort((a,b) => a-b);

    for (const grade of sortedResult) {
        let students = result[grade];
        console.log(`${grade} Grade`);
        console.log(`List of students: ${students.map(n => n.name).join(', ')}`);
        console.log(`Average annual grade from last year: ${average(students.map(s => s.score)).toFixed(2)}`);
        console.log('');
    }

    function average(arr){
        return arr.reduce((a,b) => (a + b)) / arr.length;
    }
}
practice(["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]);