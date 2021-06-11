function practice(param1, param2,param3) {
    let obj = {
        name : param1,
        lastName : param2,
        hairColor : param3
    }
    let result = JSON.stringify(obj);
    return result;
}

console.log(practice('George',
'Jones',
'Brown'
));