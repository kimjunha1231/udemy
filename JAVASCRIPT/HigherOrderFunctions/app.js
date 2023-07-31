// function callTwice(func) {
//  func();
//  func();
// }
// function callTenTimes(f) {
//  for (let i = 0; i < 10; i++) {
//    f();
//  }
//}
//function rollDie() {
//  const roll = Math.floor(Math.random() * 6) + 1;
//  console.log(roll);
//}
// callTwice(rollDie);

/*function makeMysteryFunc() {
  const rand = Math.random();
  if (rand > 0.5) {
    return function () {
      console.log("CONGRATS, I AM A GOOD FUNCTION!");
      console.log("YOU WIN A MILLION DOLLARS!!");
    };
  } else {
    return function () {
      alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!");
      alert("STOP TRYING TO CLOSE THIS WINDOW!");
    };
  }
}
makeMysteryFunc();*/
function isBetween(num) {
  return num >= 50 && num <= 100;
}
function isBetween2(num) {
  return num >= 1 && num <= 10;
}
