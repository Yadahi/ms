const bleskEl = document.getElementById("blesk");
const mountainsEl = document.getElementById("mountains");

function showSvg() {
  bleskEl.classList.remove("hidden");
  mountainsEl.classList.add("shake");
  setTimeout(hideSvg, 1000); // Show for 1 second
}

function hideSvg() {
  bleskEl.classList.add("hidden");
  mountainsEl.classList.remove("shake");
  setTimeout(showSvg, 3000); // Hide for 5 seconds
}

showSvg();
