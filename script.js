let streakCount = 0;

function addMedicine() {
  const medicine = document.getElementById("medicine").value;
  const time = document.getElementById("time").value;

  if (medicine === "" || time === "") {
    alert("Please enter medicine and time");
    return;
  }

  const li = document.createElement("li");
  li.textContent = `${medicine} at ${time} ✔`;
  document.getElementById("medicineList").appendChild(li);

  streakCount++;
  document.getElementById("streak").textContent = streakCount;

  document.getElementById("medicine").value = "";
  document.getElementById("time").value = "";
}

function updateWatchData() {
  const heartRate = Math.floor(Math.random() * (90 - 65) + 65);
  const steps = Math.floor(Math.random() * 8000);

  document.getElementById("heartRate").textContent = heartRate;
  document.getElementById("steps").textContent = steps;
}

const messages = [
  "Consistency today builds a healthier tomorrow 🌱",
  "Great job! Don’t forget your evening walk 🚶",
  "Small habits make a big difference 💪",
  "Take care of yourself — your future self will thank you ❤️"
];

function changeMessage() {
  const random = Math.floor(Math.random() * messages.length);
  document.getElementById("aiMessage").textContent = messages[random];
}
