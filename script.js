let startTime, interval, elapsed = 0;
let running = false;

function updateTime() {
  const now = Date.now();
  const diff = now - startTime + elapsed;

  const hours = String(Math.floor(diff / 3600000)).padStart(2, '0');
  const minutes = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
  const seconds = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');

  document.getElementById("time").textContent = `${hours}:${minutes}:${seconds}`;
}

function startStop() {
  if (!running) {
    startTime = Date.now();
    interval = setInterval(updateTime, 1000);
    running = true;
  }
}

function pause() {
  if (running) {
    clearInterval(interval);
    elapsed += Date.now() - startTime;
    running = false;
  }
}

function reset() {
  clearInterval(interval);
  elapsed = 0;
  running = false;
  document.getElementById("time").textContent = "00:00:00";
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  if (running) {
    const lapTime = document.getElementById("time").textContent;
    const li = document.createElement("li");
    li.textContent = `Lap: ${lapTime}`;
    document.getElementById("laps").appendChild(li);

    // 🔊 Play sound
    document.getElementById("lap-sound").play();
  }
}

function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}
