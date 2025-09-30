let count = 0;

function calculateResult() {
  let name = document.getElementById("studentName").value;
  let marks = Number(document.getElementById("marks").value);

  let grade;
  switch (true) {
    case (marks >= 90): grade = "A+"; break;
    case (marks >= 75): grade = "A"; break;
    case (marks >= 60): grade = "B"; break;
    case (marks >= 45): grade = "C"; break;
    default: grade = "Fail";
  }

  let status = (marks >= 35) ? "✅ Pass" : "❌ Fail";

  document.getElementById("output").innerHTML = `
    <h5>Result for <b>${name}</b></h5>
    <p>Marks: ${marks}</p>
    <p>Grade: ${grade}</p>
    <p>Status: ${status}</p>
  `;

  count++;
  let historyTable = document.getElementById("historyTable");

  if (count === 1) {
    historyTable.innerHTML = "";
  }

  historyTable.innerHTML += `
    <tr>
      <td>${count}</td>
      <td>${name}</td>
      <td>${marks}</td>
      <td>${grade}</td>
      <td>${status}</td>
    </tr>
  `;
}
