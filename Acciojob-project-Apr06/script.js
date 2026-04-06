let employees = [];
let idCounter = 1;

function addEmployee() {
  const name = document.getElementById("name").value.trim();
  const profession = document.getElementById("profession").value.trim();
  const age = document.getElementById("age").value.trim();
  const message = document.getElementById("message");

  if (!name || !profession || !age) {
    message.textContent =
      "Error: Please Make sure All the fields are filled before adding in an employee!";
    message.className = "error";
    return;
  }

  const employee = {
    id: idCounter++,
    name,
    profession,
    age: Number(age),
  };

  employees.push(employee);

  message.textContent = "Success: Employee Added!";
  message.className = "success";

  document.getElementById("name").value = "";
  document.getElementById("profession").value = "";
  document.getElementById("age").value = "";

  renderEmployees();
}

function renderEmployees() {
  const container = document.getElementById("employees");
  const count = document.getElementById("count");

  container.innerHTML = "";
  count.textContent = "";

  employees.forEach((emp) => {
    const div = document.createElement("div");
    div.className = "employee";

    div.innerHTML = `
          <span>${emp.id}. Name: ${emp.name} Profession: ${emp.profession}  Age: ${emp.age}</span>
          <button onclick="deleteEmployee(${emp.id})">Delete User</button>
        `;

    container.appendChild(div);
  });
}

function deleteEmployee(id) {
  employees = employees.filter((emp) => emp.id !== id);
  renderEmployees();
}
