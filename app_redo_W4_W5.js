//W4 lab 1
let scores = [
  { id: 1, name: "Quy Duc", result: 10 },
  { id: 2, name: "Minh Le", result: 1 },
  { id: 3, name: "Giang", result: 7 },
  { id: 4, name: "Tan", result: 4 },
];

let highResultStudents = [];
for (let i = 0; i < scores.length; i++) {
  if (scores[i].result > 5) {
    highResultStudents.push(scores[i]);
  }
}
console.log("Highscore Students", highResultStudents);

let sumResults = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i].result;
  }
  return total;
};
console.log("Total scores", sumResults(scores));

function findMaxResult(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].result > max.result) {
      max = arr[i];
    }
  }
  return max;
}
console.log("Highest score:", findMaxResult(scores));

// W4 lab 2
let form = document.querySelector("#ScoresForm");
let messageContainer = document.querySelector("#message-container");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let studentName = document.querySelector("#studentName").value;
  let scores = document.querySelector("#scores").value;

  messageContainer.innerHTML = "";

  if (studentName.trim() === "" || scores === "" || Number(scores) <= 0) {
    let errorMsg = document.createElement("p");
    errorMsg.textContent = "Error, Wrong or missing data";
    errorMsg.style.color = "red";

    messageContainer.appendChild(errorMsg);
  } else {
    let successMsg = document.createElement("p");
    successMsg.textContent = "Ready to submit.";
    successMsg.style.color = "green";

    messageContainer.appendChild(successMsg);
    console.log("Form is valid ready to send.");
  }
});

// W5 lab 1
async function networkDelay() {
  return new Promise((resolve) => {
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

//W5 lab 2
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
      let row = document.createElement("tr");

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
    console.error("Error", error);
  }
}

loadUsers();
