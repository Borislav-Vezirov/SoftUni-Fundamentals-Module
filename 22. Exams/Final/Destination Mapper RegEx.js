function practice(str) {
  let regex = /([=|\/])(?<city>[A-Z][A-Za-z]{3,})\1/g;
  let travelPoints = 0
  let destinations = [];
  let match = str.matchAll(regex);
  for (let el of match){
    let dest = el.groups.city
    travelPoints += Number(dest.length)
    destinations.push(dest)
  }
    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}
practice('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');