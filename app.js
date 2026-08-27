alert("Hello from an external script!");
let bedroom = 3;

if (bedroom < 3) {
  console.log("Small house");
} else if (bedroom === 3) {
  console.log("Medium house");
}

let num = 10;

function square(num) {
  return num * num;
}

const double = (num) => num * 2;

console.log(double(num));
console.log(square(num));
