function practice(param) {
    let wagons = param.shift().split(' ').map(Number);
    let maxCapacity = Number(param.shift());
    for (let i = 0; i < param.length; i++) {
        let current = param[i].split(' ');
        if(current[0] === "Add"){
            add(Number(current[1]));
        }else{
            if(Number(current[0]) <= maxCapacity){
                findFreespace(Number(current[0]))
            }
        }
    }

    function add(num){
        return wagons.push(num);
    }

    function findFreespace(num){
        for (const element of wagons) {
            let sum = element + num;
            if(sum <= maxCapacity){
                let index = wagons.indexOf(element);
                return wagons.splice(index, 1, sum);
            }
        }
    }
    return wagons.join(' ')
  }
  console.log(practice(['32 54 21 12 4 0 23',
  '75',
  'Add 10',
  'Add 0',
  '30',
  '10',
  '75']
  ));