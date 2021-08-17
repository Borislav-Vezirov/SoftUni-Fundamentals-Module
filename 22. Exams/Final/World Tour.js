function practice(arr) {
    let collection = arr.shift()
 
    while(arr[0] !== 'Travel'){
        let current = arr.shift();
        let [command, ...tokens] = current.split(':')
        console.log(tokens);
         if(command === 'Add Stop'){
             let index = +tokens[0];
             let city  = tokens[1];
             if((index >= 0) && (index < collection.length)){
                 let first = collection.slice(0, index);
                 let last  = collection.slice(index);
                 collection = first + city + last
                 console.log(collection);
             }
        }else if(command === 'Remove Stop'){
            let startIndex = +tokens[0];
            let endIndex   = +tokens[1];
            if((startIndex >= 0) && (startIndex < collection.length) &&
               (endIndex >= 0) && (endIndex < collection.length)){
                let first = collection.slice(0, startIndex);
                let last  = collection.slice(endIndex + 1);
                collection = first + last;
                console.log(collection);
            }
        }else if(command === 'Switch'){
            let oldStr  = tokens[0];
            let newStr  = tokens[1];
            let pattern = new RegExp(oldStr, 'g'); 
            if(collection.includes(oldStr)){
                collection = collection.replace(pattern, newStr);
                console.log(collection);
            }
        }
    }
    console.log(`Ready for world tour! Planned stops: ${collection}`);
}
practice(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"
]);