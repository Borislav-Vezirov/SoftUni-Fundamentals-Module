function practice(arr) {
    let newArr = [];
    let oldArr = 0;
    let modifyArr = 0;
    for (let i = 0; i < arr.length; i++) {
        oldArr += +arr[i];
        if(arr[i] % 2 !== 0){
            newArr[i] = Number(arr[i] - i);
        }else{
            newArr[i] = Number(arr[i] + i);
        }
        modifyArr += newArr[i];
    }   
    console.log(newArr);
    console.log(oldArr);
    console.log(modifyArr);
}
practice([5, 15, 23, 56, 35])