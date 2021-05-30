function practice(product,quantity) {
   let cofee = q => (q * 1.5).toFixed(2) 
   let water = q => (q * 1).toFixed(2) 
   let coke = q => (q * 1.4).toFixed(2) 
   let snacks = q => (q * 2).toFixed(2)
   
   switch( product ){
       case 'coffee' : console.log(cofee(quantity));break;
       case 'water' : console.log(water(quantity));break;
       case 'coke' : console.log(coke(quantity));break;
       case 'snacks' : console.log(snacks(quantity));break;
   }
}
practice('coffee', 2 )