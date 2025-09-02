// Hassan's Custom Form Validation
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // stop form submit

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = "";

  if (name === "") {
    message = "Name is required";
  } else if (email === "" || !email.includes("@")) {
    message = "Valid email is required";
  } else {
    message = "Form submitted successfully!";
  }

  document.getElementById("formMessage").textContent = message;
});

// Hassan's Show / Hide Password
document.getElementById("showPass").addEventListener("change", function() {
  let passField = document.getElementById("password");
  if (this.checked) {
    passField.type = "text"; // show password
  } else {
    passField.type = "password"; // hide password
  }
});

// Hassan's Counter Feature
let count = 0;
document.getElementById("countBtn").addEventListener("click", function() {
  count++;
  document.getElementById("count").textContent = count;
});
