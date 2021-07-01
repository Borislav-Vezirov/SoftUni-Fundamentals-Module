function practice(arr) {
    let current;
    let totalIncome = 0;
    while((current = arr.shift()) !== 'end of shift'){
        let regex = /%(?<name>[A-Z][a-z]+)%[^\|$%\.]*?<(?<product>\w+)>[^\|$%\.]*?\|(?<qty>\d+)\|[^\|$%\.]*?(?<price>\d+(\.[\d]+)?)\$/g;

        let match = regex.exec(current);
        if(match){
            console.log(
            `${match.groups.name}: ${match.groups.product}-${((match.groups.qty) * (match.groups.price)).toFixed(2)}`);
            totalIncome += (match.groups.qty) * (match.groups.price);
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
practice([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'])