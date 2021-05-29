function practice(arr) {
   let first = arr[0];
   let result = arr.filter(element => {
       if(element >= first ){
           first = element
           return element;
       }
   })
   console.log(result.join(' '));
}
practice([ 1, 2, 3, 4])