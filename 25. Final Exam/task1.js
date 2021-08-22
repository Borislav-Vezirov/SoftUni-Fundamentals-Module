function practice(arr) {
    let email = arr.shift();

    let current;

    while ((current = arr.shift()) !== 'Complete') {
        if (current === 'Make Upper') {
            email = email.toUpperCase();
            console.log(email);
        } else if (current === 'Make Lower') {
            email = email.toLowerCase();
            console.log(email);
        }else if(current.includes('GetDomain')){
            let [, count] = current.split('GetDomain');
            count = +count;
            let last = email.slice(-count);
            console.log(last);
        }else if(current.includes('GetUsername')){
            if(email.includes('@')){
                let index = email.indexOf('@')
                let user  = email.slice(0, index);
                console.log(user);
            }else{
                console.log(`The email ${email} doesn't contain the @ symbol.`);
            }
        }else if(current.includes('Replace')){
            let [, char] = current.split(' ');
            email = email.split(char).join('-');
            console.log(email);
        }else if(current === 'Encrypt'){
            let result = [];
            for (let i = 0; i < email.length; i++) {
               let char = email[i].charCodeAt();
               result.push(char);
            }
            console.log(result.join(' '));
        }

    }
}
practice(["Mike123@somemail.com",
"Make Upper",
"GetDomain 3",
"GetUsername",
"Encrypt",
"Complete"]);