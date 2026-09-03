// alert("Hello from an external script!");
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

let card = document.querySelector(".section");

console.log(card);

card.textContent = "This card content has been changed";
card.style.backgroundColor = "lightblue";
card.style.color = "pink";
card.style.fontSize = "50px";

console.log(card);

let noti = document.createElement("div");
let message = document.createElement("p");

message.textContent = "This is a notification";
noti.appendChild(message);

document.body.appendChild(noti);

let form = document.querySelector("#Submit");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let age = document.querySelector("#tuoi").value;

  if (age === "" || Number(age) <= 0) {
    let oldNoti = document.querySelector("#error_noti");

    if (oldNoti) {
      oldNoti.remove();
    }

    let noti = document.createElement("div");
    noti.id = "error_noti";

    let message = document.createElement("p");
    message.textContent = "Age must be a positive number.";
    message.style.color = "red";
    message.style.fontWeght = "bold";
    message.style.fontSize = "50px";
    message.style.backgroundColor = "green";

    noti.appendChild(message);
    form.appendChild(noti);

    setTimeout(function () {
      noti.remove();
    }, 5000);
  } else {
    let oldNoti = document.querySelector("#correct_noti");

    if (oldNoti) {
      oldNoti.remove();
    }

    let noti = document.createElement("div");
    noti.id = "correct_noti";

    let message = document.createElement("p");
    message.textContent = "Ready to Submit";
    message.style.color = "pink";
    message.style.fontWeght = "bold";
    message.style.fontSize = "50px";
    message.style.backgroundColor = "blue";

    noti.appendChild(message);
    form.appendChild(noti);

    setTimeout(function () {
      noti.remove();
    }, 5000);
  }
});

//W5
fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data); // parsed array of users
  })
  .catch(function (error) {
    console.error("Something went wrong:", error);
  });

function simulateNetworkDelay() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data load success");
    }, 2000);
  });
}
success;

function runWithThen() {
  console.log("Loading data (Then) ...");
  simulateNetworkDelay()
    .then(function (result) {
      console.log("Then result", result);
    })
    .catch(function (error) {
      console.error("Error", error);
    });
}

async function runWithAsyncAwait() {
  console.log("Loading data (Async/Await) ...");
  try {
    const result = await simulateNetworkDelay();
    console.log("Async/Await result", result);
  } catch (error) {
    console.error("Error", error);
  }
}

runWithThen();
runWithAsyncAwait();

async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
}

async function loadUsers() {
  try {
    const userData = await fetchUsers();
    let tbody = document.querySelector("#user-table tbody");

    tbody.innerHTML = "";

    userData.forEach(function (user) {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name.toUpperCase()}</td>
        <td>${user.email.toLowerCase()}</td>
        <td>${user.address.street + "-" + user.address.city}</td> 
        <td>${user.phone}</td>
      `;
      tbody.appendChild(row);
    });
  } catch (error) {
    console.error("Có lỗi xảy ra khi tải danh sách người dùng:", error);
  }
}

loadUsers();
