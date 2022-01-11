function addCommas(number) {
  let numbers = `${number}`.split("").reverse();
//   let decimal = null;
  let result = [];
  let counter = 0;
//   if (isFloat(number)) {
//     decimal = Math.floor((number - Math.floor(number)) * 100) / 100;
//     decimal = `${decimal}`.split("").reverse();
//   }
  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i]);
    if (counter === 2 && i < numbers.length - 1) {
      result.push(",");
      counter = 0;
    } else {
      counter++;
    }
  }
//   console.log(result.reverse().join(""));
  return result.reverse().join("");
}

function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}
module.exports = addCommas;
