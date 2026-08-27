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

let samples = [
  { id: 1, name: "Duc", result: 10 },
  { id: 2, name: "Hop", result: 1 },
  { id: 3, name: "Qanh", result: 2 },
];

for (let i of samples) {
  if (i.result > 5) {
    console.log(i);
    console.log("Pass");
  } else if (i.result < 5) {
    console.log(i);
    console.log("Fail");
  }
}

function getResult(sample) {
  let sum = 0;

  for (let i of samples) {
    sum += i.result;
  }

  return sum;
}

console.log(getResult(samples));

function findMax(samples) {
  let max = 0;

  for (let i of samples) {
    if (i.result > max) {
      max = i.result;
    }
  }
  return max;
}

console.log(findMax(samples));
