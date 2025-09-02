// ======================
// Part 1: Variables + Conditionals
// ======================
let age = 18;
let name = "Hassan";

if (age >= 18) {
    console.log(name + " is an adult.");
} else {
    console.log(name + " is not an adult.");
}

// ======================
// Part 2: Custom Functions
// ======================
function greetUser(username) {
    console.log("Hello " + username + "!");
}

function squareNumber(num) {
    return num * num;
}

// Call functions
greetUser("Hassan");
console.log("Square of 4 is:", squareNumber(4));

// ======================
// Part 3: Loops
// ======================
// Example 1: For loop
for (let i = 1; i <= 5; i++) {
    console.log("For loop number:", i);
}

// Example 2: While loop
let count = 0;
while (count < 3) {
    console.log("While loop count:", count);
    count++;
}

// ======================
// Part 4: DOM Interactions
// ======================
// 1. Change text content of an element
document.getElementById("main-title").style.color = "red";

// 2. Add event listener to button to change title
document.getElementById("btn-change").addEventListener("click", function() {
    document.getElementById("main-title").textContent = "Title Changed!";
});

// 3. Add a new list item when button is clicked
document.getElementById("btn-add").addEventListener("click", function() {
    let newItem = document.createElement("li");
    newItem.textContent = "New Item Added";
    document.getElementById("list").appendChild(newItem);
});
