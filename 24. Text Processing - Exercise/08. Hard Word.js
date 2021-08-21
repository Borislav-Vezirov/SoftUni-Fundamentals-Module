function exercise(arr){
    let letter   = arr.shift();
    let words = arr.shift();
    let regex = /[_]+/g;
    let match = letter.match(regex)
    for (let el of words) {
        for (let el1 of match) {
            if(el.length == el1.length){
                el1 = " " + el1 + " ";
                letter = letter.replace(el1, " " + el + " ");
            }
        }
    }
   console.log(letter);
}
exercise(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);