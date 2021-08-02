function practice(arr) {
    let pattern = /[||#](?<item>[A-Za-z\s]+)[|#](?<date>\d{2}\/\d{2}\/\d{2})[|#](?<cal>\d+)[|#]/g;
               ///([\||#])(?<item>[A-za-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<cal>\d+)\1/g;
    let match = pattern.exec(arr[0]);
    let collection = [];
    let calories = 0
    while(match !== null){
      let {item, date, cal} = match.groups;
      cal = Number(cal);
      collection.push([item, date, cal]);
      calories += cal
      match = pattern.exec(arr[0]);
    }
    console.log(`You have food to last you for: ${Math.floor(calories / 2000)} days!`);
    for (const el of collection) {
      console.log(`Item: ${el[0]}, Best before: ${el[1]}, Nutrition: ${el[2]}`);
    }
}
practice([
  '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'
]);