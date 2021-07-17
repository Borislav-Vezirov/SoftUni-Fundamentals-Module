function practice(arr) {

   let sequence = arr.shift().split(' ').map(Number);

   for (let el of arr) {
       if(el === 'End'){
           break;
       }
       let [command, ...tokens] = el.split(' ');
       if(command === 'Shoot'){
           let index = +tokens[0];
           let power = +tokens[1];
           if(index >= 0 && index < sequence.length){
               sequence[index] -= power;
               if(sequence[index] <= 0){
                   sequence.splice(index,1);
               }
           }
       }else if(command === 'Add'){
           let index = +tokens[0];
           let value = +tokens[1];
           if(index >= 0 && index < sequence.length){
               sequence.splice(index, 0, value);
           }else{
               console.log('Invalid placement!');
           }
       }else if(command === 'Strike'){
           let index  = +tokens[0];
           let radius = +tokens[1];
           let startRange = index - radius;
           let endRange   = index + radius;
           let allRange   = radius * 2 + 1;
           if(startRange >= 0 && endRange < sequence.length){
               sequence.splice(startRange, allRange);
           }else{
               console.log('Strike missed!');
           }
       }
   }
   console.log(sequence.join('|'));
}
practice([
    '52 74 23 44 96 110',
    'Shoot 5 10',
    'Shoot 1 80',
    'Strike 2 1',
    'Add 22 3',
    'End']);

//[ '1 2 3 4 5', 'Strike 0 1', 'End' ]
