function practice(arr) {
    let companies = {};

    for (const element of arr) {
        let [company, id] = element.split(' -> ');
        if (!companies.hasOwnProperty(company)) {
            companies[company] = [];
        }
        if (!companies[company].includes(id)) {
            companies[company].push(id);
        }
    }
    let sortedArr = Object.entries(companies).sort(([a, b], [c, d]) => a.localeCompare(c));
    for (const [key, value] of sortedArr) {
        console.log(key);
        for (const element of value) {
            console.log(`-- ${element}`);
        }
    }
}
practice([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);