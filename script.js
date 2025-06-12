let light = 0;
let fingers = 0;
let lightPerSecond = 0;

const lightDisplay = document.getElementById("lightDisplay");
const clickButton = document.getElementById("clickButton");
const fingerButton = document.getElementById("fingerUpgrade");
const fingersOwned = document.getElementById("fingersOwned");

// Manual clicking
clickButton.addEventListener("click", () => {
  light++;
  updateDisplay();
});

// Buy generator
fingerButton.addEventListener("click", () => {
  if (light >= 10) {
    light -= 10;
    fingers++;
    lightPerSecond += 0.1;
    updateDisplay();
  }
});

// Passive light gain
setInterval(() => {
  light += lightPerSecond;
  updateDisplay();
}, 1000);

// Display update
function updateDisplay() {
  lightDisplay.textContent = `Light: ${light.toFixed(1)}`;
  fingersOwned.textContent = `Fingers: ${fingers}`;
}

// the log and diary
function openLog(event, tabName) {
  const tabs = document.querySelectorAll(".log-content");
  const buttons = document.querySelectorAll(".tab-btn");

  tabs.forEach(tab => tab.classList.remove("active"));
  buttons.forEach(btn => btn.classList.remove("active"));

  document.getElementById(tabName).classList.add("active");
  event.target.classList.add("active");
//adds stuff to the log
  function addWhisper(text) {
  const whisperLog = document.getElementById("whispers");
  const entry = document.createElement("p");
  entry.innerHTML = `<em>They whisper:</em> "${text}"`;
  whisperLog.appendChild(entry);
}

}

