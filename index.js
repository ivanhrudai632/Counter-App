let count = 0;
const countElement = document.getElementById("count");

function increment() {
  count++;
  countElement.textContent = count;
}

function decrement() {
  count--;
  countElement.textContent = count;
}