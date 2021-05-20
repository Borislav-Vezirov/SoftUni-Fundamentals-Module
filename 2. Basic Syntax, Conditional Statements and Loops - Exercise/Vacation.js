function exam(arg, arg1, arg2) {
    let people = +arg;
    let type = arg1;
    let day = arg2;
    let price = 0;
    let total = 0
    switch (type) {
        case "Students":
            if (day === 'Friday') {
                price = 8.45;
            } else if (day === 'Saturday') {
                price = 9.8;
            } else if (day === 'Sunday') {
                price = 10.46;
            };
            if(people >= 30){
                total = (people * price) * 0.85; 
            }else{
                total = people * price 
            }
            break;
        case 'Business':
            if (day === 'Friday') {
                price = 10.9;
            } else if (day === 'Saturday') {
                price = 15.6;
            } else if (day === 'Sunday') {
                price = 16;
            };
            if(people >= 100){
                people -= 10 
                total = (people * price); 
            }else{
                total = people * price 
            }
            break;
        case 'Regular' :
            if (day === 'Friday') {
                price = 15;
            } else if (day === 'Saturday') {
                price = 20;
            } else if (day === 'Sunday') {
                price = 22.5;
            };
            if(people >= 10 && people <= 20){
                total = (people * price) * 0.95; 
            }else{
                total = people * pricey 
            }
            break;
    }
    console.log(`Total price: ${total.toFixed(2)}`);
}
exam(40,
    'Regular',
    'Saturday')