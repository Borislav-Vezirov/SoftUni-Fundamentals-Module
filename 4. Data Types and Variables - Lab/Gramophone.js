function practice(arg1, arg2, arg3){
  let songDuration = (arg1.length * arg2.length * arg3.length) / 2
  let result = Math.ceil(songDuration / 2.5);
  console.log(`The plate was rotated ${result} times.`);
}
practice('Black Sabbath', 'Paranoid', 'War Pigs')