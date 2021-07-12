function practice(arr) {
    let total = 0;
    let current = arr.shift();
    while(true){
        if(current === "special" || current === "regular"){
            break;
        }
        current = Number(current);
        if(current <= 0){
            console.log('Invalid price!');
        }else{
            total += current;
        }
        current = arr.shift();
    }
    let totalWithTaxes = total * 1.2;
    if(current === "special"){
        totalWithTaxes *= 0.9;
    }
    if(totalWithTaxes > 0){
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${total.toFixed(2)}$`);
        console.log(`Taxes: ${(total * 0.2).toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${totalWithTaxes.toFixed(2)}$`);
    }else{
        console.log('Invalid order!');
    }
}
practice([
  '1050',    '200',
  '450',     '2',
  '18.50',   '16.86',
  'special']);