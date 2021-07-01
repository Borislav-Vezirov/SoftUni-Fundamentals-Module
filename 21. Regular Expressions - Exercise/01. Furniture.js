function practice(arr) {
    let furniture  = [];
    let totalPrice = 0;
    for (let el of arr) {
        let regex = />>(?<furniture>[A-Za-z]+)<<(?<price>[\d.]+)!(?<qty>[\d]+)/g;
        let match = regex.exec(el);
        if(match){
            furniture.push (match.groups.furniture);
            totalPrice += (Number(match.groups.price) * Number(match.groups.qty));
        }else{
            continue;
        }
    }
    console.log('Bought furniture:');
    if(furniture.length > 0){
        console.log(furniture.join('\n'));
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
practice([ '>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase' ]);