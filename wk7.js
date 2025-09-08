// Hassan Ibrahim Suleiman - JavaScript Functions + DOM Animations

// Part 2: Functions, Scope, Parameters, Return Values

// Global variable
let globalCount = 0;

// Function with parameter + return value
function addNumbers(a, b) {
  let result = a + b; // local variable
  return result;
}

// Reusable function to toggle box animation
function toggleBoxAnimation() {
  let box = document.getElementById("box");
  box.classList.toggle("bounce");
}

// Example: increment global variable
function incrementGlobal() {
  globalCount++;
  console.log("Global count is now:", globalCount, " - by Hassan Ibrahim Suleiman");
}

// ------------------ DOM Interactions ------------------

// Button to animate box
document.getElementById("moveBtn").addEventListener("click", function() {
  toggleBoxAnimation();
  incrementGlobal();
});

// Popup logic
let popup = document.getElementById("popup");
let showBtn = document.getElementById("popupBtn");
let closeBtn = document.getElementById("closePopup");

showBtn.addEventListener("click", function() {
  popup.classList.add("show");
});

closeBtn.addEventListener("click", function() {
  popup.classList.remove("show");
});

// Testing function with return value
console.log("2 + 3 =", addNumbers(2, 3), " (calculated by Hassan Ibrahim Suleiman)");
