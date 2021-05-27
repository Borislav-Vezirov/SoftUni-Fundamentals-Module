function practice(arr1, arr2) {
    let newArr = []
    for (let i = 0; i < arr1.length; i++) {
        if(i % 2 === 0){
            newArr[i] = Number(arr1[i]) + Number(arr2[i]);
        }else{
            newArr[i] = '' + arr1[i] + arr2[i];
        }
    }
    newArr = newArr.join('-')
    console.log(newArr);
}
practice(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11'])