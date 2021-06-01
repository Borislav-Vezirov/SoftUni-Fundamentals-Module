function practice(param) {

    let firstCondition = length(param);
    let secondtCondition = isConsistLettersOrDigits(param);
    let thirdCondition = atLeastTwoDigits(param);
    let result = ''

    if(!firstCondition){
        result += `Password must be between 6 and 10 characters \n`;
    }
    if(!secondtCondition){
        result += `Password must consist only of letters and digits \n`;
    }
    if(!thirdCondition){
        result += `Password must have at least 2 digits \n`;
    }

    if(firstCondition && secondtCondition && thirdCondition){
        return 'Password is valid'
    }
    function length(param) {
        if (param.length >= 6 && param.length <= 10) {
            return true
        } else {
            return false
        }
    }
    function isConsistLettersOrDigits(param) {
        let isvalid = true;
        for (let i = 0; i < param.length; i++) {
            let current = param[i].charCodeAt();
            if (current >= 48 && current <= 57 ||
                current >= 65 && current <= 90 ||
                current >= 97 && current <= 122) {
                    continue;
                } else {
                    isvalid = false;
                    break;
                }
        }
        if(isvalid) {
            return true
        } else{
            return false
        }
    }
    function atLeastTwoDigits(param) {
        let count = 0
        for (let i = 0; i < param.length; i++) {
            let current = param[i].charCodeAt();
            if (current >= 48 && current <= 57) {
                count++
            }
        }
        if(count >= 2){
            return true;
        }else{
            return false;
        }
    } 
    return result;  

}
console.log(practice('Pa$s$s')) ;