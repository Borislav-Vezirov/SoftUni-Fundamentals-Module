function practice(param) {
    let cloneParam = param.slice(', ');
    let firstArr = cloneParam[0]
    let secondArr = cloneParam[1]
    let thirdArr = cloneParam[2]
    let flights = {};
    firstArr.forEach(element => {
        let [flightNumber, destination] = element.split(' ');
        flights[flightNumber] = {
            Destination: destination,
            Status: 'Ready to fly'
        }
    });
    secondArr.forEach(element =>{
        let [flightNumber, status] = element.split(' ');
        if(flights.hasOwnProperty(flightNumber)){
            flights[flightNumber].Status = status;
        }
    });

    for (let element in flights) {
        if(flights[element].Status === thirdArr[0]){
            console.log(flights[element]);
        }
    }
}
console.log(practice([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK330 Cancelled'],
 ['Ready to fly']
]));