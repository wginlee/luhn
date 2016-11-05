function check(number){
  var ns = reverseNumber(number).split(""); //right to left

  var sumArr = [];
  for (var n = 0 ; n < ns.length ; n++){
    let toPush = ns[n];
    if ((n+1) % 2 === 0){ //accounting for 0 index

      toPush *= 2;
      if (toPush > 9) toPush -= 9;
    }

      sumArr.push(Number(toPush));
  }

   var sum = sumArray(sumArr);

   return (sum % 10 === 0);
}


function sumArray(arr){
  return arr.reduce(function(a,b){
    return a+b;
   }, 0);

}

function reverseNumber(number){
  return String(number).split("").reverse().join("");
}


module.exports = {
  check: check,
  sumArray: sumArray,
  reverseNumber: reverseNumber
};
