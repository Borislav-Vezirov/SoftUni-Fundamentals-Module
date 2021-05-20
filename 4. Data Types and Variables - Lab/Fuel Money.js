function practice(arg1, arg2, arg3){
    let neededFuel = (arg1 / 100) * 7;
    neededFuel += arg2 * 0.1;
    let money = neededFuel * arg3;
    console.log(`Needed money for that trip is ${money} lv`);
  }
  practice(260, 9, 2.49)