function practice(arr, n, command) {
    let collection = arr.map(Number);
    let startPoint = Number(n);
    let type       = command;
    let left  = 0;
    let right = 0;

    for (let i = 0; i < startPoint; i++) {
       if(type === 'expensive'){
           if(collection[i] >= collection[startPoint]){
               left += collection[i];
           }
       }else if(type === 'cheap'){
           if(collection[i] < collection[startPoint]){
               left += collection[i];
           }
       }
    }
    for (let i = startPoint + 1; i < collection.length; i++) {
        if(type === 'expensive'){
            if(collection[i] >= collection[startPoint]){
                right += collection[i];
            }
        }else if(type === 'cheap'){
            if(collection[i] < collection[startPoint]){
                right += collection[i];
            }
        }
    }
    if(left >= right){
        console.log(`Left - ${left}`);
    }else{
        console.log(`Right - ${right}`);
    }
}
practice([1, 5, 1],
1,
"cheap")

//practice([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive")    