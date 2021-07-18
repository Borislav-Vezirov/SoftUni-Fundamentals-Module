function practice(arr) {
    let list = arr.shift().split('!');
    let current; 
    while((current = arr.shift()) !== 'Go Shopping!'){
        let tokens = current.split(' ');
        let command = tokens.shift();
        switch(command){
            case 'Urgent'      :
                urgent(tokens[0]);break;
            case 'Unnecessary' :
                unnecessary(tokens[0]);break;
            case 'Correct'     :
                correct(tokens);break;
            case 'Rearrange'   :
                rearrange(tokens[0]);break;
        }
    }

    console.log(list.join(', '));

    function urgent(item){
        if(!list.includes(item)){
            list.unshift(item);
        }
    }

    function unnecessary(item){
        if(list.includes(item)){
           let index = list.indexOf(item);
           list.splice(index, 1); 
        }
    }

    function correct(tokens){
        let oldItem = tokens[0];
        let newItem = tokens[1];
        if(list.includes(oldItem)){
            let index = list.indexOf(oldItem);
            list.splice(index, 1, newItem);
        }
    }

    function rearrange(item){
        if(list.includes(item)){
            let index   = list.indexOf(item);
            let removed = list.splice(index, 1);
            list.push(removed);
        }        
    }
}
practice([
  'Milk!Pepper!Salt!Water!Banana',
  'Urgent Salt',
  'Unnecessary Grapes ',
  'Correct Pepper Onion',
  'Rearrange Grapes',
  'Correct Tomatoes Potatoes',
  'Go Shopping!']);
