function practice(param) {
  let arr = param.shift().split(' ').map(Number);

  for (let i = 0; i < param.length; i++) {
    let current = param[i].split(' ');
    let command = current[0];
    let firstNumber = Number(current[1]);
    let secondNumber = Number(current[2]);
    
    switch(command){
        case "Add"      : add(firstNumber); break;
        case "Remove"   : removeNum(firstNumber); break;
        case "RemoveAt" : removeIndex(firstNumber); break;
        case "Insert"   : insertNum(firstNumber, secondNumber); break;
    }
  }
  return arr.join(' ')

  function add(num){
    return arr.push(num);
  }
  function removeNum(num){
      arr = arr.filter(x => x !== num);
  }
  function removeIndex(num){
      return arr.splice(num, 1);
  }
  function insertNum(num, index){
      return arr.splice(index, 0, num);
  }
}
console.log(practice(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
));