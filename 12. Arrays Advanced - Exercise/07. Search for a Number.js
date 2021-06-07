function practice(param, param2) {
    
    let newArr = param.slice(0, param2[0]);
    newArr.splice(0, param2[1]);
    let count = 0
    for (let el of newArr) {
        if(el === param2[2]){
            count++;
        }
    }
    return `Number ${param2[2]} occurs ${count} times.`
  }
  console.log(practice([5, 2, 3, 4, 1, 6], [5, 2, 3]));